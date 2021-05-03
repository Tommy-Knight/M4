import SingleBook from "./SingleBook"

const BookList = (props) => {
	let result = ""

	try {
		result = props.books.map((book) => (
			<SingleBook book={book} key={book.asin} />
		))
	} catch (error) {
		console.log(error)
		return null
	} finally {
		return result
	}
}

export default BookList
