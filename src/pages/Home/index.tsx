import React from 'react';
import { Headline } from '../../components/Headline';
import { Header } from '../../components/Header';
import HeroImage from '../../assets/images/hero-image.png';

type HomeProps = {
  title?: string;
};
const HomePage: React.FC<HomeProps> = (props) => {
  console.log('props', props);
  return (
    <div>
      <Headline />
      <Header />
      <section className="hero-section-wrapper">
        <div className="hero-section">
          <div className="left-hero-section">
            <div className="left-hero-content">
              <h1 className="font-64 hero-section-title">
                find clothes that matches your style
              </h1>
              <p className="font-16 hero-section-description">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="primary-btn shop-now"> Shop Now</button>
              <div className="hero-stats-container">
                <div className="stat-item">
                  <h4>200+</h4>
                  <p>International Brands</p>
                </div>
                <div className="stat-item">
                  <h4>2,000+</h4>
                  <p>High-Quality Products</p>
                </div>
                <div className="stat-item">
                  <h4>30,000+</h4>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="right-hero-section">
            <img src={HeroImage} alt="hero-img" className="hero-img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
