import React from "react";
import "./style.css"

export default function Navbar() {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navigation">
                <div className="logo">
                    <a className="no-underline" href="#">
                        Instagram
                    </a>
                </div>
                <div className="navigation-search-container">
                    <i className="fa fa-search"></i>
                    <input className="search-field" type="text" placeholder="Search" />
                    <div className="search-container">
                        <div className="search-container-box">
                            <div className="search-results">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navigation-icons">
                    <a href="https://instagram.com/mimoudix" target="_blank" class="navigation-link">
                        <i class="far fa-compass"></i>
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
                    <a href="https://instagram.com/mimoudix" class="navigation-link">
                        <i className="far fa-user-circle"></i>
                    </a>
                    <a href="https://instagram.com/mimoudix" id="signout" class="navigation-link">
                        <i className="fas fa-sign-out-alt"></i>
                    </a>
                </div>
            </div>
        </nav>
    </>)
}