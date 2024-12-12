import img from '../assets/no-projects.png';

function NoProjectBody({ onNewProject }) {

  return <section className='w-3/4 place-content-center'>
    <div className='w-1/2 mx-auto flex-col space-y-4 text-center'>
      <img className='w-32 mx-auto object-contain' src={img} alt='no-project'/>
      <h2 className='font-bold text-2xl'>No Project Selected.</h2>
      <p className='text-lg font-extralight'>Select a project or get started with a new one.</p>
      <button className='p-3 text-white bg-slate-700 rounded-xl hover:text-gray-400 active:bg-slate-900' onClick={onNewProject}>+ Create New Project</button>
    </div>
  </section>
}

export default NoProjectBody;