import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';
import cover from '../../frontend/src/images/cover.png';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
