
import './assets/css/Forms.css';
import React from 'react-router-dom';
import ModalCuerpo6  from './components/ModalCuerpo6';
import { Fragment, useState , useEffect} from 'react';
import Modal5 from './components/Modal5';
import dropbox from "./assets/images/alert.jpg"


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
        <p className="encabezado2"> Prueba: 7/8</p>
        <div className="encabezado">
       
          <div id="mostrar1">
          <div className="form">
          {show ? (
              <div>
                 <h1 class="centrar">Tu cuenta parece estar bajo ataque nuevamente</h1>
                    
                    
                
                        <p>¿O no?</p>
                    
                       
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
                    <h1 className="verde">Correcto. Este mensaje está basado en una advertencia real, pero incluye un vínculo a una página de acceso falsa.</h1>
                    <h4>Los hackers intentaron usar Google para ocultar el vínculo real, que pertenece a tinyurl. 
                      Se utilizó un correo electrónico similar a este para atacar a políticos y grupos de expertos. </h4>
                    <button type="button"className="supnew"  onClick={() => setCount(count + 1)}> MOSTRARME</button> 
                    
                  </div>
                  
                ) }
                
                {myOption === "legitimo" &&(
                
                  <div id="mostrar3">
                  <h1 className="rojo">Incorrecto. Este mensaje está basado en una advertencia real, pero incluye un vínculo a una página de acceso falsa.</h1>
                  <br>
                  </br>
                  <h4>Los hackers intentaron usar Google para ocultar el vínculo real, que pertenece a tinyurl. 
                    Se utilizó un correo electrónico similar a este para atacar a políticos y grupos de expertos.
                  </h4>
                  <button type="button"className="supnew"   onClick={() => setCount(count + 1)}> MOSTRARME</button> 
                  </div>
                
                  )}
              </div>  
             </div>
          </div>
        </div>
        
      
                  
      </div>


      <div className="cuerpo">


        <p className="pos3">G</p>
        <p className="pos2">Google{'<'} no-reply@google.support{'>'}</p>

        <p className="pos1"> Para mi</p>
        <div className="contenedor_modal">
        
            <Modal5/>
            {count ? (
          <ModalCuerpo6/>
          ) : (
            <div style={{ color: 'blue' }}></div>
        )}
          
        </div>
        
       

      </div>
      <div className="cuerpoprincipal11">
      <img className="alert"  src={dropbox} />
        <p className="parrafocorreo"><b>Es posible que algunos atacantes respaldados por el gobierno estén intentando robar tu contraseña</b> </p>
                                
        <p className="parrafocorreo">Es posible que esta sea una falsa alarma, pero creemos que hemos detectado que algunos atacantes respaldados por 
                                    el gobierno están intentando robar tu contraseña. Esto le sucede a menos del 0.1% de la totalidad de los usuarios 
                                    de Gmail. No podemos revelar cómo lo detectamos porque los atacantes tomarían nota de ello y cambiarían sus tácticas,
                                     pero si logran tener cierto grado de éxito, podrían acceder a tus datos y realizar otras acciones por medio de tu cuenta. 
                                     Para aumentar aún más tu seguridad, según tu configuración actual, te recomendamos lo siguiente:</p>  
                              
       <p className="parrafocorreo">  <a  href="http://myaccount.google.com-securitysettingpage.ml-security.org/signonoptions/">Cambiar contraseña</a> </p>
                                   
    

      </div>
    </ >
  );
}

export default Formulario;
