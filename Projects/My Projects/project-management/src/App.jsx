import { useRef, useState } from 'react'
import './App.css'

import ProjectSideBar from './components/ProjectSideBar';
import NoProjectBody from './components/NoProjectBody';
import ProjectForm from './components/ProjectForm';
import ProjectOverview from './components/ProjectOverview';
import ConfirmDelete from './components/ConfirmDelete';

function App() {
  const dialog = useRef();
  const [contentId, setContentId] = useState(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState();
  const [tasks, setTasks] = useState([])
  const [projects, setProjects] = useState([]);


  function handleSelectedProject(index) {

    setSelectedProjectIndex(index);
    setContentId(2);
  }

  function handleCancelNewProject() {

    setSelectedProjectIndex(null);
    setContentId(0);
  }

  function handleCreateNewProject() {

    setSelectedProjectIndex(null);
    setContentId(1);
  }

  function addNewProject(project) {
    let temp = {
      id:           (projects.length !== 0) ? projects[projects.length-1].id+1 : 0,
      title:        project.title,
      description:  project.description,
      dueDate:      project.dueDate,
    }

    setProjects(prevProjects => [ ...prevProjects, temp ]);
    setTasks(prevTasks => [ ...prevTasks, [] ]);
    setContentId(0);
  }

  function handleConfirmDelete() {
    dialog.current.open();

  }

  function handleDeleteProject(e) {
    e.preventDefault();
    let tempProjects = [];

    for(let i = 0; i < projects.length; i++) {
      if(i !== selectedProjectIndex)
        tempProjects.push(projects[i]);
    }

    setProjects(tempProjects);
    clearProjectTasks();
    setSelectedProjectIndex(null);
    setContentId(0);
  }

  function clearProjectTasks() {
    let tempTasks = [];

    for(let i = 0; i < tasks.length; i++) {
      if(i !== selectedProjectIndex)
        tempTasks.push(tasks[i])
    }

    setTasks(tempTasks);
  }

  function handleAddTask(task) {
    let temp = [ ...tasks[selectedProjectIndex], task];

    let newt =[];
    for(let i = 0; i < tasks.length; i++) {
      if(i === selectedProjectIndex)
        newt.push(temp);
      else
        newt.push(tasks[i]);
    }

    setTasks(newt);
  }

  function handleClearTask(index) {
    let temp = tasks[selectedProjectIndex];

    let newtemp = [];
    for(let i = 0; i < temp.length; i++) {
      if (i !== index)
        newtemp.push(temp[i]);
    }

    let newtasks = [];
    for(let j = 0; j < tasks.length; j++) {
      if(j === selectedProjectIndex)
        newtasks.push(newtemp);
      else
        newtasks.push(tasks[j]);
    }

    setTasks(newtasks);
  }


  return <div className='flex'>
    {
      (selectedProjectIndex !== null && projects.length > 0) ?
      <ConfirmDelete ref={dialog} title={projects[selectedProjectIndex].title} onDelete={handleDeleteProject} /> :
      ''
    }
    <ProjectSideBar
        projects={projects}
        selectedId={selectedProjectIndex} 
        onSelectProject={handleSelectedProject}
        onCreateProject={handleCreateNewProject}    
    />
    { (contentId === 0) && <NoProjectBody onNewProject={handleCreateNewProject} /> }
    { (contentId === 1) && <ProjectForm onSubmit={addNewProject} onCancel={handleCancelNewProject} /> }
    { 
      (contentId === 2) &&
      <ProjectOverview 
        project={projects[selectedProjectIndex]}
        deleteProject={handleConfirmDelete}
        addTask={handleAddTask} 
        tasks={tasks[selectedProjectIndex]} 
        clearTask={handleClearTask}
      />
    }
  </div>
}

export default App