import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Login from './components/LogIn/Login';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
