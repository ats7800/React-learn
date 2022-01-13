import React from 'react'

const ErrorExample = () => {
    let title = 'Random Title'
    const handleClick = ()=>{
        title = "New Title"
        console.log(title);
    }
    return (
      <div className="container">
        <h2>{title}</h2>
        <button className="pretty-btn" onClick={handleClick}>
          Button
        </button>
      </div>
    );
}

export default ErrorExample
