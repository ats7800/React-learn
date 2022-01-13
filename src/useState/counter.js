import React,{useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const delayedIncrease = ()=>{
        setTimeout(() => {
            setCount((prevState)=>{
                console.log(prevState);
                return prevState+1
            })
        }, 3000);
    }
    return (
      <div className="container">
        <h1>Counter</h1>
        <h1>{count}</h1>
        <button className="pretty-btn" onClick={() => setCount(0)}>
          Reset
        </button>
        <button className="pretty-btn" onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button className="pretty-btn" onClick={delayedIncrease}>
          Delayed Increase
        </button>
      </div>
    );
}

export default Counter
