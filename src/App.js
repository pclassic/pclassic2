import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Organizers from './components/Organizers';
import Problems from './components/Problems';
import History from './components/History';
import About from './components/About';
import Mailing from './components/Mailing';
import Shirts from './components/Shirts';
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
          <Route path="/mailing" element={<Mailing/>} />
          <Route path="/shirts" element={<Shirts/>} />
          <Route path="/history" element={<History/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
