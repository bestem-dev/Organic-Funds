import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/index';
import Contenido from './pages/contenido';
import Voting from './pages/Voting';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/contenido' element={<Contenido />} /> 
        {/* <Route path='/metamask' element={<Metamask />} /> */}
        <Route path='/Voting' element={<Voting />} />
      </Routes>
    </Router>
  );
}

export default App;
