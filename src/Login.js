import './assets/css/Login.css';
import React, { Component, Fragment, useEffect, useState } from 'react';
import ObtenerEmpresas from './components/ObtenerEmpresas';
import CrearUsuario from './components/CrearUsuario';
import phishing from '../src/assets/css/phishing.webp';

function Login() {

    return (
        <Fragment>
            <div className="contenedor__todo">

                        <br>
                        </br>
                        <p className='plogin'>LOGIN</p> <img className='phishing' src={phishing}/>
                        <p className="just">Inventa un nombre y un correo electrónico
                            Crea un nombre y una dirección de correo electrónico (no es necesario que sean reales) para hacer que
                            este cuestionario sea más realista. No debes preocuparte, ya que esta información no saldrá de tu dispositivo. </p>
                        <br></br>
                        <br></br>
                       
                        <br></br>
                        <div className="contenedor_login">
                            
                            
                            <CrearUsuario/>
                        </div>

                    </div>

        </Fragment>
    );
}

export default Login;
