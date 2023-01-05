import React from "react";
import styled from 'styled-components';
const ventanaModal = ({children, estado, cambiarEstado}) =>{
    return (
        <>
        {estado &&
       
            <Overlay>
                <ContenedorModal >
                   {children}
                </ContenedorModal>
               
            </Overlay>
       }
        </>
    )
}
export default ventanaModal;

const Overlay = styled.div`
	
    position: fixed;
    display: fex;
    align-items: center;
    justify-content: center;
    padding: -100px;
    
    

`;

const ContenedorModal = styled.div`
	width: 450px;
    height: 110px;
    position: static;
    margin-left:120px;
    
    background: #fff;
    border-radious : 5px;
    box-shadow: rgba(100,100,11,0.2) 0px 7px 29px 0px;
    padding: 20px;
   

`;
