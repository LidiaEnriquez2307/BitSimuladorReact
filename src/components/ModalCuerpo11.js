import React,{useState} from 'react';
import styled from 'styled-components';
import VentanaModal from './VentanaModal';
import icono from './down.png'
import { useNavigate } from 'react-router-dom';


const ModalCuerpo= (props) => {

	
let navigate = useNavigate();
const NewForm = () =>{ 
  let path = '/ModalCuerpo1'; 
  navigate(path);
}

  const[estadoModal1, cambiarEstadoModal1]= useState(false);
  return (
    <div>
      <overlay>
	  <ContenedorBotones>
          
          <Contenido>
            <h1 >
            En realidad, el vínculo es "mailru382.co", 
            el cual aparece al final del nombre del dominio.
             No es en absoluto el vínculo que esperarías. 	 
            </h1><Boton onClick={()=>NewForm()}>  SIGUIENTE </Boton>
          </Contenido>

        
        </ContenedorBotones>
      </overlay>
    </div>
  );
}

export default ModalCuerpo;

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
    margin-top: -10px;
    margin-left: 60px;
    outline: none;
    transition: all 300ms;
    background: #46A2FD;
    color: white;
    border-radius: 10px;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
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
	margin-top:22px;
	align-items: center;
	
	h1 {
		font-size: 12px;
		font-weight: 700;
		background-color:darkgray ;
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