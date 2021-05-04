const { Link, Route } = ReactRouterDOM
import { bookService } from "../services/book.service.js";
import { LongTxt } from "../cmps/LongTxt.jsx";
import { Loader } from "../cmps/Loader.jsx";
import { ReviewAdd } from "../cmps/ReviewAdd.jsx";
import { ReviewsList } from '../cmps/ReviewsList.jsx'

export class BookDetails extends React.Component {

    state = {
        book: null
    }

    componentDidMount() {
        const id = this.props.match.params.bookId
        bookService.getBookById(id).then(book => {
            if (!book) return this.props.history.push('/')
            this.setState({ book })
        })
    }

    getReading = (pageCount) => {
        if (pageCount > 500) return '(Long Reading)';
        if (pageCount > 200) return '(Decent Reading)';
        if (pageCount < 100) return '(Light Reading)';
        return '';
    }

    getPriceColor = (price) => {
        if (price > 150) {
            return 'red';
        } else if (price > 20) {
            return 'green';
        }
    }

    getBookAgeDesc = (year) => {
        let currYear = new Date().getFullYear()
        if (currYear - year > 10) {
            return '(Veteran Book)'
        } else if (currYear - year < 1) {
            return '(New)'
        }
    }

    onRemoveReview = (reviewId) => {
        bookService.removeReviewById(this.state.book, reviewId).then(this.loadBook)
    }

    render() {
        const { book } = this.state
        if (!book) return <Loader />
        return (
            <div className="book-details">
                <div className="book-details-view">
                    <img src={book.thumbnail} alt="" />
                    <div className="book-info">
                        <p>Title - {book.title}</p>
                        <p>Subtitle - {book.subtitle}</p>
                        <p>Author - {book.authors.join(',')}</p>
                        <p>Publish date - {book.publishedDate} {this.getBookAgeDesc(book.publishedDate)}</p>
                        <LongTxt description={book.description} />
                        <p>Page count - {book.pageCount} {this.getReading(book.pageCount)}</p>
                        <p>Cathegories - {book.categories.join(',')}</p>
                        <p>Language - {book.language}</p>
                        <p>Price - <span className={this.getPriceColor(book.listPrice.amount)}>{book.listPrice.amount}{bookService.getCurrencyIcon(book.listPrice.currencyCode)}</span></p>
                        {book.listPrice.isOnSale && <p className="on-sale">The book is on sale!</p>}
                    </div>
                </div>
                <ReviewAdd />
                <button onClick={() => this.props.history.push('/book')}>Go back</button>
                <div className="reviews-section">
                    <h2>Reviews </h2>
                </div>

                <ReviewsList reviews={book.reviews} removeReview={this.onRemoveReview} />
            </div>
        )
    }
}
