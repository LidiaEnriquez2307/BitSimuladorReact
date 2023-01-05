import React, { useState } from 'react';
import styled from 'styled-components';
import VentanaModal from './VentanaModal';
import CrearUsuario  from './CrearUsuario';
import icono1 from './down.png';
import '../assets/css/Forms.css'


const Modal = (props) => {
	var today = new Date();
	var d = JSON.stringify(today.toLocaleString());
	const nombre = JSON.parse(localStorage.getItem('nombre'));
	const correo = JSON.parse(localStorage.getItem('correo'));
	
	const [estadoModal1, cambiarEstadoModal1, ] = useState(false);
	return (
		<div>
			<overlay tabIndex={-1}>
				<ContenedorBotones>
					<Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}> <img src={icono1} /> </Boton>
				</ContenedorBotones>
				<VentanaModal estado={estadoModal1}
					cambiarEstado={cambiarEstadoModal1} onClick={()=>(estadoModal1)} >
					<Contenido >
						<div >
							<p className="espacio"><b>De:</b> Luke Johson {'<'}Jackson luke.json800@gmail.com{'>'}</p>
							<p className="espacio"><b>Para:</b> {nombre + ' < '+ correo+'>'}</p>
							<p className="espacio"><b>Fecha:</b> {d} </p>
							<p className="espacio"><b>Asunto:</b> Presupuesto departamental de 2023</p>
						</div>
					</Contenido>
				</VentanaModal>
			</overlay>
		</div>
	);
}

export default Modal;

const ContenedorBotones = styled.div`
	padding: -10px;
  padding-left: -50px;
  margin-left:-680px;
  margin-top: -42px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 5px 5px;
	border-radius: 100px;
	color: #000000;
	border: none;
	
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
  img{
    width:18px;
    height:18px
}
	
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	
	h1 {
		font-size: 22px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 16px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;