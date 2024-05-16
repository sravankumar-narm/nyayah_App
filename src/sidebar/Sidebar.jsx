import React, { useState } from 'react';
import "./Sidebar.css"
//import Header from './Header';
import { NavLink} from 'react-router-dom';
import dashIcon from "../assets/Images/svg/dashboardIcon.svg";
import revenueIcon from "../assets/Images/svg/revenue.svg";
import teamIcon from "../assets/Images/svg/team.svg";
import allocationIcon from "../assets/Images/svg/allocation.svg";
import reportIcon from "../assets/Images/svg/reports.svg";
import pocIcon from "../assets/Images/svg/poc.svg";
import approvalIcon from "../assets/Images/svg/approval.svg";
import admin from "../assets/Images/sidebar/sidebar_admin.png";
import cases from "../assets/Images/sidebar/sidebar_case.png";
import citations from "../assets/Images/sidebar/sidebar_citations.png";
import docIcon from "../assets/Images/sidebar/sidebar_doc.png";
import drafting from "../assets/Images/sidebar/sidebar_drafting.png";
import home from "../assets/Images/sidebar/sidebar_home.png";
import judgments from "../assets/Images/sidebar/sidebar_judgements.png";
import logout from "../assets/Images/sidebar/sidebar_logout.png";
import expandbutton from "../assets/Images/sidebar/sidebar_button.png";
import line1 from "../assets/Images/sidebar/sidebar_line1.png";
import line2 from "../assets/Images/sidebar/expandLine.png";
import { Tooltip } from "react-tooltip";


const Sidebar = ({children}) => {
    const [expanded, setExpanded] = useState(false);

    const toggleSidebar = () => {
        setExpanded(!expanded);
    };
    // const navigate = useNavigate();

    const lineImage = expanded ? line2 : line1;

    const expandIcon = expanded ? "<" : ">";


  return (
    <div className={`main-app ${expanded ? 'expanded' : ''}`}>
        <div className="sidebar-main">
            <div className="sidebar-container">
            <div className={`sidebar-list ${expanded ? 'expanded' : ''}`}>
                <div className={`expand-button ${expanded ? 'expanded' : ''}`} onClick={toggleSidebar}>
                        <img src={expandbutton} alt="expand-button" />
                        <div className="flex items-center justify-center w-full h-full z-1 mt-[-28px] ml-[1px] ">
        <span >{expandIcon}</span>
    </div>

                    </div>
                    <NavLink className="nav-link nav-link-dash img-hover" >
                    <div className="nav-content">
                                <img className='nav-icon'  src={home} alt="icon"   />
                                {expanded && <span className="nav-text">Home</span>}
                            </div>
                    </NavLink>
                    <Tooltip id="dash"  className="sidebar-tooltip"/>
                    <NavLink className="nav-link nav-link-revenue img-hover">
                        <img className='nav-icon'  src={cases} alt="icon" />
                        {expanded && <span className="nav-text">Case</span>}
                    </NavLink>
                    <Tooltip id="rev"  className="sidebar-tooltip"/>
                    <NavLink className="nav-link nav-link-revenue img-hover">
                        <img className='nav-icon'  src={drafting} alt="icon" />
                        {expanded && <span className="nav-text">Drafting</span>}
                    </NavLink>
                    <NavLink className="nav-link nav-link-revenue img-hover">
                        <img className='nav-icon'  src={citations} alt="icon" />
                        {expanded && <span className="nav-text">Citations</span>}
                    </NavLink>
                    <NavLink className="nav-link nav-link-revenue img-hover">
                        <img className='nav-icon'  src={docIcon} alt="icon" />
                        {expanded && <span className="nav-text">Doc Check</span>}
                    </NavLink>
                    <NavLink className="nav-link nav-link-revenue img-hover">
                        <img className='nav-icon'  src={judgments} alt="icon" />
                        {expanded && <span className="nav-text">Judgements</span>}
                    </NavLink>
                    <NavLink className="nav-link nav-link-revenue img-hover">
                        <img className='nav-icon'  src={admin} alt="icon" />
                        {expanded && <span className="nav-text">Admin</span>}
                    </NavLink>
                    <div className={lineImage} >
                        <img src={line1} alt="expand-button" />
                    </div>
                    <NavLink className="nav-link nav-link-revenue img-hover">
                        <img className='nav-icon'  src={logout} alt="icon" />
                        {expanded && <span className="nav-text">Logout</span>}
                    </NavLink>
                </div>  
            </div>

        </div>
       
    </div>
  )
}

export default Sidebar