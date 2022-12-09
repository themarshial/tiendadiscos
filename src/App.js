import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './Components/Container';
import Home from './Components/Home';
import Form from './Components/Form';
import Nopage from './Components/Nopage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container/>}>
          <Route index element={<Home/>}></Route>
          <Route path='contact' element={<Form/>}></Route>
          <Route path='*' element={<Nopage/>}></Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
