import { useEffect, useState } from "react";
import { Button, ListItem, ListItemText, ListSubheader, Switch } from '@mui/material';
import { List } from '@mui/material';
import { Link, Navigate, Route, useParams, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChatList } from "../presentation-components/ChatList";
import { getChatsList } from "../store/Chats/selectors";
import { Message } from "./Message";
import FormChat from "../presentation-components/FormChat";
import { chatsRef } from "../../services/firebase";
import { push } from "firebase/database";

export function Chats() {
    const { chatId } = useParams();
    const chats = useSelector(getChatsList);
    const [is_checked, setChecked] = useState(false);
    const [name, setName] = useState();
    // const [inputs, setInputs] = useState();
   
    const handleForm = (event) => {
        push(chatsRef, {
           ...name,
           ...is_checked,
        })
    }

    const handleCheckbox = (e) => {
    
        setChecked({ is_checked: e.target.checked })  
        console.log('check', is_checked)
    }

    const handleName = (e) => { 
        setName({ name: e.target.value })
        console.log('name', name)
    }
    

    // const handleInputs = (event) => {
    //     setInputs({
    //         name: event.target.value,
    //         is_checked: event.target.checked,
    //     })
    //     console.log('chat', inputs)
    //     console.log('name', event.target.name)
    // }

    if(chatId) {
        return (
            <>
            <header>Список чатов:</header>
                <ChatList chats={ chats } chatId={ chatId } />
                <Message chatId={ chatId } />
            </>
        )
    }

    return (
        <>
            <header>Список чатов:</header>
                <ChatList chats={ chats } chatId={ chatId } />
            <h3>Добавить чат</h3>
            <FormChat 
                handleForm={handleForm} 
                handleCheckbox={handleCheckbox}
                handleName={handleName}
            />
        </>
    );
}


       