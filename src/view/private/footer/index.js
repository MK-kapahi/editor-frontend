import React from "react";
import './style.css'
export default function Footer() {
    return (<>

        <footer id="colophon" className="site-footer" role="contentinfo">
            <div className="social-wrapper">
                <ul>
                    <li>
                        <a href="#" target="_blank">
                            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" alt="Twitter Logo" className="twitter-icon" /></a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <img src="https://www.mchenryvillage.com/images/instagram-icon.png" alt="Instagram Logo" className="instagram-icon" /></a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <img src="https://www.columbia.edu/~ml3720/linkedin.jpg" alt="Linkedin Logo" className="linkedin-icon" /></a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <img src="http://www.iconarchive.com/download/i54037/danleech/simple/facebook.ico" alt="Facebook Logo" className="facebook-icon" /></a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <img src="http://icons.iconarchive.com/icons/marcus-roberto/google-play/256/Google-plus-icon.png" alt="Googleplus Logo" className="googleplus-icon" /></a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <img src="https://lh3.googleusercontent.com/j_RwVcM9d47aBDW5DS1VkdxUYCkDUCB6wZglv4x-9SmsxO0VaFs7Csh-FmKRCWz9r_Ef=w170" alt="Youtube Logo" className="youtube-icon" /></a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <img src="http://www.iconarchive.com/download/i94258/designbolts/vector-foursquare/Foursquare-2.ico" alt="Foursquare Logo" className="foursquare-icon" /></a>
                    </li>
                </ul>
            </div>

            {/* <nav className="footer-nav" role="navigation">
            </nav> */}
        </footer>
    </>)
}