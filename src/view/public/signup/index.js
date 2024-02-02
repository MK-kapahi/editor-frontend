import React, { useState } from "react";
import CustomInputFields from "../../../components/atoms/customInput";
import CustomButton from "../../../components/atoms/customButton";
import "./style.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ERROR_MESSAGES, REGEX, routes } from "../../../shared/constant";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { createAccount } from "../../../redux/action";


const initialFeilds = {
    userName: "",
    fullName: "",
    email: " ",
    password: ""
}
const errorInitialFeilds =
{
    nameError: "",
    emailError: "",
    passwordError: "",
    error: ""
}
export default function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
            case "userName":
                if (value.length > MINLENGTH) {
                    setErrorState((prevState) => ({ ...prevState, [field]: errMsg.ENTER_BELOW_LENGTH_LIMIT(MINLENGTH) }));
                } else {
                    setErrorState(initialFeilds);
                    setFields((prevFields) => ({ ...prevFields, [field]: value }));
                }
                break;
            case "fullName":
                if (value.length > MINLENGTH) {
                    setErrorState((prevState) => ({ ...prevState, [field]: errMsg.ENTER_BELOW_LENGTH_LIMIT(MINLENGTH) }));
                } else {
                    setErrorState(initialFeilds);
                    setFields((prevFields) => ({ ...prevFields, [field]: value }));
                }
                break;
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
        e.preventDefault();
        const {
            userName,
            fullName,
            email,
            password
        } = fields;

        const isEmailValid = REGEX.EMAIL.test(email);
        const isPasswordValid = REGEX.PASSWORD.test(password);
        const isAllFieldsFilled =
            userName.trim() === "" &&
            fullName.trim() === "" &&
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
            username: userName,
            fullname: fullName,
            email: email,
            password: password
        }

        console.log(data)

        dispatch(createAccount({ data, AccountCreateResponse }))
        resetForm();
    }
    const navigateToLogin = () => {
        navigate("/"+routes.LOGIN)
    }

    const resetForm = () => {
        setFields(initialFeilds);
        setErrorFields(errorInitialFeilds);
    }

    const AccountCreateResponse = (response) => {
        console.log(response)
        if (response.status === 200) {

            toast.success("Account Create Successfullly "
                , {
                    position: toast?.POSITION?.TOP_RIGHT,
                })
            navigate("/login")
        }

        else {
            toast.error(response.response.data.message
                , {
                    position: toast.POSITION.TOP_RIGHT,
                })
        }

    }
    return (
        <>
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="page">
                            <div className="header">
                                <div className="container-form">
                                    <form action="">
                                        <CustomInputFields type="text" placeholder="Email" onChange={(e) => validateInput("email", e.target.value, 40, ERROR_MESSAGES, setErrorFields)}></CustomInputFields>
                                        {errorFields.email ? <label className="text-danger">{errorFields.email}</label> : null}
                                        <CustomInputFields type="text" placeholder="Full Name" onChange={(e) => validateInput("fullName", e.target.value, 40, ERROR_MESSAGES, setErrorFields)}></CustomInputFields>
                                        {errorFields.fullName ? <label className="text-danger">{errorFields.fullName}</label> : null}
                                        <CustomInputFields type="text" placeholder="Username" onChange={(e) => validateInput("userName", e.target.value, 40, ERROR_MESSAGES, setErrorFields)}></CustomInputFields>
                                        {errorFields.userName ? <label className="text-danger">{errorFields.userName}</label> : null}
                                        <CustomInputFields type="password" placeholder="Password" onChange={(e) => validateInput("password", e.target.value, 40, ERROR_MESSAGES, setErrorFields)}></CustomInputFields>
                                        {errorFields.password ? <label className="text-danger">{errorFields.password}</label> : null}
                                          {errorFields.err ? <label className="text-danger">{errorFields.err}</label> : null}
                                        <CustomButton type="submit" onClick={handleSubmit}>Sign up </CustomButton>
                                        {/* <button>Sign up</button> */}
                                    </form>
                                </div>
                            </div>
                            <div class="option">
                                <p>Have an account? <CustomButton onClick={navigateToLogin}>Log in</CustomButton></p>
                            </div>
                            <div class="footer">
                                <ul>
                                    <li><a href="">ABOUT</a></li>
                                    <li><a href="">HELP</a></li>
                                    <li><a href="">PRESS</a></li>
                                    <li><a href="">API</a></li>
                                    <li><a href="">JOBS</a></li>
                                    <li><a href="">PRIVACY</a></li>
                                    <li><a href="">TEMS</a></li>
                                    <li><a href="">LOCATIONS</a></li>
                                    <li><a href="">TOP ACCOUNTS</a></li>
                                    <li><a href="">HASHTAGS</a></li>
                                    <li><a href="">LANGUAGE</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div >
            </section >
        </>

    )
}