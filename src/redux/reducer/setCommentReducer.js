import { actionStates } from "../action/actionState"

const initialValue = {}
export const SET_COMMENT_REDUCER = (state = initialValue, action) => {

    switch (action?.type) {
        case actionStates.SET_COMMENT:
            return {
                ...state, ...action
            }

        default:
            return state
    }

}