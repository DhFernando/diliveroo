import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Login from './pages/login';
import MenuePage from './pages/menue_page'; 
import { Routes, Route } from 'react-router-dom'
 
function App() {
  return ( 
      <div className="App">
        {/*         
        <Router>
        <Fragment>
          <Header />
            <Routes>
            <Route exact path='/' element={<ProtectedRoutes/>}>
              <Route exact path='/' element={<MenuePage/>}/>
            </Route> 
              <Route path='/login' element={<Login />} /> 
            </Routes> 
          <Footer />
        </Fragment>
      </Router> */}
      <Header />
        <Routes>
          <Route path='/' element={<MenuePage />} />
          <Route path='/login' element={<Login />} /> 
        </Routes>
        <Footer />
      </div> 
  );
}

export default App;
