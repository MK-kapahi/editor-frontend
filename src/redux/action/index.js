import { actionStates } from "./actionState"

export const LoginUser = (payload) => {

  return {
    type: actionStates.LOGIN,
    payload
  }
}

export const logoutUser = (payload) => {
  return {
    type: actionStates.LOGOUT,
    payload
  }
}

export const createAccount = (payload) => {
  return {
    type: actionStates.SIGNUP,
    payload
  }
}

export const addPost = (payload)=>{
  return {
    type : actionStates.ADD_POST,
    payload
  }
}