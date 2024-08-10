import { useState } from 'react';

import Player from './Player';
import GameBoard from './GameBoard';
import Log from './Log';
import GameOver from './GameOver';
import { WINNING_COMBINATIONS } from '../winning-combinations';

const PLAYERS = {
  X:  'Player 1',
  O:  'Player 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]  
];

function deriveActivePlayer(gameTurns) {
  let curPlayer ='X';
    
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    curPlayer = 'O'
  }

  return curPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for(const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    )
      winner = players[firstSquareSymbol];
  }

  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function GameContainer() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleChangePlayer(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ 
        square: {
          row: rowIndex,
          col: colIndex
        },
        player: currentPlayer
      }, ...prevTurns];
      return updatedTurns;
    })
  }

  function handlePlayerNameChange() {
    const { name, value } = event.target;

    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [name]: value
      }
    })
  }

  function handleRestart() {
    setGameTurns([]);
  }

  return <main>
    <div id="game-container">
      <ol id="players" className='highlight-player'>
        <Player playerName={players.X} onChangePlayerName={handlePlayerNameChange} symbol={'X'} active={activePlayer === 'X'} />
        <Player playerName={players.O} onChangePlayerName={handlePlayerNameChange} symbol={'O'} active={activePlayer === 'O'} />
      </ol>
      {( winner || hasDraw) && <GameOver winner={winner} rematch={handleRestart} /> }
      <GameBoard board={gameBoard} nextPlayer={handleChangePlayer}/>
    </div>
    <Log turns={gameTurns} />
  </main>
}

export default GameContainer;