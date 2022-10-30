import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Organizers from './components/Organizers';
import Problems from './components/Problems';
import FAQs from './components/FAQs';
import Photos from './components/Photos';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/organizers" element={<Organizers/>} />
          <Route path="/problems" element={<Problems/>} />
          <Route path="/faqs" element={<FAQs/>} />
          <Route path="/photos" element={<Photos/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
