// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import './App.css';

function Navbar() {
  const location = useLocation();

  if (location.pathname === '/portfolio') {
    return null;
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
    </nav>
  )

}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>
    </Router>
  )
}

export default App;
