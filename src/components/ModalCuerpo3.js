import React,{useState} from 'react';
import styled from 'styled-components';
import VentanaModal from './VentanaModal';
import icono from './down.png'
import { useNavigate } from 'react-router-dom';


const Modal = (props) => {

	
let navigate = useNavigate();
const NewForm = () =>{ 
  let path = '/Form4'; 
  navigate(path);
}

  const[estadoModal1, cambiarEstadoModal1]= useState(false);
  return (
    <div>
      <overlay>
	  <ContenedorModal >
          
          <Contenido>
            <h1 >
			Si buscas rápidamente "dropboxmail.com", 
			verás que la URL es legítima.
				 
           <Boton onClick={()=>NewForm()}>  SIGUIENTE </Boton> </h1>
          </Contenido>
		  </ContenedorModal>
        
      </overlay>
    </div>
  );
}

export default Modal;
const ContenedorModal = styled.div`
	width: 315px;
    height: 80px;
    position: static;
    margin-left:149px;
	margin-top:-25px;
    
    background: #fff;
    border-radious : 5px;
    box-shadow: rgba(100,100,11,0.2) 0px 7px 29px 0px;
    padding: 20px;
   

`;

const ContenedorBotones = styled.div`
	padding: -10px;
  	padding-left: -50px;
  	margin-left:-200px;
  	margin-top: -42px;
  	font-size: 10px;
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
	padding: 10px 40px;
    border: 2px solid white;
    background: transparent;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: white;
    margin-top: -6px;
    margin-left: 60px;
    outline: none;
    transition: all 300ms;
    background: #46A2FD;
    color: white;
    border-radius: 10px;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	font-size:10px;
	transition: .3s ease all;

    img{
        width:15px;
        height:15px
    }
	
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	height: 200px;
	font-size: 10px;
	margin-top:-10px;
	align-items: center;
	
	h1 {
		font-size: 10px;
		font-weight: 700;
		
		text-justify: auto;
		margin-bottom: 10px;
	}
	p {
		font-size: 12px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;