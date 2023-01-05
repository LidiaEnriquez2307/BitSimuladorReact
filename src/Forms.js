
import './assets/css/Forms.css';
import React from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import ObtenerFormulario from './components/ObtenerFormulario';
import Modal from './components/Modal';
import ModalCuerpo from './components/Modalcuerpo';
import image from "./assets/images/word.png"
import person from "./assets/images/person.png"
import Botones from './components/Botones';


const Formulario = () => {

  const nombre = JSON.parse(localStorage.getItem('nombre'));
  const options = ["phishing", "legítimo",];
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
        <p className="encabezado2"> Prueba: 1/8</p>
        <div className="encabezado">

          <div id="mostrar1">
            <div className="form">
              {show ? (
                <div>
                  <p className="titulo"> COMENCEMOS CON ESTE CORREO ELECTRÓNICO QUE CONTIENE UN DOCUMENTO DE GOOGLE</p>

                  <h5>***********************************************************************************************************************************</h5>

                  <p><b>INDICACIONES:</b> </p>
                  <br></br>


                  <p> Asegúrate de explorar las direcciones de correo electrónico.</p>

                  <p> Consultar las URL de los vínculos, desplazándote sobre las URL o mantenlas presionadas.</p>
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
                    <h4 className="titulo">Debes haber detectado la URL falsa. Toma precauciones con los hipervínculos y los archivos adjuntos que abres en los correos electrónicos,
                      ya que pueden dirigirte a sitios web fraudulentos en los que se te solicita que ingreses información confidencial. </h4>
                    <button type="button" className="supnew" onClick={() => setCount(count + 1)}> MOSTRARME</button>

                    {console.log(a + 1)}

                  </div>

                )}

                {myOption === "legitimo" && (

                  <div id="mostrar3">
                    <h1 className="rojo">En realidad, este es un correo electrónico de suplantación de identidad (phishing)</h1>
                    <br>
                    </br>
                    <h4>El dominio de correo electrónico del remitente está mal escrito, ya que dice "efacks". Además, el vínculo en realidad dirige a "mailru382.co".
                      Por lo general, los mensajes de suplantación de identidad (phishing) intentan engañarte con URL similares.
                    </h4>
                    <button type="button" className="supnew" onClick={() => setCount(count + 1)}> MOSTRARME</button>
                    {console.log(b + 1)}
                  </div>

                )}
              </div>
            </div>
          </div>
        </div>



      </div>


      <div className="cuerpo">
        <p className="pos3">L</p>
        <p className="pos2"> Luke Luke Johnson luke.json800@gmail.com</p>
        <p className="pos1"> Para mi</p>
        <div className="contenedor_modal">
          <Modal />
        </div>
      </div>
      <div className="cuerpoprincipal11">
        <div className="cuerpocorreo11">
          <p> Luke Johson compartió un vínculo al siguiente documento:</p>
          <br></br>
          <img  src={image} />
          <a href="https://drive--google.com/luke.johnson">2023 Departament Budget.docx</a>
          {count ? (
            <ModalCuerpo />
          ) : (
            <div style={{ color: 'blue' }}></div>
          )}
          <h5 className="colorlinea">_______________________________________________________</h5>
          <img className="fword1" src={person} />
          <p className="fword">Hola. Aqui tienes el documento que solicitaste. Avisame si necesitas algo mas</p>
          <a href="http://drive--google.com/luke.johnson" className="supw">Abrir en Documentos</a>


        </div>

      </div>
    </ >
  );
}

export default Formulario;
