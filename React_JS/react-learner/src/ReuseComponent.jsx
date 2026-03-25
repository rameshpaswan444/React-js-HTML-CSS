import User from "./User";

function ReuseComponent(){
     const obj = [
        {
            id: 1,
            name: "Ramesh",
            age: 20,
            city: "kathmandu"

    },
    {
        id: 2,
        name: "Sita",
        age: 25,
        city: "Butwal"
    },
    {
        id: 3,
        name: "Gita",
        age: 30,
        city: "Pokhara"
    },
    {
        id: 4,
        name: "Hari",
        age: 35,
        city: "Dhangadhi"
    }
]

    return(
        <div>
            <h1>Reuse Component</h1>
            {
                obj.map((user)=>(
                  <div key={user.id}>
                    <User data = {user}/>
                  </div>
                ))
            }
        </div>
    )
}
export default ReuseComponent;