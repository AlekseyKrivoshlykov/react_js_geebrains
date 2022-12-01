import { Button, TextField } from '@mui/material'

export default function FormRobotUI (props) {
    return (
        <>
            <div className="form_wrapp">
                <form className="form_class">
                    <input ref={function(input) {
                        if(input != null) {
                            input.focus();
                        }
                    }}></input>
                    <br/>
                    <div className="form_button">
                        <Button margin="normal" variant="contained" onClick={props.onAddMessage}>Click please</Button>
                    </div>
                    <div>{props.author}</div>
                    <div>{props.text}</div>
                </form>
            </div>
        </>
    );
}
