import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './Components/Pages/Home';
import Events from './Components/Pages/Events';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/events' element={<Events />}></Route>
      </Routes>
      
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
