export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT ='CHATS::DELETE_CHAT';

export const addChat = (chatId, name, message) => ({
    type: ADD_CHAT,
    chatId,
    name,
    message,
});

export const deleteChat = (chatId, name, message) => ({
    type: DELETE_CHAT,
    chatId,
    name,
    message,
});
