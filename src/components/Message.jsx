import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMessage, getMessageById } from './store/Message/selectors';

export function Message ({ chatId }) {
  // const message = useSelector((store) => store.chats[chatId].messages);
  const getSelectedMessage = useMemo(() => getMessageById(chatId), [chatId]);
  const message = useSelector(getSelectedMessage);
  console.log('message', message);

  
  return message.map((message, index) => 
    <div key={index}>
      <p>Автор: {message.author}</p>
      <p>Сообщение: {message.text}</p>
    </div>
  );
  
}
