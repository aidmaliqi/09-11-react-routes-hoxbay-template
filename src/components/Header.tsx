import { getRandomColor } from "../helpers";
import { Link } from "react-router-dom";

function Header() {
  const randomColor = getRandomColor();
  return (
    <header
      className="header"
      style={{
        // @ts-ignore
        ["--random-colour"]: `var(--${randomColor})`,
      }}
    >
      <div className="header__logo" style={{ color: randomColor }}>
        Hoxbay
      </div>
      <nav className="header__nav">
        <ul>
          <Link to={`/products`}>
            <li>Home</li>
          </Link>
          <Link to={`/categories`}>
            <li>Categories</li>
          </Link>
          <Link to={`/basket`}>
            <li>Basket</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
