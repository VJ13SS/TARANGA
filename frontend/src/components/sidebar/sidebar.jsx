import { FaAirFreshener, FaHome, FaInfo, FaInfoCircle } from "react-icons/fa"
import {BsCalendarEvent} from "react-icons/bs"
import {MdInfo} from "react-icons/md"
import "./sidebar.css"
import { useNavigate } from "react-router-dom"

export default function Sidebar(){
    const navigate = useNavigate()
    return(
        <div className="sidebar">
            <span onClick={() => navigate('/')}>Home <FaHome className="sidebarIcon" /></span>
            <span onClick={() => navigate('/about')}>About <FaInfo className="sidebarIcon" /></span>
            <span onClick={() => navigate('/events')}>Events <BsCalendarEvent className="sidebarIcon" /></span>
            
        
        </div>
    )
}