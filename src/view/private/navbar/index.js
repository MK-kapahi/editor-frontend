import React from "react";
import "./style.css"
import { NavLink, useNavigate } from "react-router-dom";
import CustomButton from "../../../components/atoms/customButton";
import { toast } from "react-toastify"
import { logoutUser } from "../../../redux/action";
import { useDispatch } from "react-redux";
import { routes } from "../../../shared/constant";
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleLogout = () => {
        localStorage.clear()
        dispatch(logoutUser({ handleResponse }))
    }
    const handleResponse = (response) => {
        navigate("/"+routes.LOGIN)
        if (response?.status === 200) {

            toast.success("logout  Successfullly "
                , {
                    position: toast.POSITION.TOP_RIGHT,
                })
        }

        else {
            toast.error(response?.response?.data?.message
                , {
                    position: toast.POSITION.TOP_RIGHT,
                })
        }
    }
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
                    <div>
                        <CustomButton className="btn btn-outline-primary" type="button" onClick={handleLogout}> Logout </CustomButton>
                    </div>
                </div>
            </div>
        </nav>
    </>)
}