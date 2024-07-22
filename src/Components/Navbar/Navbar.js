
import { Link } from 'react-router-dom';
import { LiaShoppingBagSolid } from "react-icons/lia";
import './Navbar.css'; 
import { useSelector } from 'react-redux';
const Navbar = () => {
const cartProducts = useSelector((state) => state.cart);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Shopping Cart</Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/product" className="navbar-link">Products</Link>
          </li>
          <Link to="/cart"  className="navbar-item">
          <LiaShoppingBagSolid className="navbar-link" />
          {cartProducts.length}
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
