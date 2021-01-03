import React from 'react'

const Book = ({ img, title, author }) => {
  // const {img, title, author} = props

  const clickHandler = (e) => console.log(e.target)

  const complexExample = (author) => console.log(author)

  return (
    <article className='book' onMouseOver={() => console.log(author)}>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Click me
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        Complex example
      </button>
    </article>
  )
}

export default Book
