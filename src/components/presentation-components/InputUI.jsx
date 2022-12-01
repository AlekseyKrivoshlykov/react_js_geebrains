export default function InputUI(props) {

    return (
        <>
            <div>Visible: </div>
            <input type="checkbox" checked={props.visible} readOnly /> 
        </>
        
    );
}