import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Login from './components/LogIn/Login';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
