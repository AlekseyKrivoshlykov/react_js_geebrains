import { useEffect, useState } from "react";
import { Button, ListItem, ListItemText, ListSubheader, Switch } from '@mui/material';
import { List } from '@mui/material';
import { Link, Navigate, Route, useParams, useRouteMatch } from "react-router-dom";
import { Message } from "./Message";
import { useSelector } from "react-redux";
import { ChatList } from "./ChatList";
import { getChatsList } from "./store/Chats/selectors";

export function Chats() {
    const { chatId } = useParams();
    // const chats = useSelector((store) => store.chats);
    const chats = useSelector(getChatsList);

    // if (!chatId || !chats.find((item) => item.id == chatId)) {
    //     return <Navigate to="/no_chat" />
    // }

    if(chatId) {
        return (
            <>
            <header>Страница со списком чатов</header>
            <div className="wrapper">
                <div>
                    <ChatList chats={ chats } chatId={ chatId } />
                </div>
                <div>
                    {/* <Message messages={chats[chatId].messages} /> */}
                    <Message chatId={ chatId } />
                </div>
            </div>
        </>
        )
    }

    return (
        <>
            <header>Страница со списком чатов</header>
            <div className="wrapper">
                <div>
                    <ChatList chats={ chats } chatId={ chatId } />
                </div>
            </div>
        </>
    );
}


       