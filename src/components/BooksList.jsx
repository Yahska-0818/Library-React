const BooksList = ({allBooks}) => {
    return (
        <ul className="flex flex-wrap gap-2 mx-2 justify-evenly">
            {allBooks.map(book=>
                <li key={book.id} className="bg-cyan-950 text-amber-50 p-5 rounded text-xl min-w-3xs">
                    <p>Title: {book.title}</p>
                    <p>Author: {book.author}</p>
                    <p>Pages: {book.pages}</p>
                    <p>Read: {book.read? "Yes":"No"}</p>
                </li>
            )}
        </ul>
    )
}

export default BooksList