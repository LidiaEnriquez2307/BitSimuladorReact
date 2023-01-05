
import './assets/css/Forms.css';
import React from 'react-router-dom';
import ModalCuerpo7 from './components/ModalCuerpo7';
import image from "./assets/images/google.png";
import gmail from "./assets/images/gmail.png"
import { Fragment, useState, useEffect } from 'react';


const Formulario = (props) => {

  const nombre = JSON.parse(localStorage.getItem('nombre'));
  const correo = JSON.parse(localStorage.getItem('correo'));
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
        <p className="encabezado2"> Prueba: 8/8</p>
        <div className="encabezado">

          <div id="mostrar1">
            <div className="form">
              {show ? (
                <div>
                  <h1 class="centrar">Tu cuenta parece estar bajo ataque nuevamente</h1>



                  <p>¿O no?</p>


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
                    <h1 className="rojo">Este mensaje realmente es legítimo.</h1>
                    <h4>Es importante que tomes precauciones con respecto a estos tipos de solicitudes de acceso a la cuenta y que te asegures de que el desarrollador sea confiable. 
                      Verifica el dominio que se muestra y asegúrate de hacer clic en él para obtener más detalles.</h4>
                    <button type="button" className="supnew" onClick={() => setCount(count + 1)}> MOSTRARME</button>

                  </div>

                )}

                {myOption === "legitimo" && (

                  <div id="mostrar3">
                    <h1 className="verde">¡Correcto! Es legítimo.</h1>
                    <br>
                    </br>
                    <h4>Es importante que tomes precauciones con respecto a estos tipos de solicitudes de acceso a la cuenta y que te asegures de que el desarrollador sea confiable. 
                      Verifica el dominio que se muestra y asegúrate de hacer clic en él para obtener más detalles.
                    </h4>
                    <button type="button" className="supnew" onClick={() => setCount(count + 1)}> MOSTRARME</button>
                  </div>

                )}
              </div>
            </div>
          </div>
        </div>



      </div>


      <div className="cuerpo1">

      </div>
      <div className="cuerpoprincipalultimo">
        <img className="google_image" src={image} />

        <p className="parrafocorreo1">Hola, {nombre}</p>
        <p className="parrafocorreo">{correo}</p>
        <p className="parrafocorreo">  <a href="https://google.com/amp/tinyurl.com/y7u8ewlr">Trippit quiere</a> </p>

        {count ? (
          <ModalCuerpo7 />
        ) : (
          <div style={{ color: 'blue' }}></div>
        )}

        <img className="gmail_image" src={gmail} />
        <p className="parrafocorreo7"> Consulta tus mensajes de correo electrónico y tu configuración</p>
        <br></br>
        <p className="parrafocorreo"> Deseas permitir que Tripit realice estas acciones? </p>
        <p className="parrafocorreo">Puedes revisar las  <a href="https://google.com/amp/tinyurl.com/y7u8ewlr">Condiciones del Servicio</a> y las <a href="https://google.com/amp/tinyurl.com/y7u8ewlr">Politicas de Privacidad</a> de está app.
          Además, puedes quitar esta o cualquier otra app que esté a tu cuenta desde <a href="https://google.com/amp/tinyurl.com/y7u8ewlr">Mi cuenta </a></p>
        < a className="boton_permitir" href="https://google.com/amp/tinyurl.com/y7u8ewlr">PERMITIR</a>
        <button className="boton_cancelar">CANCELAR</button>
      </div>
    </ >
  );
}

export default Formulario;
