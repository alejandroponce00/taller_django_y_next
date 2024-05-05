"use client";
import {useRouter} from "next/navigation";
import React from "react";

function TaskCard({ task }) {
const router= useRouter()

  const handleDelete = async (id) => {
    if (window.confirm("Quieres eliminar este turno?")) {
     const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}`, {
        method: "DELETE",
      })
      if (res.status === 204) {
        router.refresh();
      }
    }
  };
const handleTaskDone = async (id) =>{
  console.log(id)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}/reparado/`,{
    method:"POST",
  })
  if (res.status === 200) {
    router.refresh()
  }
   
}
  return (
    <div className="bg-slate-500 px-4 py-3 mb-2 rounded-md text-slate-200 flex justify-between items-center">
      <div>
        <h2>{task.vehiculo} 
        {task.reparado && <span> ✅</span>} </h2>
        <h2>{task.dueño}</h2>
        <h2>{task.falla}</h2>
        <p>{task.fecha}</p>
       
      </div>
      <div className="flex justify-between gap-x-2">
      <button className=
      "text-white rounded p-2 bg-green-500" onClick={() => handleTaskDone(task.id)}>
          Vehiculo Reparado
        </button>

        <button className="text-white rounded p-2 bg-red-500" onClick={() => handleDelete(task.id)}>
          Eliminar
        </button>
        <button className="text-white rounded p-2 bg-indigo-500">Actualizar</button>
      </div>
    </div>
  );
}

export default TaskCard;
