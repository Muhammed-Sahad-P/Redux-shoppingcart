
import { Link } from 'react-router-dom';
import { LiaShoppingBagSolid } from "react-icons/lia";
import './Navbar.css'; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Shopping Cart</Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/product" className="navbar-link">Products</Link>
          </li>
          <li className="navbar-item">
            <Link to="/men" className="navbar-link">Men</Link>
          </li>
          <li className="navbar-item">
            <Link to="/women" className="navbar-link">Women</Link>
          </li>
          <Link to="/cart"  className="navbar-item">
          <LiaShoppingBagSolid className="navbar-link" />
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
