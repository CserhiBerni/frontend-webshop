import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';

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
            <Routes>
              <Route path="/products" element={<Products />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
};