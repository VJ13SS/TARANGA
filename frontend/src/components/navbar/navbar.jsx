import { useContext } from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/appContext'
export default function Navbar(){

    const linkStyle = {
        textDecoration:'none',
        color:'white',
        
    }
    const {currentSection,setCurrentSection} = useContext(AppContext)
    const navigate = useNavigate()
    return(
        <nav>
            <span className='nav-left' onClick={() => navigate('/')}>TARANGA</span>
            <ul className='nav-links'>
                <li style={currentSection === "home" ? {border: "2px solid white"}:{}}><Link to="/" style={linkStyle} onClick={() => setCurrentSection('home')}>Home</Link></li>
                <li  style={currentSection === "about" ? {border: "2px solid white"}:{}}><Link to="/about" style={linkStyle} onClick={() => setCurrentSection('about')}>About</Link></li>
                <li  style={currentSection === "events" ? {border: "2px solid white"}:{}}><Link to="events" style={linkStyle} onClick={() => setCurrentSection('events')}>Events</Link></li>
            </ul>
            <a href='https://elacsta.web.app/' className='nav-right'>Elacsta</a>
        </nav>
    )
}