import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../paginas/Home';
import SobreMim from '../paginas/Sobre mim';
import Cv from '../paginas/Cv';

export default function Rotas(){
 return(
    <BrowserRouter>
    <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/sobreMim' element={<SobreMim/>}/>
        <Route  path='/cv' element={<Cv/>}/>
    </Routes>
    </BrowserRouter>
);
 }
