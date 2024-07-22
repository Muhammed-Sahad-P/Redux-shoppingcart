import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Shopping Cart</h1>
          <p className="hero-subtitle">
            Discover the latest in clothing and accessories.
          </p>
          <a href="/product" className="hero-button">
            Shop Now
          </a>
        </div>
      </header>

      <section className="featured-products">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-list">
          <div className="product-card">
            <img
              src="https://img.freepik.com/free-photo/interior-clothing-store-with-stylish-merchandise-racks-fashionable-brand-design-casual-wear-modern-boutique-empty-fashion-showroom-shopping-centre-with-elegant-merchandise_482257-65537.jpg?t=st=1721637342~exp=1721640942~hmac=03ad3841bffacaaf8fd4b16826067c056f8f665424828a4389cb39af9a42b2fd&w=1380"
              alt="Product"
            />
            <h3 className="product-title">mens and womens colored clothing on store hangers</h3>
            <p className="product-price">$99.99</p>
          </div>
          <div className="product-card">
            <img
              src="https://img.freepik.com/free-photo/clothing-rack-with-floral-hawaiian-shirts-hangers-hat_23-2149366018.jpg?t=st=1721638377~exp=1721641977~hmac=aa006be759d4be10ec8d922e2a1fcdacac06a3c3db155cacdc718f54b2c5c1f7&w=996"
              alt="Product"
            />
            <h3 className="product-title">Clothing rack with floral hawaiian shirts on hangers and hat</h3>
            <p className="product-price">$99.99</p>
          </div>
          <div className="product-card">
            <img
              src="https://img.freepik.com/free-photo/woman-s-arms-wearing-golden-jewelry_23-2149640599.jpg?t=st=1721638085~exp=1721641685~hmac=f61d90f9c158de1b2c2ac25e722948f8da145cc8dd1e68c6c5464cc1b9808edf&w=996"
              alt="Product"
            />
            <h3 className="product-title">Woman's arms wearing golden jewelry</h3>
            <p className="product-price">$99.99</p>
          </div>
          <div className="product-card">
            <img
              src="https://img.freepik.com/free-photo/travel-concept-with-shirt-headphones_23-2149030601.jpg?t=st=1721638182~exp=1721641782~hmac=2d811c25fd63997b2bab918fefb9dfd569c9f270e4fdc6832d787dcd4538a832&w=996"
              alt="Product"
            />
            <h3 className="product-title">Travel concept with shirt and headphones</h3>
            <p className="product-price">$99.99</p>
          </div>
          <div className="product-card">
            <img
              src="https://img.freepik.com/premium-photo/women-s-accessories-elegant-sandals-with-low-heels-cross-body-bag-sunglasses_624178-2650.jpg?w=900"
              alt="Product"
            />
            <h3 className="product-title">Women's accessories elegant sandals with low heels cross body bag and sunglasses</h3>
            <p className="product-price">$99.99</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
