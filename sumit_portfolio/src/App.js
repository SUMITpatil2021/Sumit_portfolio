
import { Route, Routes } from 'react-router';
import './App.css';
import LandingPage from './components/landingPage';
import Home from './components/home';

function App() {
  return (
    <div className="App">
  <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="Home" element={<Home/>}/>
  </Routes>
    </div>
  );
}

export default App;
