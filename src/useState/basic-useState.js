import React,{useState} from 'react'

const BasicUseState = () => {

    // const text = useState('Random Title')[0]
    // const setText = useState('Random Title')[1] 

    // Rather use Array Destructuring 
    const [text,setText] = useState('Random Title')
    const handleClick =()=>{
        if(text==='Random Title'){
            setText('New Title')
        }else{
            setText('Random Title')
        }
    }
    return (
      <React.Fragment>
        <div className="container">
          <h2>{text}</h2>
          <button className="pretty-btn" onClick={handleClick}>
            Change Title
          </button>
        </div>
      </React.Fragment>
    );
}

export default BasicUseState
