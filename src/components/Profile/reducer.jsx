const initialState = {
    name: 'Aleksey',
    visible: true,
};

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
