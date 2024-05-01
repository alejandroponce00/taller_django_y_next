"use client"
import React from "react";
import { useState } from "react";

function FormTask() {
  const [vehiculo, setVehiculo] = useState("");
  const [dueño, setDueño] = useState("");
  const [falla, setFalla] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res= await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/` ,{
      method: "POST",
      body: JSON.stringify({vehiculo, dueño, falla}),
      headers: {
        "Content-Type": "application/json",
      }
    })
    const data= await res.json()
    console.log(data)
  };  





  return (
    <div className="bg-slate-200 p-7">
      <form onSubmit={handleSubmit}>
        <h1 className="text-black font-bold">Añadir Turno</h1>
        <p className="text-xs text-black">
          vehiculo:
        </p>
        <input
          type="text"
          name="vehiculo"
          className="bg-slate-400 rounded-md p-2  mb-2 block w-full text-slate-800"
        onChange={e => setVehiculo(e.target.value)}
        />
        <p className="text-xs text-black">
          Dueño:
        </p>
        <textarea
          name="dueño"
          className="bg-slate-400 rounded-md p-2 mb-2 block w-full text-slate-800"
          onChange={e => setDueño(e.target.value)}
        ></textarea>
        <p className="text-xs text-black">
          falla:
        </p>
        <input
          type="text"
          name="falla"
          className="bg-slate-400 rounded-md p-2  mb-2 block w-full text-slate-800"
        onChange={e => setFalla(e.target.value)}
        />
        <button className="bg bg-indigo-400 text-black font-bold rounded-md p-2 block w-full">
          
          Save
        </button>
      </form>
    </div>
  );
}
 

export default FormTask;
