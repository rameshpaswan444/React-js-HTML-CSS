function User({data}){
    return(
       <div>
       <br/>
       <hr />
        <h2>name:<span style={{color:"green"}}>{data.name}</span></h2>
        <h2>age: <span style={{color:"blue"}}>{data.age}</span></h2>
        <h2> city: <span style={{color:"purple"}}>{data.city}</span></h2>
      

       </div>
        
    )
}
export default User;