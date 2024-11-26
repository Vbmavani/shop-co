import SearchIcon from '../../assets/svg/seach-icon.svg';
import CartIcon from '../../assets/svg/cart-icon.svg';
import ProfileIcon from '../../assets/svg/profile-icon.svg';
import HamburgerIcon from '../../assets/svg/hamburger-icon.svg';

export const Header = () => {
  return (
    <header className="container">
      <div className="hamburger-menu">
        <img src={HamburgerIcon} className="hamburger-icon" />
      </div>
      <div className="logo">SHOP.CO</div>
      <nav>
        <ul>
          <li>Shop </li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
      </nav>
      <div className="search-bar">
        <div>
          <img
            src={SearchIcon}
            alt="search-bar-icon"
            className="header-search-icon"
          />
          <input type="text" placeholder="Search for products..." />
        </div>
      </div>
      <div className="header-icons">
        <img src={SearchIcon} className="search-icon" />
        <img src={CartIcon} />
        <img src={ProfileIcon} />
      </div>
    </header>
  );
};
