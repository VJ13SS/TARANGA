import { FaAirFreshener, FaHome, FaInfo, FaInfoCircle } from "react-icons/fa"
import {BsCalendarEvent} from "react-icons/bs"
import {MdInfo} from "react-icons/md"
import "./sidebar.css"
import { useNavigate } from "react-router-dom"

export default function Sidebar(){
    const navigate = useNavigate()
    return(
        <div className="sidebar">
            <FaHome className="sidebarIcon" onClick={() => navigate('/')}/>
            <FaInfo className="sidebarIcon" onClick={() => navigate('/about')}/>
            <BsCalendarEvent className="sidebarIcon" onClick={() => navigate('/events')}/>
        
        </div>
    )
}