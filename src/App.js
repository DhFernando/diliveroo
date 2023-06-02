import './App.css';
import Login from './pages/login';
import MenuePage from './pages/menue_page'; 
import { Routes, Route } from 'react-router-dom'
 
function App() {
  return ( 
      <div className="App">
        <Routes>
          <Route path='/' element={<MenuePage />} />
          <Route path='/login' element={<Login />} /> 
        </Routes>
      </div> 
  );
}

export default App;
