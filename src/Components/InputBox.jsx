import React, { useState } from 'react'

export default function InputBox() {
    const [data, setData] = useState("");
    const [status, setStatus] = useState(false);
    let getData = (e) => {
        setData(e.target.value);
    }
    return (
        <>
            <h1>Input Box Components</h1>
            <input type='text' placeholder='Enter Name' onChange={getData} />
            <button >Submit</button>
            <h2>Name : {data}</h2>

        </>
    )
}
