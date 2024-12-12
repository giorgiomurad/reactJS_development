import { useRef } from "react";
import Input from "../ui/Input";

function ProjectForm({ onSubmit, onCancel }) {
  const title       = useRef();
  const description = useRef();
  const dueDate     = useRef();


  function submit() {
    let temp = {
      title:        title.current.value,
      description:  description.current.value,
      dueDate:      dueDate.current.value
    }

    onSubmit(temp);
  }

  function cancel() {

    title.current.value = '';
    description.current.value = '';
    dueDate.current.value = '';

    onCancel();
  }


  return <section className="w-3/4 px-4 my-8">
    <div className="flex my-9 justify-end gap-6">
      <button className="p-2 px-4" onClick={cancel}>Cancel</button>
      <button className="p-2 px-4 bg-black rounded-xl text-white" onClick={submit}>Save</button>
    </div>
    <div className="flex flex-col gap-5">
      <Input ref={title} title='title' type='text'/>
      <Input ref={description} title='description' type='textarea' />
      <Input ref={dueDate} title='due date' type='date' />
    </div>
  </section>
}

export default ProjectForm;