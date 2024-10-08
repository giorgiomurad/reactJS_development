function Input({ label, valid, ...props }) {
  let labelClasses = 'block mb-2 text-xs font-bold uppercase tracking-wide';
  let inputClasses = 'w-full px-3 py-2 leading-tight border rounded shadow';

  if(valid) {
    labelClasses += ' text-stone-400';
    inputClasses += ' text-gray-500 bg-stone-200';
  } else {
    labelClasses += ' text-red-200';
    inputClasses += ' text-red-700 bg-red-300';
  }

  return <p className="my-4">
    <label className={labelClasses}>{label}</label>
    <input className={inputClasses} {...props} />
  </p>
}

export default Input;