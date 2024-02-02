import { actionStates } from "../action/actionState"

const initialValue = {}
export const SET_ALL_POST_REDUCER = (state = initialValue, action) => {

    switch (action?.type) {
        case actionStates.SET_ALL_POST:
            return {
                ...state, ...action
            }

        default:
            return state
    }

}
