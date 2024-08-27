import React, { useState, useRef, useEffect } from "react";
import logoupworkedited from "../assets/logoupworkedited.png";
import cart from "../assets/cart.png";
import hamburger from "../assets/hamburger.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isDropdownOpen) {
      dropdownRef.current.classList.add("open");
    } else {
      dropdownRef.current.classList.remove("open");
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".hamburger")
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <ul className="logo">
        <li>
          <Link to="/">
            <img src={logoupworkedited} alt="logo" />
          </Link>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <img src={cart} alt="cart" />
        </li>
        <li className="hamburger">
          <img src={hamburger} alt="hamburger" onClick={toggleDropdown} />
          <div
            ref={dropdownRef}
            className={`dropdown ${isDropdownOpen ? "open" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsDropdownOpen(false);
            }}
          >
            <Link to="/Welcome" className="dropdown-item">
              Welcome
            </Link>
            <Link to="/HiddenTreasures" className="dropdown-item">
              HiddenTreasures
            </Link>
            <Link to="/HolderRewards" className="dropdown-item">
              HolderRewards
            </Link>
            <Link to="/Products" className="dropdown-item">
              Products
            </Link>
            <Link to="/Contact" className="dropdown-item">
              Contact
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}
