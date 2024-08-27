import React, { useState } from 'react';
import logoupworkedited from "../assets/logoupworkedited.png";
import cart from "../assets/cart.png";
import hamburger from "../assets/hamburger.png";
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav>
            <ul className="logo">
                <li><img src={logoupworkedited} alt="logo" /></li>
            </ul>
            <ul className="icons">
                <li><img src={cart} alt="cart" /></li>
                <li>
                    <img 
                        src={hamburger} 
                        alt="hamburger" 
                        onClick={toggleDropdown} 
                    />
                    {isDropdownOpen && (
                        <div className="dropdown">
                            <ul>
                                <li><Link to="/Welcome">Welcome</Link></li>
                                <li><Link to="/HiddenTreasures">HiddenTreasures</Link></li>
                                <li><Link to="/HolderRewards">HolderRewarrds</Link></li>
                                <li><Link to="/Products">Products</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>

                            </ul>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
}
