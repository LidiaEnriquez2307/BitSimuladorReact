import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Forms.css';



function CrearUsuario() {

let navigate = useNavigate();
const NewForm = () =>{ 
  localStorage.setItem('nombre', JSON.stringify(data.nombre));
  localStorage.setItem('correo', JSON.stringify(data.correo));
  let path = '/Forms'; 
  navigate(path);
}

const [data,setData] = useState({
  nombre:'',
  correo:''
})

const handleInputChange = (e) => {
  setData({...data,[e.target.name]:[e.target.value]});
}


const EnviarDatos = (e) => {
  e.preventDefault();
  console.log(data.nombre +'' + data.correo);
  
  useEffect(() => {
    localStorage.setItem('data', 'hola');
  });
 // localStorage.setItem('nombre', JSON.stringify(data.nombre));
 // localStorage.setItem('correo', JSON.stringify(data.correo));
}
  return (
    
    <form onSubmit={EnviarDatos}>
      
      <div className="form-group text-left">
      <label htmlFor="exampleInputEmail1">Nombre</label>
      <input 
          type="text" 
          className="form-control" 
          id="nombre" 
          name="nombre"
          aria-describedby="emailHelp" 
          placeholder="Enter nombre" 
          onChange={handleInputChange}
      />
      </div>
      
      <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Correo</label>
          <input 
              type="email" 
              className="form-control" 
              id="correo" 
              name = "correo"
              placeholder="correo" 
              onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    
      </div>
      <button type="submit"  onClick={()=>NewForm()} className="botonlogin">Iniciar Sesion </button>
      </form>
 
 

  );
}
export default CrearUsuario;
