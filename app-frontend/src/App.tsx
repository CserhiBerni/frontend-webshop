import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { Home } from './pages/Home/Home';
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';

export const App: React.FC = () => {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <NavigationBar />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
};