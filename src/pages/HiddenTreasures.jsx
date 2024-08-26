import krypoimage from "../assets/upworkimageedit.png"
import "./HiddenTreasures.css"
export default function HiddenTreasures(){
    return(<div>
        <h1 className="hdtitle">HIDDEN TREASURES</h1>
        <h3>Out of 100 collectibles , several will contain hidden treasures such as</h3>
        <ul className="prizeslist">
            <li>Cash Prizes</li>
            <li>Gadgets(Smartphones ,tablets,etc)</li>
            <li>An all inclusive  5-day trip for 2-3 friends to a myseray island resort</li>
            <li>Additional gifts and surprises</li>
        </ul>
         
        <div className="svgclass">      
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" width="100%" height="auto"  >
  <path fill="#FFA500" fill-opacity="1" d="M0,224L40,197.3C80,171,160,117,240,112C320,107,400,149,480,186.7C560,224,640,256,720,240C800,224,880,160,960,144C1040,128,1120,160,1200,160C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
</svg>
<div className="whysolanadiv">
    
        <h1 className="whysolana">WHY SOLANA?</h1>
        <h2 className="solanadetails">Solana is chosen for it's high performance ,low transaction costs and fast proocessing speeds making it ideal for a smooth and seamless experience. </h2>
    <span className="image"><img src={krypoimage} alt="Solana image" /></span>
    </div>
    </div>

    </div>);
}