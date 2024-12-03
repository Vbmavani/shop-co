import React from 'react';
import { Headline } from '../../components/Headline';
import { Header } from '../../components/Header';
import HeroImage from '../../assets/images/hero-image.png';
import VersaceLogo from '../../assets/svg/company-logos/versace.svg';
import ZaraLogo from '../../assets/svg/company-logos/zara.svg';
import GucciLogo from '../../assets/svg/company-logos/gucci.svg';
import PradaLogo from '../../assets/svg/company-logos/prada.svg';
import CalvinKleinLogo from '../../assets/svg/company-logos/calvin-klein.svg';
import ProductCard from '../../components/ProductCard';

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
        <div className="hero-section container">
          <div className="left-hero-section container">
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
        <div className="company-logos-wrapper">
          <div className="company-logos container">
            <img src={VersaceLogo} />
            <img src={ZaraLogo} />
            <img src={GucciLogo} />
            <img src={PradaLogo} />
            <img src={CalvinKleinLogo} />
          </div>
        </div>
      </section>
      <section className="home-section new-arrival container">
        <h1 className="home-section-title new-arrival-title font-48">
          New Arrivals
        </h1>
        <div className="new-arrival-products">
          {[
            {
              id: 1,
              name: 'T-shirt with Tape Details',
              rating: 5,
              price: 120,
              discounted_price: 120,
              price_without_discount: 260,
              percentage_discount: 20,
            },
            {
              id: 3,
              price: 120,
              rating: 4.5,
              name: 'Skinny Fit Jeans',
              discounted_price: 120,
              price_without_discount: 260,
              percentage_discount: 20,
            },
            {
              id: 2,
              price: 120,
              name: 'Checkered shirt with linnen material. very good for new buyers to try this shirt for first timeCheckered shirt with linnen material. very good for new buyers to try this shirt for first timeCheckered shirt with linnen material. very good for new buyers to try this shirt for first time',
              discounted_price: 120,
              price_without_discount: 260,
              percentage_discount: 20,
            },
            {
              id: 4,
              price: 120,
              name: 'T-shirt with Tape Details',
              discounted_price: 120,
              price_without_discount: 260,
              percentage_discount: 20,
            },
          ].map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
        <div className="view-all-wrapper">
          <button className="secondary-button font-16">View All</button>
        </div>
      </section>
      <div className="container">
        <div className="divider"></div>
      </div>
      <section className="home-section container top-selling">
        <h1 className="home-section-title top-selling-title font-48">
          Top Selling
        </h1>
        <div className="top-selling-products">
          {[
            {
              id: 1,
              name: 'T-shirt with Tape Details',
              rating: 5,
              price: 120,
              discounted_price: 120,
              price_without_discount: 260,
              percentage_discount: 20,
            },
            {
              id: 2,
              price: 120,
              rating: 4.5,
              name: 'Skinny Fit Jeans',
              discounted_price: 120,
              price_without_discount: 260,
              percentage_discount: 20,
            },
            {
              id: 3,
              price: 120,
              name: 'Checkered shirt with linnen material. very good for new buyers to try this shirt for first timeCheckered shirt with linnen material. very good for new buyers to try this shirt for first timeCheckered shirt with linnen material. very good for new buyers to try this shirt for first time',
              discounted_price: 120,
              price_without_discount: 260,
              percentage_discount: 20,
            },
            {
              id: 4,
              price: 120,
              name: 'T-shirt with Tape Details',
              discounted_price: 120,
              price_without_discount: 260,
              percentage_discount: 20,
            },
          ].map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
        <div className="view-all-wrapper">
          <button className="secondary-button font-16">View All</button>
        </div>
      </section>
      <section className="home-section container">
        <div className="browse-by-dress-style-section ">
          <h1 className="home-section-title">Browse By Dress style </h1>
          <div className="dress-styles-list">
            <div className="casual-style">
              <h1>Casual</h1>
            </div>
            <div className="formal-style">
              <h1>Formal</h1>
            </div>

            <div className="party-style">
              <h1>Party</h1>
            </div>
            <div className="gym-style">
              <h1>Gym</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
