function Loop(){

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
            <table border= "1">
                <thead>
                    <tr>
                       <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>City</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        obj.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.city}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <h1> Dummy Data</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>City</td>
                    </tr>
                </thead>
                <tbody>
                     <tr> 
                        <td>1</td>
                        <td>Ramesh</td>
                        <td>20</td>
                        <td>Kathmandu</td>
                    </tr>
                </tbody>


            </table>
        </div>
    )
}
export default Loop; 