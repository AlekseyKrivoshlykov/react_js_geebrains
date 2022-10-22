import { useEffect, useState } from "react";
import { Button, ListItem, ListItemText, ListSubheader } from '@mui/material';
import { List } from '@mui/material';

export function Chat (props) {

    const [state, setState] = useState()
    const [chat, setChat] = useState()

    const array = [
        {
            id: 1,
            name: 'Aleksey',
        },
        {
            id: 2,
            name: 'Maksim',
        },
        {
            id: 3,
            name: 'Veronika',
        },

    ]
    function handleResponse (event) {
        setChat (
            <div>
                {array.map(function(element, index) {
                    return (
                        <ListItemText key = {index} primary={element.id} secondary={element.name}> </ListItemText>
                    )
                })}  
            </div>
        )
    }

    useEffect(() => {
        setState(array)
      }, [])

    return (
      <> 
        <div className="App">
            <div className="wrapper_for_chat">
            <div>Список чатов:
                <List> 
                    <ListItemText primary="Chat 1" secondary=""></ListItemText>
                    <ListItemText primary="Chat 2" secondary=""> </ListItemText>
                    <ListItemText primary="Chat 3" secondary=""> </ListItemText>
                </List>
            </div>

            <div onClick={handleResponse}>Нажмите, чтобы увидеть чаты:
                <div>{chat}</div>
            </div>
            </div>
        </div>
      </>
    
    );
  
  }