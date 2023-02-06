import React, { useContext } from 'react'
import PersonajeCard from './personajestarj.jsx'
import {Context} from "../store/appContext.jsx";

export default function personajes() {
const {store} = useContext(Context);

  return (
    <div className='container mt-5'>
      <div className='row'>
        <h2 style={{color: "skyblue"}}>personajes</h2>
      </div>
     
      <div className="d-flex scrollable charaSize">
      {store.personajesGuardados.map((personaje)=>{return(<PersonajeCard characterName={personaje.name} key={personaje.url} id={personaje.uid}/>)})}
      </div>
      
    </div>
  )
}
