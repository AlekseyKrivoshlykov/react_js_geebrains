import { useEffect, useState } from "react"
import { Link, Route, useParams } from "react-router-dom"



const chatsPlaceholder = [
    {
        user: 'Vladimir',
        messages: [
            {
                author: 'Nikita',
                text: 'hello',
                date: new Date().toLocaleTimeString()
            },
            {
                author: 'You',
                text: 'And u',
                date: new Date().toLocaleTimeString()
            },
        ]
    },
    {
        user: 'Kristina',
        messages: [
            {
                author: 'Kristina',
                text: '<3'
            }
        ]
    },
]

export const ChatsPage = () => {
    const [chats, setChats] = useState([])
    const [messages, setMessages] = useState([])
    const { chatId } = useParams();

    useEffect(() => {
        setChats(chatsPlaceholder)
        setMessages(chatsPlaceholder)
    },[])


return (
    <>
    <ChatList chats={chats}/>
    <div>
        <ChatMessages messages = {messages}/>
        {/* {chats[chatId]} */}
        {/* <NewChat chat={chats[chatId]} /> */}
    </div>
    </>
)

}

const ChatList = ({chats}) => {
    return(
        <>
            {chats.map(function (el, idx) {
                return <div className="chat_users" key={idx}>
                    <Link to = {`${idx}`}>{el.user}</Link>
                </div>
            })}
        </>
    )
}

const ChatMessages = ({messages}) => {
    console.log(messages)
    console.log('lalalal')
    return (
        <>
            {messages.map(function (el, idx) {
                return <div className="chat_messages" key={idx}>
                    {/* <Link to = {`${idx}`}>{el.messages}</Link> */}
                    <div>{el.messages.author}</div>
                    <div>{el.messages.text}</div>
                    <div>{el.messages.date}</div> 
                    {/* <div>{el.messages}</div> */}
                </div>
            })}
        </>
    )
}



