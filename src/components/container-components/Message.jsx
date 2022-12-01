import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MessageTextBlock from '../presentation-components/MessageTextBlock';
import { getMessage, getMessageById } from '../store/Message/selectors';

export function Message ({ chatId }) {
  const getSelectedMessage = useMemo(() => getMessageById(chatId), [chatId]);
  const message = useSelector(getSelectedMessage);

  return <MessageTextBlock message={message} />
  
}
