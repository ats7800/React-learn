import React,{useState,useEffect} from 'react'

const CleanupUseEffect = () => {
    const [size,setSize] = useState(window.innerWidth)
    console.log(size);
    const checkSize = ()=>{
        setSize(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize",checkSize);
        return ()=>{
            window.removeEventListener("resize",checkSize);
        }
    })
    return (
        <div className='container'>
            <h1>Size</h1>
            <h3>{size} PX</h3>
        </div>
    )
}

export default CleanupUseEffect
