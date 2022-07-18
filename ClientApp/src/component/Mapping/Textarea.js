import axios from "axios";
import {useState} from "react";
function Textarea() {
    const[data,setData] = useState(null);
    const params = { id:[1, 2] };

    const Onclick = async() => {
         try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{params});
            setData(response.data);
            console.log(data);
         }catch (err){
             console.log(err)
         }
    }


    return(
        <div>
        <div >
            <button onClick={Onclick}>데이터 불러오기 </button>
        </div>
            {data && <textarea row={7} value={data.map((data) => data.title )  } readOnly={true} />}
        </div>

    )
}

export default Textarea;