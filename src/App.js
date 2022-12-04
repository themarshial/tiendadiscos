import logo from './logo.svg';
import './App.css';

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
