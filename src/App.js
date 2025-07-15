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


function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>



    </div>
    </Router>
  );
}

export default App;
