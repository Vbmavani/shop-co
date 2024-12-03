import React from 'react';
import ProductTShirtImage from '../../assets/images/product-t-shirt.png';
import ProductGraphicTShirtImage from '../../assets/images/product-graphic-t-shirt.png';
import ProductPent from '../../assets/images/product-pent.png';
import ProductShort from '../../assets/images/product-short.png';

import RatingStar from '../../assets/svg/rating-start.svg';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    rating?: number;
    discounted_price?: number;
    price_without_discount?: number;
    percentage_discount?: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  let image;
  switch (product.id) {
    case 2:
      image = ProductGraphicTShirtImage;
      break;
    case 3:
      image = ProductPent;
      break;
    case 4:
      image = ProductShort;
      break;
    default:
      image = ProductTShirtImage;
      break;
  }

  return (
    <div className="product-card-wrapper">
      <div className="product-card">
        <img src={image} alt="product-image" className="product-img" />

        <h2 className="font-20 product-title ">{product.name}</h2>
        <div className="product-rating">
          <div className="product-rating-stars">
            <img src={RatingStar} alt="rating-image" />
            <img src={RatingStar} alt="rating-image" />
            <img src={RatingStar} alt="rating-image" />
            <img src={RatingStar} alt="rating-image" />
            <img src={RatingStar} alt="rating-image" />
          </div>
          <p className="font-14 rating-label">{product.rating} / 5</p>
        </div>
        <div className="product-prices">
          <p className="discounted-price-label font-24">
            ${product.discounted_price}
          </p>
          {product.price_without_discount && (
            <s className="without-discount-price-label font-24">
              ${product.price_without_discount}
            </s>
          )}
          {product.percentage_discount && (
            <div className="percentage-discount">
              <p className="percentage-discount-text">
                -{product.percentage_discount} %
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
