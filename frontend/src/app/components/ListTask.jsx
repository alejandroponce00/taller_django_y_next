async function loadTasks(){
  const res = await fetch(`${process.env.BACKEND_URL}/api/tasks/`)
  const tasks = await res.json()
  return tasks
}

async function ListTask() {
  const tasks = await loadTasks()
  console.log(tasks)
  return (
    <div className="bg-slate-700 p-4 w-full"><h1>Turnos</h1>
    {tasks.map(task => (
      <div key={task.id} className="bg-slate-500 px-4 py-3">
        <h2 ><p><strong  className="text-black text-xl">vehiculo  </strong>: {task.vehiculo}</p></h2>
        <p><strong  className="text-black text-xl">Dueño  </strong>: {task.dueño}</p>
        <p><strong  className="text-black text-xl">Patente  </strong>: {task.patente}</p>
        <p><strong  className="text-black text-xl">reparar  </strong>: {task.reparar}</p>
        </div>
    ))}
    
    </div>
  )
}

export default ListTask