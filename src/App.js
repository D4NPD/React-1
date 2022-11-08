import './App.css';
import Formulario from './Components/Formulario';
import { Usuarios } from './Components/Usuarios';
import React from 'react';

function App() {

  const [listaUsuarios, setLista] = React.useState([])
  const [indice, setIndice] = React.useState(0)
  const [registrado, setRegistrado] = React.useState(false)
  
  const agregarUsuario = usuario =>{
    if(registrado){
      listaUsuarios.splice(indice,1,usuario)
      setRegistrado(false)
    }else{
      setLista([...listaUsuarios,usuario])
    }
  }
  const eliminarUsuario = id =>{
    const lista = listaUsuarios.filter((usuario,index) => index !== id)
    setLista(lista)
  }
  const editarUsuario = id =>{
    setRegistrado(true)
    listaUsuarios.map((usuario,index)=>{
      if(index === id){
        document.getElementById("input1").value = usuario.nombre
        document.getElementById("input2").value = usuario.apellido
        setIndice(index)
      }
    }
    )
  }
  return (
    <div className="container mt-3">
    <Formulario onSubmit={agregarUsuario}/>
      <hr/>
      <h1>Lista de Usuarios</h1>
      {
        listaUsuarios.map((usuario,index)=>
          <Usuarios 
          key={index}
          id = {index}
          nombre = {usuario.nombre}
          apellido = {usuario.apellido}
          eliminarUsuario = {eliminarUsuario}
          editarUsuario = {editarUsuario}/>
        )
      }
    </div>
  );
}

export default App;
