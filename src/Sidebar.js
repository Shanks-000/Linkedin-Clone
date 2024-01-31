import React from 'react';
import './css/sidebar.css'
import { Avatar } from "@mui/material";

function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar__profile">
                 <img src="https://wallpapers.com/images/hd4/4098x2304-anime-universe-image-anime-characters-hd-wallpaper-and-background-6q0wwu9gf52hvl9h.jpg"/>
           
                 <div className="profile__details">
                    <Avatar/>
                    <h4>Shashank Singh</h4>
                    <p>Web Developer</p>

                 </div>
                 <div className="profile_stats">
                    <span>Who viewed your profile</span>
                    <span className="stat_number">20</span>
                 </div>

                 <div className="profile_stats">
                    <span>Connection<br/><b>Who viewed your profile</b></span>
                    <span className="stat_number">150</span>
                 </div>

            </div>

            <div className="sidebar__recent">
                <p className="hash"><span>#</span>branding</p>
                <p className="hash"><span>#</span>marketing</p>
                <p className="hash"><span>#</span>web development</p>
                <p className="hash"><span>#</span>programming</p>
                <p className="hash"><span>#</span>reactjs</p>
                <p className="hash"><span>#</span>nodejs</p>

            </div>

        </div>
    )
}
export default Sidebar