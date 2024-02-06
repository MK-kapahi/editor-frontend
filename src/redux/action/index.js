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

export const getAllPost = (payload) =>{
  return {
    type : actionStates.GET_ALL_POST,
    payload
  }
}

export const setAllPost = (payload) =>{
  return {
    type : actionStates.SET_ALL_POST,
    payload
  }
}

export const addComment = (payload) =>{
  return {
    type : actionStates.ADD_COMMENT,
    payload
  }
}

export const getComment = (payload) =>{
  return {
    type : actionStates.GET_COMMENT,
    payload
  }
}

export const setComment = (payload) =>{
  return {
    type : actionStates.SET_COMMENT,
    payload
  }
}