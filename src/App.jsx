import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/quiz" element = {<Quiz />} />
        <Route path = "/result/userId" element = {<Result />} />
      </Routes>
    </Router>
  )
}

export default App
