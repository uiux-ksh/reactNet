import  '../scss/Mapping.scss';
import axios from "axios";
import {useEffect, useState} from "react";

function Mapping() {
    const [Posts,setPosts] = useState([]);
    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
           setPosts(res.data);
       })
    },[])
    return(
        <div>{Posts.map((post,idx) => {
            return(<li key ={idx}><p>{post.name}</p></li>)
        })

        }</div>
    )

}
export default  Mapping;