import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Components/Pages/Home'
import Events from './Components/Pages/Events'
import Footer from './Components/Footer'
import Team from './Components/Pages/Team'
import Navbar from './Components/Navbar'
import PradyotSummary from './Components/PradyotSummary'
import WebTeam from './Components/Pages/WebTeam'
import About from './Components/Pages/About'
import Summary from './Components/Summary'
import CDevent from './Components/Pages/CD/CDevent'
import TrinitySummary from './Components/TrinitySummary'
import GanapatiSummary from './Components/GanapatiSummary'
import LogicaSummary from './Components/LogicaSummary'
import UiSummary from './Components/UiSummary'
import TechExplore from './Components/TechExplore'

function App() {

 
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/webteam" element={<WebTeam />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/summary" element={<Summary />}></Route>
          <Route path="/poetry" element={<Summary />}></Route>
          <Route path="/ganapatisummary" element={< GanapatiSummary/>}></Route>
          <Route path="/pradyotsummary" element={< PradyotSummary/>}></Route>
          <Route path="/childrensday" element={<CDevent />}></Route>
          <Route path="/trinitysummary" element={<TrinitySummary />}></Route>
          <Route path="/logicasummary" element={<LogicaSummary />}></Route>
          <Route path="/uipath" element={<UiSummary />}></Route>
          <Route path="/techexplore" element={<TechExplore />}></Route>




          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
