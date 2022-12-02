import { initialState } from "../initialState";
import { STATUSES } from "./actions";

export const charactersReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case 'ADD_CHARACTERS_FROM_API': 
            return payload
        case 'IS_LOADING': {
            return {
                ...state,
                loading: !state.loading,
            };
        }
        case 'GET_CHARACTERS_REQUEST' :
            return {
                ...state,
                request: STATUSES.REQUEST,
            }
        case 'GET_CHARACTERS_SUCCESS':
            return {
                ...state,
                characters: payload,
                request: STATUSES.SUCCESS,
            }
        case 'GET_CHARACTERS_FAILURE':
            return {
                ...state,
                request: STATUSES.FAILURE,
                error: payload
            }
        default: {
            return state;
        }
    }
};
