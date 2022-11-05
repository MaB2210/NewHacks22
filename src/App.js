import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Event from './components/Events/Event';
import Footer from './components/Footer/Footer';
import Login from './components/LogIn/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/events" element={<Event/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
