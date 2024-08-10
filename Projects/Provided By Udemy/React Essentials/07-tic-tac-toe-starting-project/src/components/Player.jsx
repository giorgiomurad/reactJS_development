import { useState, useRef } from "react";

function Player({ playerName, onChangePlayerName, symbol, active }) {
  const [isEditing, setIsEditing] = useState(false);


  function handleClick() {

    setIsEditing(editing => !editing);
  }

  return <li className={active ? 'active' : ''}>
    <span className="player">
      {
        isEditing ?
        <input
          autoFocus
          className="player-name"
          type="text"
          name={symbol}
          value={playerName}
          onChange={onChangePlayerName}
          required
        /> :
        <span className="player-name">{playerName}</span>
      }
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </span>
  </li>
}

export default Player;