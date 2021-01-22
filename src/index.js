import React from 'react';
import ReactDOM from 'react-dom';

let books = [
    {
     id: 1,
     img: 'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg',
     title: 'A Promised Land',
     author: 'Barack Obama'
    },

    {
     id: 2,
     img: 'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg',
     title: 'A Promised Land',
     author: 'Barack Obama'
    }
];
function BookList() {
    return (
        <section>
            {books.map( (book) => {
                return <Book key = {book.id} {...book}/>;
            })}
        </section>
    );
}

const Book = ({ img, title, author, children }) => {
    return (
        <article>
            <img src={img} alt=""/>
            <h3>{title}</h3>
            <h4>{author}</h4>
            {children}
        </article>
    );
};

ReactDOM.render(<BookList />,document.getElementById('root'));