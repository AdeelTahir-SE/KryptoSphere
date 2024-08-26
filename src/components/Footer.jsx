import fb from "../assets/fb.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer1">
          <p><a href="/about">About</a></p>
          <p><a href="/products">Products</a></p>
          <p><a href="/developers">Developers</a></p>
        </div>
        <div className="footer2">
          <p><a href="/contact">Contact</a></p>
          <p><a href="/faq">Faq</a></p>
          <p><a href="/terms">Terms of Service</a></p>
        </div>
        <div className="footer3">
          <div className="logos">
            <ul>
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={fb} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
            </ul>
            <p id="securedby">Secured by Solana</p>
            <p id="copyright">&copy; Copyright 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
