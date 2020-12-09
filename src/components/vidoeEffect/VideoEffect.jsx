import React, {useState, useEffect} from 'react'

const VideoEffect = (props) => {
    const [resourceType, setResourceType] = useState('')
    const [items, setItems] = useState([])

 useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
    // return () => setResourceType('')
 }, [resourceType])
 console.log(items)
    return (
        <div>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
                <button onClick={() => setResourceType('users')}>Users</button>
            </div>
                <h3>{resourceType}</h3>
                   {items.map((item, index )=> {
                       console.log(item)
                       if(item.id< 5)
                       return <div key={index}>
                           <p>Name: {item.name} {item.title}</p>
                       </div>
                       
                   })}
        </div>
    )
}

export default VideoEffect
