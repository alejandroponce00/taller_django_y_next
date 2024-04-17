'use client'
import React from "react";
import { useState } from "react";

function FormTask() {
  const [vehiculo, setVehiculo] = useState('')
  const [dueño, setDueño] = useState('')
  const [patente, setPatente] = useState('')
  const [reparar, setReparar] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(vehiculo, dueño, patente, reparar);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`,{
      method:"POST",
      body:JSON.stringify({vehiculo,dueño,patente,reparar}),
      headers: {
        "content-type":"application/json",
      }
  })
  const data = await res.json()
  console.log(data)
  };

  return (
    <div className="bg-slate-200 p-10">
      <form onSubmit={handleSubmit}>
        <h1 className="text-black">Ingresar nuevo vehiculo</h1>
      
        <input
          type="text"
          name="vehiculo"
          className="bg-slate-400 text-black rounded-md p-2
            mb-2 block"
          onChange={(e) => setVehiculo(e.target.value)}
        />
        <h1 className="text-black">Ingresar Dueño</h1>
        <input
          type="text"
          name="dueño"
          className="bg-slate-400  text-black rounded-md p-2
            mb-2 block w-full"
          onChange={(e) => setDueño(e.target.value)}
        />
        <h1 className="text-black">Ingresar Patente</h1>
        <input
          type="text"
          name="patente"
          className="bg-slate-400  text-black rounded-md p-2
            mb-2 block w-full"
          onChange={(e) => setPatente(e.target.value)}
        />
        <h1 className="text-black">Ingresar la posible falla a reparar</h1>
        <textarea
          name="reparar"
          className="bg-slate-400  text-black rounded-md p-2
            mb-2 block w-full"
          onChange={(e) => setReparar(e.target.value)}
        ></textarea>
        <button className="bg-indigo-500 text-white rounded-md">
          
          Guardar
        </button>
      </form>
    </div>
  );
}

export default FormTask;
