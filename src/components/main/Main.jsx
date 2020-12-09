import React, { Component } from 'react'
import BookList from '../bookList/BookList'
import Contact from '../contact/Contact'
import Article from '../article/Article'
import articles from '../../data/articles'
import VideoState from '../videoState/VideoState'
import VideoEffect from '../vidoeEffect/VideoEffect'

export default class Main extends Component {
   
    render() {
        const articlesList = articles.map(one =>

            <Article data=
            {{key: one.id,
            title: one.title,
            description: one.description}}/>)

        return (
            <div>
                <BookList/>
                <Contact name="Linas" email="linas@some.som" initialAge={2}/>
                <VideoState/>
                <VideoEffect/>
            <main>
                <article> 
                    {articlesList}
                </article>
            </main>
            </div>
        )
    }
}
