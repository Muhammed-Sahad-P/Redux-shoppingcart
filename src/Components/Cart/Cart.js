import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { decquantity, incquantity, removeCart } from "../../Redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const productsCart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRemoveCart = (id) => {
    dispatch(removeCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incquantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decquantity(id));
  };

  const handleAddProduct = (product) => {
    navigate("/product")
  };

  return (
    <div>
      <h1>Cart</h1>
      {productsCart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button className="add-product-button" onClick={handleAddProduct}>
            Add Products
          </button>
        </div>
      ) : (
        <div className="products">
          {productsCart.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">
                  ${(product.price * product.quantity).toFixed(2)}
                </p>
                <div className="quantity-controls">
                  <button onClick={() => handleIncrement(product.id)}>+</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => handleDecrement(product.id)}>-</button>
                </div>
                <div
                  className="quantity-controls"
                  onClick={() => handleRemoveCart(product.id)}
                >
                  <MdDelete />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
