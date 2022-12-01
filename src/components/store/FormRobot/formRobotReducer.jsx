import { initialState } from "../initialState";

export const formRobotReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'addMessage': {
            return {
                ...state,
                Author: 'Robot',
                Message: 'Message is recieved!'
            };
        }
        default: {
            return state;
        }
    }
};
