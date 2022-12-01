import { useEffect, useState } from "react";
import { Button, ListItem, ListItemText, ListSubheader, Switch } from '@mui/material';
import { List } from '@mui/material';
import { Link, Navigate, Route, useParams, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChatList } from "../presentation-components/ChatList";
import { getChatsList } from "../store/Chats/selectors";
import { Message } from "./Message";

export function Chats() {
    const { chatId } = useParams();
    const chats = useSelector(getChatsList);

    if(chatId) {
        return (
            <>
            <header>Страница со списком чатов</header>
                <ChatList chats={ chats } chatId={ chatId } />
                <Message chatId={ chatId } />
            </>
        )
    }

    return (
        <>
            <header>Страница со списком чатов</header>
                <ChatList chats={ chats } chatId={ chatId } />
        </>
    );
}


       