import React, { useState, useRef, useEffect } from 'react';
import logoupworkedited from "../assets/logoupworkedited.png";
import cart from "../assets/cart.png";
import hamburger from "../assets/hamburger.png";
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        if (isDropdownOpen) {
            dropdownRef.current.classList.add('open');
        } else {
            dropdownRef.current.classList.remove('open');
        }
    }, [isDropdownOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav>
            <ul className="logo">
                <li><Link to="/" ><img src={logoupworkedited} alt="logo" /></Link></li>
            </ul>
            <ul className="icons">
                <li><img src={cart} alt="cart" /></li>
                <li>
                    <img 
                        src={hamburger} 
                        alt="hamburger" 
                        onClick={toggleDropdown} 
                    />
                    <div ref={dropdownRef} className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
                        <ul>
                            <li><Link to="/Welcome">Welcome</Link></li>
                            <li><Link to="/HiddenTreasures">HiddenTreasures</Link></li>
                            <li><Link to="/HolderRewards">HolderRewards</Link></li>
                            <li><Link to="/Products">Products</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
}
