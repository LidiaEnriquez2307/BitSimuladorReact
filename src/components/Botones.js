import React from 'react-router-dom';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';



function Botones() {
    let navigate = useNavigate();
const NewForm = () =>{ 
  let path = '/Forms'; 
  navigate(path);
}
  return (
    <Fragment>


            <button id="btn1" type="submit"  onClick={()=>NewForm()} className="supr">PHISHING</button>

            <button id="btn3" type="submit" onClick={()=>NewForm()} className="supv">LEGÍTIMO</button>

      
    </Fragment>


  );
}

export default Botones;
