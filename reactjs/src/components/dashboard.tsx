import { useEffect, useState } from "react"
import { getUsers } from "../apis"

const DashBoard = () => {
    const [users, setUsers] = useState([{ name: '', age: 0 }]);
    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const res = await getUsers();
                console.log(res)
            } catch (e) {
                console.log(e)
            }
        }
        getAllUsers()
    }, [])

    return (
        <div>
            <h1>Dash Board Component</h1>
            <h2>Users</h2>
            <table>
                <th>Name</th>
                <th>Age</th>
                {<tr>
                    <td>{users && users[0]?.name}</td>
                </tr>}
            </table>
        </div>
    )
}

export default DashBoard