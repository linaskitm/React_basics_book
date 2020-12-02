import React from 'react'
import Book from '../book/Book'
import './bookList.css'

const BookList = () =>{
    return (
        <div className="bookList">
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </div>
    )   
}


export default BookList