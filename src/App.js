
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/App.css';
import { useNavigate } from 'react-router-dom';


function App(props) {

let navigate = useNavigate();
const handleIniciar = () =>{ 
  let path = '/Login'; 
  navigate(path);
}

  return (
 
      <div className="contenedor__todo"> 
                  <p className="typed"><b>¿ PUEDES DETECTAR SI ERES VÍCTIMA DE SUPLATANCIÓN DE IDENTIDAD (PHISHING)?</b> </p> 
                  <p className="frase1">Identificar la suplantación de identidad (phishing) puede ser más complicado de lo que crees, es un método mediante el cual alguien
                                          finge ser una persona que conoces para engañarte y lograr que le proporciones tu información personal.</p>
                                        
                  <p className="centrar"> ¿Puedes distinguir los mensajes falsos?</p>
                  <p className="centrar1"><b> ¿ACEPTAS EL DESAFÍO?</b></p>
                  <button  className="sup" onClick={()=>handleIniciar()}>INICIEMOS...</button> 
        </div>
     
  );
}

export default App;

