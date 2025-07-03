import React, { useState } from 'react'
import BooksList from './components/BooksList'
import Header from './components/Header'
import Form from './components/Form'

function App() {
  const [books, setBooks] = useState([])
  const [title, newTitle] = useState('')
  const [author, newAuthor] = useState('')
  const [pages, newPages] = useState('')
  const [read, newRead] = useState('')

  const bookForm = React.createRef()

  const bookOnSubmit = () => {
    event.preventDefault()
    const book = {
      title: title,
      author: author,
      pages: pages,
      read: read === "read"? true : false,
      id: self.crypto.randomUUID()
    }
    setBooks(books.concat(book))
    bookForm.current.style.display = 'none'
    newTitle('')
    newAuthor('')
    newPages('')
    newRead('')
  }

  const titleOnChange = (event) => (
    newTitle(event.target.value)
  )
  const authorOnChange = (event) => (
    newAuthor(event.target.value)
  )
  const pagesOnChange = (event) => (
    newPages(event.target.value)
  )
  const readOnChange = (event) => (
    newRead(event.target.value)
  )

  const addBookButton = () => {
    bookForm.current.style.display = 'flex'
  }

  return (
    <div className='flex flex-col gap-2'>
      <Header addBookButton={addBookButton}/>
      <BooksList allBooks={books} setAllBooks={setBooks} />
      <Form formOnSubmit={bookOnSubmit} bookRef = {bookForm} value1={title} value2={author} value3={pages} value4={read} onChange1={titleOnChange} onChange2={authorOnChange} onChange3={pagesOnChange} onChange4={readOnChange}/>
    </div>
  )
}

export default App
