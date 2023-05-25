import React,{useState, useReducer} from "react";

export default function Count() {
    const [number, setNumber] = useState(1)
    function countReducer(oldCount, action) {
        if(action === 'Up'){
            return oldCount + 1
        }else if(action === 'Down'){
            return oldCount - 1
        }else if(action === 'Zero'){
            return 0;
        }
    }

    // const [count, setCount] = useState(0);
    const [count, countDispatch] = useReducer(countReducer, 0)

    function Up() {
        countDispatch('Up')
    }
    function Down() {
        countDispatch('Down')
    }
    function Zero() {
        countDispatch('Zero')
    }
    function changeNumber(event) {
        setNumber(Number(event.target.value))
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{count}</h1>
            <input type="text" value={number} onChange={changeNumber} />
            <input type="button" value='-' onClick={Down} />
            <input type="button" value='0' onClick={Zero} />
            <input type="button" value='+' onClick={Up} />

        </div>
    )
}