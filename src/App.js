import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Routes>
        <Route path="/" element={"hello"} />
      </Routes>
      <Footer/> */}
    </div>
  );
}

export default App;
