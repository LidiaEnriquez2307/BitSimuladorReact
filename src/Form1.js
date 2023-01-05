
import './assets/css/Forms.css';
import React from 'react-router-dom';
import { Fragment ,useState , useEffect} from 'react';
import ObtenerFormulario from './components/ObtenerFormulario';
import Modal1  from './components/Modal1';
import ModalCuerpo1  from './components/ModalCuerpo1';
import ModalCuerpo11 from './components/ModalCuerpo11';
import efax from "./assets/images/efax.png"


function Formulario() {

  const d = JSON.stringify(new Date())
  const options = ["phishing", "legitimo",];
  const [myOption, setMyOption] = useState("");
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const a=0;
  const b=0;
  useEffect(() => {
    // Update the document title using the browser API
    
  });
  return (

    <Fragment>


      <div className="encabezado1">
        <p className="encabezado2"> Prueba: 2/8</p>
        <div className="encabezado">

          <div id="mostrar1">
          <div className="form">
          {show ? (   
             <div>
          <h1 class="centrar">RECIBISTE UN FAX</h1>
            <br></br>

            <h5>**********************************************************************************************************************************************************************</h5>
                  <br>
                  </br>
                    
            <p> Sabemos que estás ansioso, pero tómate tu tiempo</p>
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
                    <h4>¡Excelente! Como pudiste observar, el dominio de correo electrónico del remitente está mal escrito, ya que dice "efacks".
                    Además, el vínculo en realidad dirige a "mailru382.co". Por lo general, los mensajes de suplantación de identidad (phishing)
                    intentan engañarte con URL similares. </h4>
                    <button type="button"className="supnew"  onClick={() => setCount(count + 1)}> MOSTRARME</button> 
                    {console.log(a+2)}
                  </div>
                  
                ) }
           
           {myOption === "legitimo" &&(
                
                <div id="mostrar3">
                <h1 className="rojo">En realidad, este es un correo electrónico de suplantación de identidad (phishing)</h1>
                <br>
                </br>
                <h4>El dominio de correo electrónico del remitente está mal escrito, ya que dice "efacks". Además, el vínculo en realidad dirige a "mailru382.co".
                    Por lo general, los mensajes de suplantación de identidad (phishing) intentan engañarte con URL similares.
                </h4>
                <button type="button"className="supnew"   onClick={() => setCount(count + 1)}> MOSTRARME</button> 
                {console.log(b+1)}
                </div>
              
                )}
            </div>  
           </div>
        </div>
      </div>
      
    
                
    </div>

      <div className="cuerpo">


        <p className="pos3">N</p>
        <p className="pos2"> Mensaje de fax NoReply [administrador]{'<'}noreply@efacks.com{'>'}</p>

        <p className="pos1"> Para mi</p>
        <div className="contenedor_modal">
            <Modal1/>
            {count ? (
          <ModalCuerpo1/>

          ) : (
            <div style={{ color: 'blue' }}></div>
        )}
            
        </div>
        
       

      </div>
      <div className = "cuerpoprincipal12"> 
      
                    <div className="cuerpocorreo12">  
                            <br>
                            </br>
                            {count2 ? (
                              <ModalCuerpo11
                              />
                              
                              ) : (
                                <div style={{ color: 'blue' }}></div>
                            )}
                                                
                            <p> Recibiste un fax de 1 página a las(s)  {d}</p>
                           
                            <a  href="http://efax.hosting.com.mailru382.co/efaxdelivery/2017Dk4h325RE3">Haz clic aquí para ver este fax en línea</a> 
                           
                            
                            <br>
                            </br>
                          
              </div> 
              <img  className="efax" src={efax}/>
              <h5 className="tefax">Gracias por usar el servicio de eFax. Si tienes alguna pregunta o si crees que recibiste este fax por error, visita www.eFax.con/en/efax/page/help. </h5> 
         
              <h4 className="tefax">eFax Inc(c) 2022</h4>
            </div> 
               
           
         



    </Fragment>


  );
}

export default Formulario;
