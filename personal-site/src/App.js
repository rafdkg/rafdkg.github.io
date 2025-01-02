// import logo from './logo.svg';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
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
    <div>

    {/* <Router basename="/"> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>
    {/* </Router> */}
    </div>
  )
}

export default App;
