
  
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/App.css';
import { useNavigate } from 'react-router-dom';


function Final(props) {
  const nombre = JSON.parse(localStorage.getItem('nombre'));
let navigate = useNavigate();
const handleIniciar = () =>{ 
  let path = '/'; 
  navigate(path);
}

  return (  
    <div className="contenedor__todo"> 
     <p className="typed">Hiciste un gran esfuerzo, {nombre} </p>
     <p className="typed">Obtuviste {6} respuesta(s) correcta(s) de un total de 8. </p>
                            
                            <p>La práctica hace al maestro. Cuanto más sepas qué elementos
                                 debes buscar, más protegido estarás de los ataques de suplantación de identidad (phishing).</p>
                               
                                <p> También puedes seguir algunos pasos sencillos para optimizar la protección de tus cuentas en línea. Obtén más información en g.co/2SV.</p>
                               
                                
                   
                      
                   
                <button  className="sup5" onClick={()=>handleIniciar()}>VOLVER A INICIAR EL CUESTIONARIO</button> 
</div>
         
        );
}

export default Final;
 