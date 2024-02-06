import React from "react";
import "./style.css"
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navigation">
                <div className="logo">
                    {/* <a className="no-underline" href="#">
                        Instagram
                    </a> */}
                </div>
                <div className="navigation-search-container">
                    <i className="fa fa-search"></i>
                    {/* <input className="search-field" type="text" placeholder="Search" /> */}
                    <div className="search-container">
                        <div className="search-container-box">
                            <div className="search-results">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/home" activeclassname="active" >
                                            Home
                                        </NavLink>

                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/create-post" activeclassname="active" >
                                            Create post
                                        </NavLink>

                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navigation-icons">
                    <a href="https://instagram.com/mimoudix" target="_blank" className="navigation-link">
                        <i className="far fa-compass"></i>
                    </a>
                    <a className="navigation-link notifica">
                        <i className="far fa-heart">
                            <div className="notification-bubble-wrapper">
                                <div className="notification-bubble">
                                    <span className="notification-count">99</span>
                                </div>
                            </div>
                        </i>
                    </a>
                    <a href="https://instagram.com/mimoudix" className="navigation-link">
                        <i className="far fa-user-circle"></i>
                    </a>
                    <a href="https://instagram.com/mimoudix" id="signout" className="navigation-link">
                        <i className="fas fa-sign-out-alt"></i>
                    </a>
                </div>
            </div>
        </nav>
    </>)
}