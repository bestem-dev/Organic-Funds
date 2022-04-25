import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/index';
import Contenido from './Pages/contenido';
import Voting from './Pages/Voting';


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
