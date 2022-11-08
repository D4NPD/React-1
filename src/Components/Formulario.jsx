import React from 'react'

const Formulario = (props) => {

  const [nombre, setNombre] = React.useState('')
  const [apellido, setApellido] = React.useState('')

  const registrarUsuario = e =>{
    e.preventDefault()
    if(!nombre.trim() || !apellido.trim()){
      alert("Por favor completar todos los campos")
    }else{
      const usuario = {
        nombre:nombre,
        apellido:apellido
      }
      props.onSubmit(usuario)
      e.target.reset()
      setApellido('')
      setNombre('')
    }
  }
  return (
    <div>
        <h1>Registro de Usuarios</h1>
        <form onSubmit={registrarUsuario}>
            <input id="input1" type="text" placeholder='Ingrese su Nombre' className='form-control my-2' onChange={(e)=>setNombre(e.target.value)}/>
            <input id="input2" type="text" placeholder='Ingrese su Apellido' className='form-control my-2' onChange={(e)=>setApellido(e.target.value)}/>
            <div className='d-grid gap-2'>
                <button className='btn btn-outline-success' type='submit'>Registrar</button>
            </div>
        </form>
    </div>
  )
}

export default Formulario

