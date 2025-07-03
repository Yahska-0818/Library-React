import React, { useState } from 'react'
import BooksList from './components/BooksList'
import Input from './components/Input'

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
      <div className='flex justify-between bg-cyan-950 py-5 px-50 text-amber-50 items-center'>
        <p className='text-2xl'>Your Library</p>
        <button type="button" onClick={addBookButton} className='text-xl p-2 rounded hover:cursor-pointer hover:-translate-y-1 transition-transform ease-linear duration-200 bg-amber-50 text-cyan-950'>Add Book</button>
      </div>
      <BooksList allBooks={books} setAllBooks={setBooks} />
      <div className='fixed z-10 translate-y-80 translate-x-190'>
        <form onSubmit={bookOnSubmit} className='flex-col gap-8 hidden bg-cyan-950 text-amber-50 p-15 rounded-xl' ref={bookForm}>
          <div className='flex gap-8 text-2xl items-center'>
            <p>Title:</p> <Input value={title} onChange={titleOnChange}/>
          </div>
          <div className='flex gap-2 text-2xl items-center'>
            <p>Author:</p> <Input value={author} onChange={authorOnChange}/>
          </div>
          <div className='flex gap-5 text-2xl items-center'>
            <p>Pages:</p> <Input value={pages} onChange={pagesOnChange}/>
          </div>
          <div className='flex gap-7 text-2xl items-center'>
            <label htmlFor="read">Read</label>
            <input type="radio" id="read" name="readStatus" value="read" checked={read === "read"} onChange={readOnChange} required className='w-5 h-5'/>
            <label htmlFor="notRead">Unread</label>
            <input type="radio" id="unRead" name="readStatus" value="unRead" checked={read === "unRead"} onChange={readOnChange} required className='w-5 h-5'/>
          </div>

          <button type="submit" className='bg-amber-50 text-cyan-950 text-xl p-2 rounded hover:cursor-pointer hover:-translate-y-1 transition-transform ease-linear duration-200'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App
