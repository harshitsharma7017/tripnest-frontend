import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ExplorePage from './pages/ExplorePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AppLayout from './components/AppLayout';
import BookingsPage from './pages/BookingsPage';
import CityDetailsPage from './components/CityDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes without layout */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected/user routes with layout */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/attractions/:id" element={<CityDetailsPage />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
