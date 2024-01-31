import InfoIcon from '@mui/icons-material/Info';
import React from "react";
import "./css/widget.css"

function Widget() {
    return(
        <div className="widget">
            <div className='widget_top'>
                <div className='widget__header'>
                    <h4>LinkedIn News</h4>
                    <InfoIcon/>
                </div>
                <div className='widget__body'>
                    <ul className='widget__options'>
                        <li>
                            <h4>Slaying job search fees</h4>
                            <p>6d ago * 4,65 readers</p>
                        </li>
                        <li>
                            <h4>A two pizza rule for eating</h4>
                            <p>2d ago * 6,22 readers</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='widget_bottom'>
                <div className='widget__header'>
                    <h4>Todays Top Courses</h4>
                    <InfoIcon/>
                </div>
                <div className='widget__body'>
                    <ul className='widget__options'>
                        <li>
                            <h4>JAVA Core/Advances</h4>
                            <p>Shanks</p>
                        </li>
                        <li>
                            <h4>Html,css and js</h4>
                            <p>Annu</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Widget