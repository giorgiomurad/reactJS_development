import { useRef, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

const ConfirmDelete = forwardRef(function ConfirmDelete({ title, onDelete }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    }
  })

  return createPortal(
    <dialog className='w-1/2 p-10 animate-show-modal' ref={dialog}>
      <h2 className='text-4xl text-center font-extrabold'>{title}</h2>
      <p className='my-4 text-lg'>Are you sure you want to delete this project?</p>
      <form className='text-center' method="dialog">
        <button className='w-1/3 mx-5 p-2 bg-black text-white'>No</button>
        <button className='w-1/3 mx-5 p-2 bg-red-500 text-white' onClick={onDelete}>Yes</button>
      </form>
    </dialog>,
    document.getElementById('dialog')
  );
});

export default ConfirmDelete;