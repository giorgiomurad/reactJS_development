import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

function Challenge({ level, targetTime }) {
  const timer  = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;


  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTime => prevTime-10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);

    dialog.current.open();
  }

  function handleReset() {

    setTimeRemaining(targetTime*1000);
  }

  if(timeRemaining <= 0) {
    clearInterval(timer.current);

    dialog.current.open();
  }


  return <>
    <ResultModal ref={dialog} remainingTime={timeRemaining/1000} targetTime={targetTime} onReset={handleReset} />
    <section className="flex flex-col w-1/3 m-5 mx-16 p-4 bg-green-300 text-center gap-5">
      <h4 className="text-3xl font-[Silkscreen]">{level}</h4>
      <p>
        Duration: {targetTime + (targetTime>1 ? ' seconds' : ' second')}
      </p>
      <p>
        <button className="bg-slate-900 w-full text-lg p-3 text-white active:text-green-200" onClick={timerActive ? handleStop : handleStart}>
          {timerActive ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerActive ? 'animate-quick-pulse' : ''}>
        {
          timerActive ?
          'Timer is Running ...' :
          'Timer Inactive'
        }
      </p>

    </section>
  </>
}

export default Challenge;