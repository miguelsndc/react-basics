import React from 'react'
import Book from './Book'

const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/81H2LXqV34L._AC_UY218_.jpg',
    title:
      'Arrume a sua cama: Pequenas coisas que podem mudar a sua vida... E talvez o mundo',
    author: 'William H. McRaven e Eliana Rocha',
  },

  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/51zKioWtcdL._AC_UY218_.jpg',
    title: 'Gold: Greatest Hits [Disco de Vinil]',
    author: 'ABBA',
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/71b6vtbzCDL._AC_UY218_.jpg',
    title: 'As cartas de Bezos - 14 princípios para crescer como a Amazon',
    author: 'Steve Anderson, Karen Anderson, e outros.',
  },
]

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}

export default BookList
