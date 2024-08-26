import backgroundinfo from "../assets/backgroundinfo.png"
import "./Welcome.css"
export default function Welcome(){
    return(<div className="welcomepage">
        <div className="uppercontainer">
        <h1 className="welcometitle">WELCOME!</h1>
        
        <div className="descandanimation">

            <div>
<p className="descreption">Summer is just around the corner so we are Krypt would love to celebrate our customers with our new Treasure Hunt.</p>
<button onClick={(e)=>{}}>get stated</button>
            </div>
            <div className="animation">
<h1>ANIMATION</h1>
            </div>
            
            </div >
            <p>Our camapign aims to blend the allure of digital collectibles with real-world treasures, offering exciting rewards,including cash prizes, gadgets and an inclusive trip for lucky few</p>

<div className="pageanddesc">


<img src={backgroundinfo} alt="" />
</div>
</div>


<div className="bottomsection">
    <h1>HOW TO PARTICIPATE</h1>
    <ul>
        <li>Step 1. user will access the Krypt Brand website</li>
        <li>Step 2. They will connect their Solana wallet</li>
        <li>Step 3. Users can mint one of the hundred collectibles</li>
        <li>Step 4. Once minted they will reveal if their collectible contains a hidden treasure.</li>
    </ul>
</div>
    </div>)
}