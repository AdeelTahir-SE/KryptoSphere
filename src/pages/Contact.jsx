import {useState} from "react"
import Bottom from "../assets/bottomu.png"
import Footer from "../components/Footer";
import "./Contact.css"
export default function Contact(){
const [Name,setName]=useState("");
const [Email,setEmail]=useState("");
const [Phone,setPhone]=useState("");
const [textvalue,settextvalue]=useState("");
    return(
        <div className="contactpage">
            <div className="uppercontactform">
            <h1>CONTACT</h1>
<div>
    <form method="" onSubmit={(e)=>{e.preventDefault()}}>
        <input type="text" value={Name} onChange={(e)=>{setName(e.target.value)}} placeholder="Name:" />
        <input type="email" value={Email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email:" />
        <input type="tel" value={Phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Phone Number:" />



        <textarea name="message" value={textvalue} id="message" rows={12} cols={12} onChange={(e)=>{settextvalue(e.target.value)}}></textarea>
        <input type="submit" value="Send Message" />
    </form>
</div>
</div>
<Footer/>
<img src={Bottom} alt="" />
        </div>
    )
}

