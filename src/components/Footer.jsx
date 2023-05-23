import "./Footer.css"
import twitter from "../assets/Twitter Icon.svg"
import facebook from "../assets/Facebook Icon.svg"
import instagram from "../assets/Instagram Icon.svg"
import linkedin from "../assets/Linkedin Icon.svg"
import github from "../assets/GitHub Icon.svg"

export default function Footer(){
    return(
        <footer>
            <img src={twitter} alt="Twitter Icon" />
            <img src={facebook} alt="Facebook Icon" />
            <img src={instagram} alt="Instagram Icon" />
            <img src={linkedin} alt="Linkedin Icon" />
            <img src={github} alt="GitHub Icon" />
        </footer>
    )
}