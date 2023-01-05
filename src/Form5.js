
import './assets/css/Forms.css';
import React from 'react-router-dom';
import ModalCuerpo5 from './components/ModalCuerpo5';
import { Fragment, useState, useEffect } from 'react';
import Modal5 from './components/Modal5';



const Formulario = (props) => {
  var today = new Date();
	var d = JSON.stringify(today.toLocaleString());
  const nombre = JSON.parse(localStorage.getItem('nombre'));
  const options = ["phishing", "legitimo",];
  const [myOption, setMyOption] = useState("");
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const a = 0;
  const b = 0;
  useEffect(() => {
    // Update the document title using the browser API

  });

  return (

    <>


      <div className="encabezado1">
        <p className="encabezado2"> Prueba: 6/8</p>
        <div className="encabezado">

          <div id="mostrar1">
            <div className="form">
              {show ? (
                <div>
                  <h1 class="centrar">Alguien ha estado intentando acceder a tu cuenta</h1>

                  <h5>**********************************************************************************************************************************************************************</h5>


                  <p>Presta mucha atención antes de cambiar tu contraseña.</p>



                  {options.map(option => (
                    <button type="button" key={option} onClick={() => { setMyOption(option); setShow(false) }} className="supr">{option.toLocaleUpperCase()}</button>
                  ))}
                </div>
              ) : (
                <div style={{ color: 'blue' }}></div>
              )}

              <div>

                {myOption === "phishing" && (


                  <div id="mostrar2" >
                    <h1 className="verde">¡Correcto! Este es un correo electrónico de suplantación de identidad (phishing)</h1>
                    <h4>Este caso es casi idéntico a un ataque que se utilizó para hackear con éxito los correos electrónicos de ciertos
                       políticos. Asegúrate de verificar siempre las URL con atención.</h4>
                    <button type="button" className="supnew" onClick={() => setCount(count + 1)}> MOSTRARME</button>

                  </div>

                )}

                {myOption === "legitimo" && (

                  <div id="mostrar3">
                    <h1 className="rojo">En realidad, este es un correo electrónico de suplantación de identidad (phishing)</h1>
                    <br>
                    </br>
                    <h4>Este mensaje de suplantación de identidad (phishing) utilizó una URL falsa para simular que provenía de Gmail. De hecho, este caso es casi idéntico a un ataque que se utilizó para hackear
                       con éxito los correos electrónicos de ciertos políticos. Asegúrate de verificar siempre las URL con atención.</h4>
                    <button type="button" className="supnew" onClick={() => setCount(count + 1)}> MOSTRARME</button>
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

          <Modal5 />
          {count ? (
            <ModalCuerpo5 />
          ) : (
            <div style={{ color: 'blue' }}></div>
          )}

        </div>



      </div>
      <div className="cuerpoprincipal11">
        
          <p className="mensaje">Alguien tiene tu contraseña</p>
          <p className="parrafocorreo">Hola: </p>
          <p className="parrafocorreo">Alguien acaba de usar tu contraseña para intenetar acceder a tu cuenta de Google</p>
          <br></br>
          <p className="infor">Información:</p>
         
          <p className="infor">{d}</p>
          <p className="infor"> Slatina, Rumania</p>
          <p className="infor">Navegador Firefox</p>
          <p className="parrafocorreo">Google detuvo este intento de acceso. Debes cambiar tu contraseña de inmediato</p>

          <button className= "supdropbox" > <a href="http://myaccount.google.com-securitysettingpage.ml-security.org/signonoptions/">CAMBIAR LA CONTRASEÑA</a>  </button>
          <p className="parrafocorreo"> Saludos Cordiales</p>
          <p className="parrafocorreo">El equipo de Correo electrónico</p>



      

      </div>
    </ >
  );
}

export default Formulario;
