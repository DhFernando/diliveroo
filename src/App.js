import './App.css';
import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Login from './pages/login';
import MenuePage from './pages/menue_page'; 
import { Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './utils/protectedRoute';
 
function App() {
  return ( 
      <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={< ProtectedRoutes/>}>
            <Route path='/' element={<MenuePage />} /> 
          </Route> 
          <Route path='/login' element={<Login />} /> 
        </Routes>
        <Footer />
      </div> 
  );
}

export default App;
