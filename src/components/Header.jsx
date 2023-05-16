import './Header.css'
export default function Header(){
    return(
        <header>
            <img className='main--pfp' src="src/assets/pfp.png"/>
            <h1>Laura Smith</h1>
            <h4>Fronted Developer</h4>
            <p className='header--email'>laurasmith.website</p>
            <div>
                <img src='src/assets/Mail.svg'/>
                <span>Email</span>
            </div>
        </header>
    )
}