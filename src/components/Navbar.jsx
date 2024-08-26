import logoupworkedited from "../assets/logoupworkedited.png"
import cart from"../assets/cart.png"
import hamburger from "../assets/hamburger.png"
import "./Navbar.css"
export default function Navbar(){
    return(
    <nav>
       
        <ul className="logo">
            <li><img src={logoupworkedited} alt="logo" /></li>
        </ul>
        <ul className="icons">
            <li><img src={cart} alt=""  /></li>
            <li><img src={hamburger} alt="" /></li>
        </ul>
    </nav>
    );
}