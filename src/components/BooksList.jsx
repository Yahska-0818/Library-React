const BooksList = ({allBooks,setAllBooks}) => {

    const changeRead = (id) => {
        let newBooks = [...allBooks]
        newBooks.forEach(book => {
            if (book.id == id) {
                book.read = !book.read
            }
            setAllBooks(newBooks)
        });
    }

    const removeBook = (id) => {
        let newBooks = [...allBooks]
        setAllBooks(newBooks.filter(book => book.id != id))
    }

    return (
        <ul className="flex flex-wrap gap-2 mx-2 justify-evenly">
            {allBooks.map(book=>
                <li key={book.id} className="bg-cyan-950 text-amber-50 p-5 rounded text-xl min-w-3xs flex flex-col gap-3">
                    <p>Title: {book.title}</p>
                    <p>Author: {book.author}</p>
                    <p>Pages: {book.pages}</p>
                    <p>Read: {book.read? "Yes":"No"}</p>
                    <div className="flex gap-2">
                        <button type="button" onClick={() => changeRead(book.id)} className="text-xl p-2 rounded hover:cursor-pointer hover:-translate-y-1 transition-transform ease-linear duration-200 bg-amber-50 text-cyan-950">Toggle Read</button>
                        <button type="button" onClick={()=>removeBook(book.id)} className="text-xl p-2 rounded hover:cursor-pointer hover:-translate-y-1 transition-transform ease-linear duration-200 bg-amber-50 text-cyan-950">Remove Book</button>
                    </div>
                </li>
            )}
        </ul>
    )
}

export default BooksList