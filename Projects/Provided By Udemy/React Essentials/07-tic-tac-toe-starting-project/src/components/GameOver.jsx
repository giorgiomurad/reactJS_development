function GameOver({ winner, rematch }) {

  return <div id="game-over">
    <h1>Game Over!</h1>
    {winner && <p>{winner} is the Winner!</p>}
    {!winner && <p>It's a Draw!</p>}
    <p><button onClick={rematch}>Rematch</button></p>
  </div>
}

export default GameOver;