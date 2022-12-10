import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './Components/shared/Container';
import Home from './Components/pages/Home';
import Formu from './Components/shared/Formu';
import Nopage from './Components/pages/Nopage';
import Address from './Components/pages/Address';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container/>}>
          <Route index element={<Home/>}></Route>
          <Route path='contacto' element={<Formu/>}></Route>
          <Route path='direccion' element={<Address/>}></Route>
          <Route path='*' element={<Nopage/>}></Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
