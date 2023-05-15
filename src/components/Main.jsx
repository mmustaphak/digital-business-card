import './Main.css'
export default function Main(){
    return(
        <main>
            <img src="src/assets/pfp.png"/>
            <h1>Laura Smith</h1>
            <h4>Fronted Developer</h4>
            <p className='main--email'>laurasmith.website</p>
            <div>
                <img src='src/assets/Mail.svg'/>
                <span>Mail</span>
            </div>
            <h3 className='main--about'>About</h3>
            <p>I am a frontend developer with a particular interest<br/> in making things simple and automating daily<br/> tasks. I try to keep up with security and best<br/> practices, and am always looking for new things to learn.</p>
            <h3>Interest</h3>
            <p>Food expert. Music scholar. Reader. Internet<br/> fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </main>
    )
}