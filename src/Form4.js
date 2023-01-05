
import './assets/css/Forms.css';
import React from 'react-router-dom';


import ModalCuerpo4  from './components/ModalCuerpo4';


import { Fragment, useState , useEffect} from 'react';

import Modal4 from './components/Modal4';
import ModalCuerpo from './components/Modalcuerpo';
import pdf from "./assets/images/pdf1.png"
import person from "./assets/images/person.png"
import Botones from './components/Botones';


const  Formulario = (props)=> {

  const nombre = JSON.parse(localStorage.getItem('nombre'));
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
    
    <>


      <div className="encabezado1">
        <p className="encabezado2"> Prueba: 5/8</p>
        <div className="encabezado">
       
          <div id="mostrar1">
          <div className="form">
          {show ? (
              <div>
                <h1 class="centrar">Recibiste un nuevo tipo de informe de la escuela</h1>
                    
                    <h5>**********************************************************************************************************************************************************************</h5>
                    
                
                        <p>Por lo general, sus correos electrónicos provienen de "sara.martin@centrowestmount.org".</p>
                    
                    
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
                    <h4>Ese era un mensaje de suplantación de identidad (phishing) difícil de detectar.
                       Los archivos PDF pueden contener virus o software malicioso. Siempre debes asegurarte de que el remitente 
                       sea confiable y debes usar tu navegador o un servicio en línea como Google Drive para abrirlos de forma segura.</h4>
                    <button type="button"className="supnew"  onClick={() => setCount(count + 1)}> MOSTRARME</button> 
                    
                  </div>
                  
                ) }
                
                {myOption === "legitimo" &&(
                
                  <div id="mostrar3">
                  <h1 className="rojo">Esta es una comunicación legítima de Dropbox. El remitente es "dropboxmail.com", 
                  que, si bien es inusual, es legítimo, y la URL es un vínculo seguro (HTTPS) a "dropbox.com".</h1>
                  <br>
                  </br>
                  <h4>Ese era un mensaje de suplantación de identidad (phishing) difícil de detectar. Los archivos PDF pueden contener virus o software malicioso. 
                    Siempre debes asegurarte de que el remitente sea confiable y debes usar tu navegador o un servicio en línea como Google 
                    Drive para abrirlos de forma segura.</h4>
                  <button type="button"className="supnew"   onClick={() => setCount(count + 1)}> MOSTRARME</button> 
                  </div>
                
                  )}
              </div>  
             </div>
          </div>
        </div>
        
      
                  
      </div>


      <div className="cuerpo">


        <p className="pos3">S</p>
        <p className="pos2">Sara Martín {'<'} sara.martin@escuelawestmount.org{'>'}</p>

        <p className="pos1"> Para mi</p>
        <div className="contenedor_modal">
        
            <Modal4/>
            {count ? (
          <ModalCuerpo4/>
          ) : (
            <div style={{ color: 'blue' }}></div>
        )}
          
           
        </div>
        
       

      </div>
      <div className="cuerpoprincipalcorreo">
        
        <p className="parrafocorreo">Buen día, {nombre} </p>
             <p className="parrafocorreo">Aqui encontrarás adjunto el informe de la actividad financiera de 2022 para que lo analices</p>                    
            <p className="parrafocorreo">Saludos cordiales,  </p>
            <p className="parrafocorreo"> Sra. Sara Martín</p>
            <p className="parrafocorreo">Colegio Mantellano</p>
            <img  style={{width:150, height:150}} src={pdf}/>
         
         

     

      </div>
    </ >
  );
}

export default Formulario;
