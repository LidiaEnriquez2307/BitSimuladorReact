
import './assets/css/Forms.css';
import React from 'react-router-dom';
import { Fragment, useState , useEffect } from 'react';
import ObtenerFormulario from './components/ObtenerFormulario';
import Modal3  from './components/Modal3';
import ModalCuerpo3  from './components/ModalCuerpo3';
import dropbox from "./assets/images/dropbox.png"




const  Formulario = ()=> {
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
        <p className="encabezado2"> Prueba: 4/8</p>
        <div className="encabezado">
       
          <div id="mostrar1">
          <div className="form">
          {show ? (
              <div>
               <h1 class="centrar">Parece que te quedaste sin espacio de almacenamiento</h1>
                    
                    <h5>**********************************************************************************************************************************************************************</h5>
                    
                
                        <p>Me pregunto cuánto cuesta la actualización.</p>
                    
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
                    <h1 className="rojo">¡Incorrecto! No todo es tan malo.</h1>
                    <h4>Esta es una comunicación legítima de Dropbox. El remitente es "dropboxmail.com", que, si bien es inusual, es legítimo, y la URL es un vínculo seguro (HTTPS) a 
                      "dropbox.com". Si algún dominio te genera desconfianza, puedes usar un motor de búsqueda para obtener más información.</h4>
                    <button type="button"className="supnew"  onClick={() => setCount(count + 1)}> MOSTRARME</button> 
                    
                  </div>
                  
                ) }
                
                {myOption === "legitimo" &&(
                
                  <div id="mostrar3">
                  <h1 className="verde">Correcto</h1>
                  <br>
                  </br>
                  <h4>Esta es una comunicación legítima de Dropbox. El remitente es "dropboxmail.com", 
                    que, si bien es inusual, es legítimo, y la URL es un vínculo seguro (HTTPS) a "dropbox.com".


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


        <p className="pos3">D</p>
        <p className="pos2"> Dropbox {'<'}no-reply@dropboxmail.com{'>'}</p>
        

        <p className="pos1"> Para mi</p>
        <div className="contenedor_modal">
        
            <Modal3/>
          {count ? (
          <ModalCuerpo3/>
          ) : (
            <div style={{ color: 'blue' }}></div>
        )}
           
        </div>
        
       

      </div>
      <div className="cuerpoprincipal11">
        
      <img className="dropbox"  src={dropbox} />
         
         <p>Hola:</p>  
                           <p>Tu cuenta de Dropbox está llena y ya no sincroniza los archivos. No podrás acceder a los archivos nuevos que se agreguen a tu 
                            carpeta de Dropbox desde tus otros dispositivos. Además, no se crearán copias de seguridad en línea de estos archivos.</p>  
                            <p>Actualiza tu cuenta de Dropbox hoy mismo y obtén 1 TB(1,000 GB) de espacio y potentes funciones de uso compartido</p>
                           <br></br>
                            <button className= "supdropbox"> <a href="https://www.dropbox.com/buy" >Actualizar tu cuenta de Dropbox</a>  </button>
                            <br></br>
                            <br></br>
                           <p>Si deseas conocer otras formas de obtener más espacio, visita nuestra página  <a  href="https://www.dropbox.com/buy">Obtener más espacio</a> </p>
                           <p> Dsifruta de Dropbox</p>
                           <p>- El equipo de Dropbox</p>
                           <p> P.D.: Si necesitas el plan más grande que ofrecemos, consulta  </p>
                           <p>  <a  href="https://www.dropbox.com/buy">Dropbox for Business.</a> </p>
                           
          
          

        

      </div>
    </ >
  );
}

export default Formulario;

