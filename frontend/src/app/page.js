'use client'


import { useEffect,useState } from "react";
import axios from 'axios';
 
export default function Home() {
  const [tasks, setTasks]= useState([])

useEffect(() => {
  axios.get('http://127.0.0.1:8000/api/tasks/')
    .then(({ data }) =>{
      setTasks(_tareas =>{
        console.log(data)
        return data
      })
    })
},[])

  return (
    <main className="flex min-h-screen flex-col items-center  p-14">
     <h1>Prueba Api</h1> 
     <div>
        
        <div className="">
        {
          tasks.map(tasks => (
            <div key={tasks.id} className="border-4">
              <p><strong>Dueño:</strong>{tasks.dueño}</p>
              <p><strong>Vehiculo:</strong>{tasks.vehiculo}</p>
              <p><strong>Patente:</strong>{tasks.patente}</p>
              <p><strong>Reparar:</strong>{tasks.reparar}</p>
              <p><strong>Reparado:</strong>{tasks.done}</p>
              <p><strong>Fecha:</strong>{tasks.fecha}</p>
            </div>
          ))
        }</div>
      </div>
    </main>
  );
}
