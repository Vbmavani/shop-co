import React from 'react';
import { Headline } from '../../components/Headline';
import { Header } from '../../components/Header';
import HeroImage from '../../assets/images/hero-image.png';
import VersaceLogo from '../../assets/svg/company-logos/versace.svg';
import ZaraLogo from '../../assets/svg/company-logos/zara.svg';
import GucciLogo from '../../assets/svg/company-logos/gucci.svg';
import PradaLogo from '../../assets/svg/company-logos/prada.svg';
import RatingStar from '../../assets/svg/rating-start.svg';
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
          <button className="secondary-btn font-16">View All</button>
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
          <button className="secondary-btn font-16">View All</button>
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
      <section className="home-section our-happy-customer-section ">
        <div className="happy-customer-header container">
          <h1 className="home-section-title">Our Happy Customer</h1>
          <span className="left-right-icons">
            <i className="fas fa-arrow-left"></i>
            <i className="fas fa-arrow-right"></i>
          </span>
        </div>
        <div className="happy-customer-slider">
          {[
            {
              name: 'Sarah M.',
              description: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.”`,
              rating: 5,
            },
            {
              name: 'Sarah M.',
              description: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.”`,
              rating: 5,
            },
            {
              name: 'Sarah M.',
              description: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.”`,
              rating: 5,
            },
            {
              name: 'Sarah M.',
              description: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.”`,
              rating: 5,
            },
            // {
            //   name: 'Sarah M.',
            //   description: `"I'm blown away by the quality and style of the clothes I received from Shop.co.I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.”`,
            //   rating: 5,
            // },
          ].map((customer) => {
            return (
              <div className="customer-card" key={customer.name}>
                <div className="customer-feedback-rating-icons">
                  <div className="product-rating-stars">
                    {[...Array(customer.rating)].map((_, index) => (
                      <img src={RatingStar} alt="rating-image" key={index} />
                    ))}
                  </div>
                  <div className="customer-name font-20">
                    <h4>{customer.name}</h4>
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </div>
                  <p className="feedback-description font-16">
                    {customer.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="section subscribe-section container">
        <div className="subscribe-content">
          <h3 className="font-40"> Stay Upto Date about our latest offers</h3>
          <div className="subscribe-input">
            <input type="text" placeholder="Enter your email address" />
            <button className="secondary-btn subscribe-btn">Subscribe</button>
          </div>
        </div>
      </section>
      <footer className="footer-main-section">
        <div className="container footer-wrapper">
          <div className="footer-left-section ">
            <div className="footer-logo">
              <h1>Shop.co</h1>
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>Products</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="footer-social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
          <div className="company-section">
            <h4 className='footer-section-title'>Company</h4>
            <ul className=''>
              <li>
                <a href="#">Home</a>
              </li>
              <li>Products</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
