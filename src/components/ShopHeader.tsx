import "./ShopHeader.css";
import { useNavigate } from "react-router";

function ShopHeader() {

  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header-container">


        <div className="header-logo">
          <img src="/images/cart-icon.png" alt="logo" onClick={() => navigate(`/`)} />
          <span>Mercado Free</span>

        </div>

      </div>
    </header>
  );
}

export default ShopHeader;