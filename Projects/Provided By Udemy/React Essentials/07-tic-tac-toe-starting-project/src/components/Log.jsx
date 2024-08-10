import Player from "./Player";

function Log({ turns }) {

  return <ol id="log">
  {
    turns.map((turn, index) => {
      const { square, player } = turn;
      const { row, col } = square;

      return <li key={`${row}${col}`}>Player {player}: {row}-{col}</li>
    })
  }
  </ol>
}

export default Log;