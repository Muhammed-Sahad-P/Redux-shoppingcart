import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../Redux/cartSlice";

const Cart = () => {
  const productsCart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleRemoveCart = (id) => {
    dispatch(removeCart(id));
    console.log(handleRemoveCart);
  };

  return (
    <div>
      <h1>Cart</h1>
      <div className="products">
        {productsCart.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <button
                className="add-to-cart-button"
                onClick={() => handleRemoveCart(product.id)}
              >
                Remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
