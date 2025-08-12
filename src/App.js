import './App.css';
import Contact from './Components/Contact';

import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Projects from './Components/Projects';
import About from './Components/About';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
