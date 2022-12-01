import React, { useEffect, useRef, useState } from 'react'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormRobotUI from '../presentation-components/FormRobotUI'
import { addMessageWithThunk, toggleProfile } from '../store/FormRobot/actions'
import { getRobotMessage, getRobotName } from '../store/FormRobot/selectors'


export function FormRobot () {
    const [state, setState] = useState()
    const value = []

    const dispatch = useDispatch();
    const author = useSelector(getRobotName);
    const text = useSelector(getRobotMessage);

    const onAddMessage = useCallback(() => {
        dispatch(addMessageWithThunk());
    }, [dispatch]);
          
    return <FormRobotUI author={author} text={text} onAddMessage={onAddMessage}/>
}
