import React from 'react'
import './book.css'
import Sell from '../sell/Sell'


const Book = () =>{
    return (
        <div className="book">
            <Image/>
            <Author/>
            <Price/>
            <Sell/>
        </div>
    )   
}

const Image = () => <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtkXIYnI5iJXV3Sz7DOrbYvg30v0w9XohS2g&usqp=CAU" alt="book"/>
const Author = () => <h3>Autorius</h3>
const Price = () => <p>Kaina</p>

export default Book