

export const ChildApp = (props) => {

    const message = 'const'

    return <>
    <hr />
        <div className="ParentMessage">
            <p>Child App: {props.name}</p>
        </div>
    </>
}