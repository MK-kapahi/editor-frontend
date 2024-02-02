import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Redirect, Navigate, useLocation } from "react-router-dom";
import { routes } from "../../shared/constant";
import Login from "../../view/public/login";
import Signup from "../../view/public/signup";
import Footer from "../../view/private/footer";
import Navbar from "../../view/private/navbar";
import Cookies from "universal-cookie";
import AddPost from "../../view/private/user/components/addPost";

export default function PublicRoutes() {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const token = cookies.get('token');
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem("userInfo"))
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {


        if (token) {
            setIsAuthenticated(true);
        }

        else {
            setIsAuthenticated(false);
            navigate('/login')
        }
    }, [token]);
    return (
        <>
            {isAuthenticated && <Navbar />}
            <Routes>
                {!isAuthenticated ? <Route exact path={routes.LOGIN} element={<Login />}></Route> : ""}
                {!isAuthenticated ? <Route exact path={routes.SIGN_UP} element={<Signup />}></Route> : ""}
                <Route exact path={routes.CREATE_POST} element={<AddPost />}></Route>
            </Routes>
            {isAuthenticated && <Footer />}
        </>

    )
}