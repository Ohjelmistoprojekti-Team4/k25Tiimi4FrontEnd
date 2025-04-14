import React from 'react';
import './Home.css'; // Remember to create this file

const Home = () => {
  return (
    <div className="homepage">
      <header className="hero">
        <div className="hero-text">
          <h1>AnimalTrend – Stylish Clothes for Pets</h1>
          <p>
            Welcome to AnimalTrend, where fashion meets furry friends!
            Here you will find high-quality, comfortable, and cute clothes for cats and dogs.
          </p>
        </div>
        <img
          src="src/assets/images/homepage.jpg"
          alt="Pet in clothes"
          className="hero-image"
        />
      </header>

      <section className="about">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔️ High-quality and durable materials</li>
          <li>✔️ Trendy designs for small and large pets</li>
          <li>✔️ Finnish customer service</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
