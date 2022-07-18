import axios from "axios";
import {useState} from "react";


function  Async() {
    const [data,setData] =useState(null);


    const onClick = async() =>{
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{params:{
                id: 1 //여러개 [1,2,3,4,5]
                }});
            setData(response.data);
            console.log(data);
        }catch (e){
            console.log(e);
        }

    }
    return(
        <div>
            <div>
              <button onClick={onClick}>데이터 불러오기 </button>
            </div>
            <p>{data && <textarea rows={7}  value={data.map((data) => data.title )}/>}</p>
        </div>
    )
}

export default Async;