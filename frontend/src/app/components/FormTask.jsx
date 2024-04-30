'use client'
import React from "react";
import { useState } from "react";

function FormTask() {
  const [vehiculo, setVehiculo] = useState("");
  const [dueño, setDueño] = useState("");
  const handleSubmit = e => {
    e.preventDefault()
    console.log(vehiculo, dueño)
  }  




  return (
    <div className="bg-slate-200 p-7">
      <form onSubmit={handleSubmit}>
        <h1 className="text-black font-bold">Añadir Turno</h1>
        <label htmlFor="vehiculo" className="text-xs text-black">
          vehiculo:
        </label>
        <input
          type="text"
          name="vehiculo"
          className="bg-slate-400 rounded-md p-2  mb-2 block w-full text-slate-800"
        onChange={e => setVehiculo(e.target.value)}
        />
        <label htmlFor="dueño" className="text-xs text-black">
          Dueño:
        </label>
        <textarea
          name="dueño"
          className="bg-slate-400 rounded-md p-2 mb-2 block w-full text-slate-800"
          onChange={e => setDueño(e.target.value)}
        ></textarea>
        <button className="bg bg-indigo-400 text-black font-bold rounded-md p-2 block w-full">
          {" "}
          Save
        </button>
      </form>
    </div>
  );
}

export default FormTask;
