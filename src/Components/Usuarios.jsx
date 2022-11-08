import React from 'react'
import '../Stylesheets/Usuarios.css'
export const Usuarios = ({ id, nombre, apellido, eliminarUsuario, editarUsuario }) => {  
  return (
      <div>
        <div className='contenedor-lista'>
            <div className='texto-usuario'>
                {nombre +" - "+ apellido}
            </div>
            <div className='btn btn-outline-secondary' onClick={()=>editarUsuario(id)}>Editar</div>
            <div className='btn btn-danger' onClick={()=>eliminarUsuario(id)}>Eliminar</div>
        </div>
        
    </div>
  )
}
