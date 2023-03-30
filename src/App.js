import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Organizers from './components/Organizers';
import PastOrganizers from './components/PastOrganizers';
import Problems from './components/Problems';
import History from './components/History';
import About from './components/About';
import Mailing from './components/Mailing';
import Shirts from './components/Shirts';
import PastContests from './components/PastContests';
import Parsing from './components/Parsing';
import './App.css';

//import Past Problems (SPRING)
import S2012 from './components/problems/s2012';
import S2013 from './components/problems/s2013';
import S2014 from './components/problems/s2014';
import S2015 from './components/problems/s2015';
import S2016 from './components/problems/s2016';
import S2017 from './components/problems/s2017';
import S2018 from './components/problems/s2018';
import S2019 from './components/problems/s2019';
import S2022 from './components/problems/s2022';

//import Past Problems (FALL)
import F2013 from './components/problems/f2013';
import F2014 from './components/problems/f2014';
import F2015 from './components/problems/f2015';
import F2016 from './components/problems/f2016';
import F2017 from './components/problems/f2017';
import F2018 from './components/problems/f2018';
import F2019 from './components/problems/f2019';
import F2022 from './components/problems/f2022';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Routes for components */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/organizers" element={<Organizers />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/parsing" element={<Parsing />} />
          <Route path="/mailing" element={<Mailing />} />
          <Route path="/shirts" element={<Shirts />} />
          <Route path="/history" element={<History/>} />
          <Route path="/past-organizers" element={<PastOrganizers />} />
          <Route path="/past-contests" element={<PastContests />} />

          {/* ALL the routes for past problems */}
          <Route path="/2012s" element={<S2012/>} />
          <Route path="/2013s" element={<S2013/>} />
          <Route path="/2014s" element={<S2014/>} />
          <Route path="/2015s" element={<S2015/>} />
          <Route path="/2016s" element={<S2016/>} />
          <Route path="/2017s" element={<S2017/>} />
          <Route path="/2018s" element={<S2018/>} />
          <Route path="/2019s" element={<S2019/>} />
          <Route path="/2022s" element={<S2022/>} />

          {/* ALL the routes for past problems */}
          <Route path="/2013f" element={<F2013/>} />
          <Route path="/2014f" element={<F2014/>} />
          <Route path="/2015f" element={<F2015/>} />
          <Route path="/2016f" element={<F2016/>} />
          <Route path="/2017f" element={<F2017/>} />
          <Route path="/2018f" element={<F2018/>} />
          <Route path="/2019f" element={<F2019/>} />
          <Route path="/2022f" element={<F2022/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
