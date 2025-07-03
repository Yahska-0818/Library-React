import { useState } from 'react'
import BooksList from './components/BooksList'
import Input from './components/Input'

function App() {
  const [books, setBooks] = useState([])
  const [title, newTitle] = useState('')
  const [author, newAuthor] = useState('')
  const [pages, newPages] = useState('')
  const [read, newRead] = useState(false)

  const bookOnSubmit = () => {
    event.preventDefault()
    const book = {
      title: title,
      author: author,
      pages: pages,
      read: read,
      id: self.crypto.randomUUID()
    }
    setBooks(books.concat(book))
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

  return (
    <div className='m-3'>
      <form onSubmit={bookOnSubmit} className='flex flex-col gap-3'>
        <div className='flex gap-2 text-xl items-center'>
          Title: <Input value={title} onChange={titleOnChange}/>
        </div>
        <div className='flex gap-2 text-xl items-center'>
          Author: <Input value={author} onChange={authorOnChange}/>
        </div>
        <div className='flex gap-2 text-xl items-center'>
          Pages: <Input value={pages} onChange={pagesOnChange}/>
        </div>
        <div className='flex gap-2 text-xl items-center'>
          Read: <Input value={read} onChange={readOnChange}></Input>
        </div>
        <button type="submit" className='border-2 border-black border-solid text-xl p-1'>Submit</button>
      </form>
      <BooksList allBooks={books} />
    </div>
  )
}

export default App
