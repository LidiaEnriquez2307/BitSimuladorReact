import React from 'react-router-dom';
import { Fragment } from 'react';



function Legitmo() {



    return (
        <Fragment>


            <div className="encabezado1">
                <p className="encabezado2"> Prueba: 1/8</p>
                <div className="encabezado">

                    <div id="mostrar2" >
                        <h1 class="verde">¡Correcto! Este es un correo electrónico de suplantación de identidad (phishing)</h1>
                        <br>
                        </br>
                        <h4>¡Excelente! Como pudiste observar, el dominio de correo electrónico del remitente está mal escrito, ya que dice "efacks".
                            Además, el vínculo en realidad dirige a "mailru382.co". Por lo general, los mensajes de suplantación de identidad (phishing)
                            intentan engañarte con URL similares. </h4>
                        <button class="sup" id="btn2" onclick="mostrarp();" > MOSTRARME</button>

                    </div>
                    <div id="mostrar3">
                        <h1 class="rojo">En realidad, este es un correo electrónico de suplantación de identidad (phishing)</h1>
                        <br>
                        </br>
                        <h4>El dominio de correo electrónico del remitente está mal escrito, ya que dice "efacks". Además, el vínculo en realidad dirige a "mailru382.co".
                            Por lo general, los mensajes de suplantación de identidad (phishing) intentan engañarte con URL similares.
                        </h4>
                        <button class="sup" id="btn2" onclick="mostrarp1();" > MOSTRARME</button>

                    </div>
                </div>
            </div>






        </Fragment>


    );
}

export default Legitmo;
