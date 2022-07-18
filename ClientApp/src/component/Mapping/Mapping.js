import axios from 'axios';
import {useEffect, useState} from "react";
import  '../../scss/Mapping.scss'
function  Mapping() {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{
            setUsers(res.data);
        })

    },[])

    return(
        <div>
            {users.map((user,idx) => {
                return (
                    <li key ={user.id}>
                        <p>{user.name}</p>
                    </li>
                )
            })
            }
        </div>
    )
}
export  default  Mapping;