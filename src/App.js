import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyCoupons from './pages/MyCoupons';
import Profile from './pages/Profile';
import BottomNav from './components/BottomNav';

function App() {
  return (
     <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-coupons" element={<MyCoupons />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <BottomNav/>
      </div>
    </Router>
  );
}

export default App;
