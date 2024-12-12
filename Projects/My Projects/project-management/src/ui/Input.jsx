import { forwardRef } from "react";

const Input = forwardRef(function Input({ title, type }, ref) {

  return <div className="flex flex-col">
  <label className="text-gray-500 font-mono text-lg uppercase font-bold ">{title}</label>
  {
    (type === 'textarea') ?
    <textarea ref={ref} className="p-2 border-b-2 border-gray-200 bg-gray-200 text-gray-700 text-lg rounded-md focus:outline-none focus:border-black focus:animate-border-show"  cols={10} rows={4}/>
    :
    <input ref={ref} className="border-b-2 border-gray-200 bg-gray-200 text-gray-700 p-1 text-lg rounded-md focus:outline-none focus:border-black focus:animate-border-show" type={type} />
  }
  
  </div>
});

export default Input;