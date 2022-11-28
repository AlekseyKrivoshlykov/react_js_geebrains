import { initialState } from "../initialState";
import { ADD_CHAT, DELETE_CHAT } from "./actions";

export const chatsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CHAT: {
            const currentList = state.chats[action.chatId] || [];
            return {
                ...state.chats,
                messageList: {
                    ...state.chats,
                    [action.chatId]: [
                        ...currentList,
                        {
                            ...action.message,
                            id: `$(action.chatId)$(currentList.length)`,
                        },
                    ],
                }
            }
        }
        case DELETE_CHAT: {
            const { payload } = action
            return state.chats.filter((item) => item.myId !== payload.myId )
        }
    
    default: 
        return state;
    }
};
