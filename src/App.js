import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './Components/Pages/Home';
import Events from './Components/Pages/Events';
import Footer from './Components/Footer';
import Team from './Components/Pages/Team';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/events' element={<Events />}></Route>
        <Route path='/team' element={<Team />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
