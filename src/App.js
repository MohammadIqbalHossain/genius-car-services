
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Services from './Pages/Home/Services/Services';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import ServiceDetails from './Pages/Home/ServiceDetail/ServiceDetails';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails />}></Route>
        <Route path='/about' element={<About />}></Route> 
        <Route path='/register' element={<Register />}></Route> 
        <Route path='*' element={<NotFound />}></Route> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
