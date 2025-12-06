import { FaAirFreshener, FaHome, FaInfo, FaInfoCircle, FaMedal } from "react-icons/fa"
import {BsCalendarEvent} from "react-icons/bs"
import {MdInfo} from "react-icons/md"
import "./sidebar.css"
import { useNavigate } from "react-router-dom"

export default function Sidebar(){
    const navigate = useNavigate()
    return(
        <div className="sidebar">
            <span onClick={() => navigate('/')}><i>Home</i> <FaHome className="sidebarIcon" /></span>
            <span onClick={() => navigate('/about')}><i>About</i> <FaInfo className="sidebarIcon" /></span>
            <span onClick={() => navigate('/events')}><i>Events</i> <BsCalendarEvent className="sidebarIcon" /></span>
            <span onClick={() => navigate('/leaderBoard')}><i>LeaderBoard</i><FaMedal className="sidebarIcon" /></span>
            
        
        </div>
    )
}