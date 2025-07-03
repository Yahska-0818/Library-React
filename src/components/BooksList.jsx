const BooksList = ({allBooks}) => {
    return (
        <ul>
            {allBooks.map(book=>
                <li key={book.id}>
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