import { initialState } from "../initialState";

export const messageReducer = (state = initialState, action) => {
    switch(action.type) {
        // case 'visible': {
        //     return {
        //         ...state,
        //         visible: !state.visible,
        //     };
        // }
        default: {
            return state;
        }
    }
};
