import './Header.css'
import pfp from "../assets/pfp.png"
import mail from "../assets/Mail.svg"
export default function Header(){
    return(
        <header>
            <img className='main--pfp' src={pfp}/>
            <h1>Laura Smith</h1>
            <h4>Fronted Developer</h4>
            <p className='header--email'>laurasmith.website</p>
            <div>
                <img src={mail}/>
                <span>Email</span>
            </div>
        </header>
    )
}