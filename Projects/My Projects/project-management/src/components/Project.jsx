function Project({ project, selectedId, onClick }) {
  const { id, title } = project;

  
  let style= '';
  if(id === selectedId)
    style = "my-3 p-3 font-semibold text-lg bg-slate-400 rounded-xl duration-200 cursor-default";
  else
    style = "my-3 p-3 font-semibold text-lg hover:bg-slate-400 rounded-xl duration-200 cursor-pointer";


  return <li className={style} onClick={() => onClick(id)}>
    {title}
  </li>
}

export default Project;