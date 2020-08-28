import { FETCH_ERRORS } from "../Types/Types";

const initialState = {}

const ErrorReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ERRORS:
            return action.payload;
        default:
            return state;
    }
}

export default ErrorReducer