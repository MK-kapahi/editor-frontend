import React, { useState } from "react";
import CustomInputFields from "../../../components/atoms/customInput";
import CustomButton from "../../../components/atoms/customButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ERROR_MESSAGES, REGEX, routes } from "../../../shared/constant";
import { LoginUser } from "../../../redux/action";
// import {img } from "../../../../assets/download (1).png"
import "./style.css"

const initialFeilds = {
    email: "",
    password: "",
}
const errorInitialFeilds =
{
    emailError: "",
    passwordError: "",
    error: ""
}
export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const invalidCharacterForEmail = "!#$%^&*()_-+=~`,<>/?;:'{}[]\\|\"\"";
    const arrOfInvalidChForEmail = invalidCharacterForEmail.split("");
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [fields, setFields] = useState(initialFeilds);
    const [errorFields, setErrorFields] = useState(errorInitialFeilds);

    const validateInput = (field, value, MINLENGTH, errMsg, setErrorState) => {
        switch (field) {
            case 'email':
                if (value.length > MINLENGTH) {
                    setErrorState((prevState) => ({ ...prevState, [field]: errMsg.ENTER_BELOW_LENGTH_LIMIT(MINLENGTH) }));
                } else if (value.split("").some((val) => arrOfInvalidChForEmail.some((item) => item === val))) {
                    setErrorState({ [field]: ERROR_MESSAGES.CANT_ENTER_NUMBER });
                } else {
                    setErrorState(initialFeilds);
                    setFields((prevFields) => ({ ...prevFields, [field]: value }));
                }
                break;

            case 'password':
                if (value.length > MINLENGTH) {
                    setErrorState((prevState) => ({ ...prevState, [field]: errMsg.ENTER_BELOW_LENGTH_LIMIT(MINLENGTH) }));
                }
                else {

                    setErrorState(initialFeilds);
                    setFields((prevFields) => ({ ...prevFields, [field]: value }));
                }
                break;

            default:
                setErrorState();
                setFields((prevFields) => ({ ...prevFields, [field]: value }));
                break;
        }

    }
    const handleSubmit = (e) => {
        console.log("heyyyyyy")
        e.preventDefault();
        const {
            email,
            password
        } = fields;

        const isEmailValid = REGEX.EMAIL.test(email);
        const isPasswordValid = REGEX.PASSWORD.test(password);
        const isAllFieldsFilled =
            email.trim() === "" &&
            password.trim() === "";

        if (isAllFieldsFilled) {
            setErrorFields({ err: ERROR_MESSAGES.ENTER_ALL_FIELDS });
            return;
        }


        if (!isEmailValid) {
            setErrorFields({ "email": ERROR_MESSAGES.ENTER_VALID_EMAIL });
            return;
        }

        if (!isPasswordValid) {
            setErrorFields({ "password": ERROR_MESSAGES.ENTER_VALID_PASSWORD })
            return;
        }


        const data =
        {
            email: email,
            password: password
        }

        dispatch(LoginUser({ data, loginResponse }))
    }
    const navigateToRegister = () => {
        navigate("/"+routes.SIGN_UP)
    }
    const loginResponse = (res) => {
        console.log(res);
        // if (res.status === 200) {
        //     toast.success("Login SucessFull", {
        //         position: toast.POSITION.TOP_RIGHT,
        //     })
        //     if (res.data.data.role === 1) {

        //         navigate(routes.ADMIN + "/" + adminRoutes.PRODUCTS)
        //     }
        //     if (res.data.data.role === 2) {

        //         navigate(routes.USER + "/" + userRoutes.DASHBOARD)
        //     }

        //     if (res.data.data.role === 3) {

        //         navigate(routes.VENDOR + "/" + vendorRoutes.DASHBOARD)
        //     }

        //     if (res.data.data.role === 0) {
        //         navigate(routes.NO_ROLE)
        //     }
        // }
    }
    return (<>
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="content-container">
                        <div className="log-in-container">
                            <img className="instagram-logo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUSEBMQFRAPEBMVFRUQEA8QEBgVGBEWFxURFRUYHSggGholHhYTITEhJSkrOi8uGh8zODMtQygtLisBCgoKDg0OGhAQGDUlICY1NDcuLDUrNTc3Ny8tKzQrMDY2MDc3NzYtMzc3NjUtKy41LTI1LS0xMy01LTItOCsuLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQj/xAA/EAACAgECAwQGCAIJBQAAAAABAgADEQQSBQYhEzFBUQciMkJhcRQXVYGRlKHScrEVI1JikrLB0fAkY6LC4f/EABgBAQADAQAAAAAAAAAAAAAAAAABAwQC/8QAIxEBAAICAQQCAwEAAAAAAAAAAAECAxEhBBJBwTHwUWFxMv/aAAwDAQACEQMRAD8A7hERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREC1a2IzNdx3UdmhPkRn/AJ90u8S1PZorYJwyk7Rnp736ZMDNnmZZ0mrS1Q9bBlPcRDAhh5ZgXd09zMTVOVUnyb9J5ort/wAoGZmeykLDMB3mAd8DMrqbMweMkjTuV9oLkfMdZY5V1hu0yue9oG4iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgR3mcblsX/tr+Oek5BrvSxZprWqatrexJQbn9Xp0zjzxidi45Szbwo9ax1UfIIW/0nyfzHUy6q7eCCbXPX+IwOlcD9KCpYezzUHfcUsOa8k9QG71zOn8D56p1NeSVRlcAhmX2dw6hu4z5Tm04KLnYVVswSzO8DJXYB6zEfAeMD634xbt2d22wle/x2kqR+BlvgvEqnqcqQopsdGLMO9O8/Lv/AAnKfRTodXxHthq9RqBTo2rSj1slWILMAT3kLs6nPtTn3OZ1ej1VtRe5FLu+C3Q5cgtkd+e/74HZ+dvSpptLUV0zb7XXo23ovTwU9Sf0kT5d9MemprPa0XNqCerswcN8znIM4s7EnJJJPeSc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" alt="Instagram logo" />
                            <form action="https://codepen.io/jasonrhoads1/pen/wvQKMpy">

                                <CustomInputFields type="text" placeholder=" username, or email"  value={fields.email} onChange={(e) => validateInput("email", e.target.value, 40, ERROR_MESSAGES, setErrorFields)} ></CustomInputFields>
                                {errorFields.email ? <label className="text-danger">{errorFields.email}</label> : null}
                                <CustomInputFields type={showPassword ? 'text' : 'password'} value={fields.password} placeholder="Password" onChange={(e) => validateInput("password", e.target.value, 40, ERROR_MESSAGES, setErrorFields)} >
                                </CustomInputFields>
                                {/* <i
                                    className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                                    onClick={togglePasswordVisibility}
                                    style={{ width :"40%" , cursor: 'pointer', position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
                                >
                                    <i className={showPassword ? "faEye" : "faEyeSlash"} />
                                </i> */}
                                {errorFields.password ? <label className="text-danger">{errorFields.password}</label> : null}
                                {/* <input type="text" placeholder="Phone number, username, or email" />
                                <input type="password" placeholder="Password" /> */}
                                   {errorFields.err ? <h5 className="text-danger">{errorFields.err}</h5> : null}
                                <CustomButton type="submit" onClick={handleSubmit} >Log in</CustomButton>
                                {/* <input type="submit" value="Log in" /> */}


                            </form>
                        </div>
                        <div className="sign-up-container">
                            <p>Don't have an account? <CustomButton type="button" onClick={navigateToRegister} >Sign up</CustomButton></p>
                        </div>

                    </div>
                    <footer>
                        <ul>
                            <li><a href="#">Meta</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">API</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Top Accounts</a></li>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">Instagram Lite</a></li>
                            <li><a href="#">Threads</a></li>
                            <li><a href="#">Contact Uploading & Non-Users</a></li>
                            <li><a href="#">Meta Verifed</a></li>
                        </ul>
                    </footer>
                </div>
            </div>
        </section>
    </>)
}