// export function getMessage (chatId) {
//     return (store) => store.chats[chatId].messages
// }

export function getMessageById(chatId) {
    return (store) => store.chats[chatId].messages
}