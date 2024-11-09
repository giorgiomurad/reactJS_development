import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

 const ResultModal = forwardRef(function ResultModal({ remainingTime, targetTime, onReset }, ref) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const score = Math.floor((targetTime - remainingTime) / targetTime * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });

  return createPortal(
  <dialog ref={dialog} className="p-16 text-xl text-white border-2 border-green-900 bg-gradient-to-br from-green-400 to-slate-800 animate-show-modal" onClose={onReset}>
    <h2 className="font-[Silkscreen] text-5xl text-center text-black my-4">You {userLost ? 'Lost' : 'Won!'}</h2>
    {!userLost && <h3 className="font-[Silkscreen] text-5xl">Your Score : {score}</h3>}
    <p>Your target time was <strong className="text-green-400">{targetTime}</strong> { targetTime > 1 ? 'seconds' : 'second'}.</p>
    <p>
      {
        !userLost ?
        `You stopped the timer with ${remainingTime} seconds left` 
        :
        'Your time is up.'
      }
    </p>
    <form className="text-center" method='dialog' onSubmit={onReset}>
      <button className="my-4 p-3 w-4/5 place-items-end text-center bg-black border border-green-500">Okay!</button>
    </form>
  </dialog>,
  document.getElementById('modal'));
});


export default ResultModal;