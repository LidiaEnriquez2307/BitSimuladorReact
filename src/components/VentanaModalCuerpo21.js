import React from "react";
import styled from 'styled-components';
const ventanaModal = ({children, estado, cambiarEstado}) =>{
    return (
        <>
        {estado &&
       
            <Overlay>
               
                <ContenedorModal1>
                    {children}
                </ContenedorModal1>
            </Overlay>
       }
        </>
    )
}
export default VentanaModalCuerpo21;

const Overlay = styled.div`
	
    position: fixed;
    display: fex;
    align-items: center;
    justify-content: center;
    padding: -100px;
    

`;

const ContenedorModal = styled.div`
	width: 450px;
    height: 150px;
    margin-left:120px;
    position: relative;
    background: #fff;
    border-radious : 5px;
    box-shadow: rgba(100,100,11,0.2) 0px 7px 29px 0px;
    padding: 20px;
  

`;
const ContenedorModal1 = styled.div`
	width: 450px;
    height: 150px;
    margin-left:120px;
    position: relative;
    background: #fff;
    border-radious : 5px;
    box-shadow: rgba(100,100,11,0.2) 0px 7px 29px 0px;
    padding: 20px;
  

`;