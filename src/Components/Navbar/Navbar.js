import { Link } from "react-router-dom";
import { LiaShoppingBagSolid } from "react-icons/lia";
import "./Navbar.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Shopping Cart
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/product" className="navbar-link">
              Products
            </Link>
          </li>

          <div className="navbar-item navbarcart">
            <Link to="/cart">
              <LiaShoppingBagSolid size={25} className="navbar-link" />
            </Link>
            <div className="length">{cartProducts.length}</div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
