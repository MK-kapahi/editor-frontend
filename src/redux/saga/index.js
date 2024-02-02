import axios from "axios"
import { takeLatest, all } from "redux-saga/effects";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { actionStates } from "../action/actionState";
import { URL, apiEndPoints } from "../../shared/constant";

const option = {
    withCredentials: 'include',
}

function* login({ payload }) {
    try {
        console.log(URL)
        const res = yield axios.post(URL + apiEndPoints.LOGIN, payload?.data, option)
        console.log(res?.data)
        if (res.status === 200) {
            payload?.loginResponse(res)

            const stringifiedObj = JSON.stringify(res?.data?.data)

            localStorage.setItem(
                "userInfo",
                stringifiedObj
            )
            // socket.connect();
        }
    }

    catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.message, {
            position: toast?.POSITION?.TOP_RIGHT,
        })
    }
}

function* registerUser({ payload }) {
    try {
        const response = yield axios.post(URL + apiEndPoints.REGISTER, payload?.data, option)
        console.log(response)
        payload?.AccountCreateResponse(response)
    } catch (error) {
        payload?.AccountCreateResponse(error)
        toast.error(error?.response?.data?.message, {
            position: toast.POSITION.TOP_RIGHT,
        })
        console.log(error)
    }
}

function* Saga() {
    yield all([
        takeLatest(actionStates.LOGIN, login),
        takeLatest(actionStates.SIGNUP, registerUser),])
}

export default Saga;