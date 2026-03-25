const UserInput = (props) => {
    return (
        <div>
            <h1>User Input</h1>
             <input type="text" ref={props.ref}/>
        
        </div>
    )
}
export default UserInput;