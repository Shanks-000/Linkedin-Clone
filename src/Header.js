import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./css/header.css"
import Headeroptions from "./headeroptions";
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from "@mui/material";


function Header()   {
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__logo">
                    <img src="https://img.icons8.com/?size=512&id=13930&format=png"/>
                </div>
                <div className="header__search">
                   <SearchIcon/>
                   <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="header__right">
                <Headeroptions Icon={HomeIcon} title = "Home"/>
                <Headeroptions Icon={PeopleAltIcon} title = "My Network"/>
                <Headeroptions Icon={BusinessCenterIcon} title = "Jobs"/>
                <Headeroptions Icon={MessageIcon} title = "Messaging"/>
                <Headeroptions Icon={NotificationsIcon} title = "Notifications"/>
                <Headeroptions avater={Avatar} title = "Shashank singh"/>
            </div>
        </div>
    )
}

export default Header