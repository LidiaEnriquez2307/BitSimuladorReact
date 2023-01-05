
import './assets/css/Forms.css';
import React from 'react-router-dom';
import { Fragment,  useState , useEffect } from 'react';
import ObtenerFormulario from './components/ObtenerFormulario';
import Modal2  from './components/Modal2';
import ModalCuerpo2  from './components/ModalCuerpo2';
import image from "./assets/images/word.png"


function Formulario() {
  const options = ["phishing", "legitimo",];
  const [myOption, setMyOption] = useState("");
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const a=0;
  const b=0;
  useEffect(() => {
    // Update the document title using the browser API
    
  });

  return (
    <Fragment>


      <div className="encabezado1">
        <p className="encabezado2"> Prueba: 3/8</p>
        <div className="encabezado">

          <div id="mostrar1">
          <div className="form">
                            
         
                        {show ? (
                          <div>
                           <h1 class="centrar">Es hora de hacer un viaje por el túnel de los recuerdos.</h1>
                    
                           <h5>**********************************************************************************************************************************************************************</h5>
                         
                       
           
                {options.map(option=>(
                  <button type="button"  key={option}  onClick={()=>{setMyOption(option);setShow(false)}} className="supr">{option.toLocaleUpperCase()}</button>
                ))}
              </div>
            ) : (
                <div style={{ color: 'blue' }}></div>
            )}
              
              <div>
                
                {myOption === "phishing" &&(
                  
                 
                  <div id="mostrar2" >   
                    <h1 className="verde">¡Correcto! Este es un correo electrónico de suplantación de identidad (phishing)</h1>
                    <h4>Parece que detectaste la URL falsa. El dominio real es "sytez.net", que está diseñado para
                             que se vea parecido a Google Drive. Recuerda tener especial precaución si no estás 
                             seguro de conocer al remitente. </h4>
                    <button type="button"className="supnew"  onClick={() => setCount(count + 1)}> MOSTRARME</button> 
                    
                  </div>
                  
                ) }
                
                {myOption === "legitimo" &&(
                
                  <div id="mostrar3">
                  <h1 className="rojo">En realidad, este es un correo electrónico de suplantación de identidad (phishing)</h1>
                  <br>
                  </br>
                  <h4>Parece que no lograste detectar la URL falsa. El dominio real es "sytez.net", pero está diseñado para que se vea parecido 
                            a Google Drive. Recuerda tener especial precaución si no estás seguro de conocer al remitente.
                        </h4>
                  <button type="button"className="supnew" onClick={() => setCount(count + 1)}> MOSTRARME</button> 
                  </div>
                
                  )}
              </div>  
             </div>
          </div>
        </div>
        
      
                  
      </div>


      <div className="cuerpo">


        <p className="pos3">T</p>
        <p className="pos2"> TK {'<'}tk867530@gmail.com {'>'}</p>

        <p className="pos1"> Para mi</p>
        <div className="contenedor_modal">
            <Modal2/>
        </div>
        
       

      </div>
      <div className="cuerpoprincipal11">
        <div className="cuerpocorreo11">
        <p>Hola. ¿Recuerdas <a  href="https://drive.google.com.download-photo.sytez.net/AONh1e0hVP">ESTA FOTO?</a></p>  
        {count ? (
          <ModalCuerpo2/>
          ) : (
            <div style={{ color: 'blue' }}></div>
        )}               
          

          
        </div>

      </div>




    </Fragment>


  );
}

export default Formulario;
