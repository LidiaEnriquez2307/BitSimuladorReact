import React from "react";
import Login from "./Login";
import Forms from "./Forms";
import Form1 from "./Form1";
import ModalCerpo1 from "./components/ModalCuerpo1"
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
import Form6 from "./Form6";
import Form7 from "./Form7";
import App from "./App";
import Final from "./Final";


import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Final' element={<Final/>}></Route>
                <Route path='/Form7' element={<Form7 />}></Route>
                <Route path='/Form6' element={<Form6 />}></Route>
                <Route path='/Form5' element={<Form5 />}></Route>
                <Route path='/Form4' element={<Form4 />}></Route>
                <Route path='/Form3' element={<Form3 />}></Route>
                <Route path='/Form2' element={<Form2 />}></Route>
                <Route path='./components/ModalCuerpo1' element={<ModalCerpo1/>}></Route>
                <Route path='/Form1' element={<Form1 />}></Route>
                <Route path='/Forms' element={<Forms />}></Route>
                <Route path='/Login' element={<Login />}></Route>
                <Route path='/' element={<App />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Home