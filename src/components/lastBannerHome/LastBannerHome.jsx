import React from 'react'
import cover from '../../assets/images/cover/cover1.jpg'
import { NavLink } from 'react-router-dom'
import './lastBannerHome.css'
export default function LastBannerHome() {
    return (
        <div className=''>
            <div className="lastBanner d-flex justify-content-end">
                <div className="imgCover">
                    <img className='img-fluid' src={cover} alt="" />
                </div>
                <div className="overlayTextt">
                    <div className="textw">
                        <p>
                            New
                        </p>
                        <h3>
                            MADE WITH LOVE <br />   AND DEDICATION
                        </h3>
                        <button className='btn btnBanner'>
                            <NavLink to={"/portofolio/modern/"} className="nav-link">
                                discover more
                            </NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
