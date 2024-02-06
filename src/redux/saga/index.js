import axios from "axios"
import { takeLatest, all, put, take } from "redux-saga/effects";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { actionStates } from "../action/actionState";
import { URL, apiEndPoints } from "../../shared/constant";
import { setAllPost, setComment } from "../action";

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

function* createPost({ payload }) {
    try {
        console.log(payload)
        const res = yield axios.post(URL + apiEndPoints?.CREATE_POST, payload?.data , option)
        console.log(res)
        payload?.createPostReply(res)
    } catch (error) {
        console.log(error)
    }
}

function* getPost({payload})
{
    try {
        console.log(payload)
        const res = yield axios.get(URL + apiEndPoints?.GET_POST, option)

        yield put(setAllPost(res?.data))
        console.log(res)
    } catch (error) {
        console.log(error)
    }  
}

function* addCommentToPost({payload})
{
    try {
        console.log(payload)
        const res = yield axios.post(URL + apiEndPoints?.ADD_COMMENT, payload?.data , option)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

function* getComments({payload})
{
    try {
        const res = yield axios.get(URL + apiEndPoints?.GET_COMMENT+"/"+payload?.id, option)

        yield put(setComment(res?.data))
        console.log(res)
    } catch (error) {
        console.log(error)
    }  
}

function* Saga() {
    yield all([
        takeLatest(actionStates.LOGIN, login),
        takeLatest(actionStates.SIGNUP, registerUser),
        takeLatest(actionStates.ADD_POST, createPost),
        takeLatest(actionStates.GET_ALL_POST , getPost),
        takeLatest(actionStates.ADD_COMMENT , addCommentToPost),
        takeLatest(actionStates.GET_COMMENT , getComments),
    ])
}

export default Saga;