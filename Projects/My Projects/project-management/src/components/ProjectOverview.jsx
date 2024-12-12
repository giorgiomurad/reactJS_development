import { useRef } from "react";

function ProjectOverview({ project, deleteProject, addTask, clearTask, tasks }) {
  const newTask = useRef();
  const { title, description, dueDate } = project;


  function handleAddTask() {

    addTask(newTask.current.value);
    newTask.current.value = '';
  }

  return <section className="w-3/4 px-12 my-16">
    <div className="flex justify-between">
      <div>
        <h1 className="text-5xl font-bold">{title}</h1>
      </div>
      <button className="p-5 text-xl"
        onClick={deleteProject}
      >
        Delete
      </button>
    </div>
    <p className="my-3 text-2xl text-gray-500">{dueDate}</p>
    <p className="text-lg">{description}</p>
    
    <hr className="border border-gray-300 rouded-full my-5" />
    
    <h1 className="text-3xl font-bold">Tasks</h1>
    <input className="w-1/2 bg-gray-200 my-3 p-2 text-lg rounded-lg border-b-2 border-gray-200 focus:outline-none focus:border-black focus:animate-border-show" ref={newTask} type='text' />
    <button className="p-4" onClick={handleAddTask}>Add Task</button>
      <ul>
      {
        tasks.map((task, index) => {
          
          return <li className="my-3 p-4 flex justify-between text-lg bg-gray-200 rounded-lg animate-new-task" key={index}>
            <p>{task}</p>
            <button 
              onClick={() => clearTask(index)}
            >Clear</button>
            </li>
        })
      } 
      </ul>
  </section>
}

export default ProjectOverview;