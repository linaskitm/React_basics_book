import React from 'react'
import BookList from '../bookList/BookList'
import Contact from '../contact/Contact'


const Main = () => {
    return (
        <div>
            <BookList/>
            <Contact name="Linas" email="lpelenis@yahoo.com" initialAle={29}/>
        </div>
    )
}

export default Main