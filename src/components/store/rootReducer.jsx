import { combineReducers } from 'redux'
import { chatsReducer } from './Chats/chatsReducer'
import { messageReducer } from './Message/messageReducer'
import { profileReducer } from './Profile/profileReducer'

export const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  message: messageReducer,
})