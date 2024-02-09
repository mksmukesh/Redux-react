import React,{useState} from 'react'

function MyFunction(){

    const[count,setCount]=useState(0)

    const increament =()=>{
        setCount(count+1);
    };
    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={increament}>increament

            </button>
        </div>
    );
}
export default MyFunction;