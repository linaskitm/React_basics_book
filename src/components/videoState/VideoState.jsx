import React, {useState} from 'react'

const VideoState = () => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }
      const decrementCount = () => {
        setCount(prevCount => prevCount - 1)
    }
    return (
        <div className="mb-5">
            <p>Using "useState"</p>
            <button className="btn btn-primary" onClick={incrementCount}>+</button>
                <span> {count} </span>
            <button  className="btn btn-danger" onClick={decrementCount}>-</button>
            
        </div>
    )
}

export default VideoState
