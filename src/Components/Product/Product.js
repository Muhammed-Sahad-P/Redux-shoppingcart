import React, { useEffect, useState } from "react";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  const handleAddToCart = (product) => {
    console.log("Add to Cart:", product);
   
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
