import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
import { addTocart } from "../../Redux/cartSlice";
import { getProducts } from "../../Redux/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if(status === 'Loading'){
    return <p>Loading...</p>
  }
  if(status === 'error'){
    return <p>Something went wrong!</p>
  }

  const handleAddToCart = (product) => {
    dispatch(addTocart(product));
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
