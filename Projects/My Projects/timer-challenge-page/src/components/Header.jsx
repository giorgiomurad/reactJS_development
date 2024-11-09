import { useRef, useState } from "react";

function Header() {
  const inputRef = useRef();
  const [playerName, setPlayerName] = useState();

  
  function handleSave() {
    setPlayerName(inputRef.current.value);

    inputRef.current.value = '';
  }

  return <header className="mx-auto my-12 p-3 w-10/12 flex flex-col gap-7 bg-slate-900 border-2 border-green-400 rounded-lg font-[Silkscreen] text-white text-center">
    <h1 className="text-6xl">The <span className="text-green-300">Almost</span> Final Countdown</h1>
    <p className="text-2xl font-mono">Stop the timer once you estimate that the time is (almost) up.</p>
    <h2 className="text-3xl">Welcome <span className="text-green-300">{playerName ?? 'Player'}</span>!</h2>
    <div className="flex flex-row justify-center items-center gap-2 font-sans">
      <p className="text-lg">Enter Name:</p>
      <input ref={inputRef} className="bg-transparent p-1 border rounded-md border-green-300" type="text" />
      <button className="bg-transparent p-1 border rounded-md border-green-300 hover:text-green-200 active:text-green-500 duration-500" onClick={handleSave}>Save</button>
    </div>
  </header>
}

export default Header;