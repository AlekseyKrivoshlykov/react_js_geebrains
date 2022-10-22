import React, { useRef } from 'react'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';

export class Form extends React.Component {
    state = {
        name: 'lala'
    }

    preventDefault = (ev) => {
        ev.preventDefault()
    }

    handleChangeName = (ev) => {
        this.setState({ name: ev.target.value })
    }

    render() {
        return <div className="form_wrapp">
                <form className="form_class" onClick={this.preventDefault}>
                    <TextField margin="normal" id="outlined-basic" label="Введите текст" variant="outlined" onChange={this.handleChangeName}/>
                    <br/>
                    <TextField margin="normal" id="standard-basic" label={this.state.name} variant="standard" />
                    <br/>
                    <div className="form_button">
                        <Button margin="normal" variant="contained">Click please</Button>
                    </div>
                    </form>
            </div>
            
    } 
}