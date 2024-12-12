import Project from "./Project";

function ProjectSideBar({ projects, selectedId, onSelectProject, onCreateProject }) {
  
  return <aside className="w-1/4 p-10 min-h-screen bg-slate-800 rounded-r-xl text-white">
    <h1 className="text-3xl font-bold uppercase">Your Projects</h1>
    <button className="my-8 p-3 bg-gray-300/20 text-gray-300 hover hover:bg-gray-700" onClick={onCreateProject}>+ Add Project</button>
    <ul>
      {
        projects.map((project, index) => {
        
        return <Project key={project.id} project={project} selectedId={selectedId} onClick={() => onSelectProject(index)}/>
      })
      }
    </ul>
  </aside>
}

export default ProjectSideBar;