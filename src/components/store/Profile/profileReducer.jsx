// const initialState = {
//     name: 'Aleksey',
//     visible: true,
// };

import { initialState } from "../initialState";

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'visible': {
            return {
                ...state,
                visible: !state.visible,
            };
        }
        default: {
            return state;
        }
    }
};
