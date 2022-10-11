

export const Message = (props) => {

    const message = 'variable in function'

    const handleClick = () => {
        console.log('click')
    }

    return <>
        <div className="Message">
            <p>Message: {props.name}</p>
            <p>Variable: {message}</p>
            <button type="button" onClick={handleClick}>Click</button>
        </div>
    </>

}