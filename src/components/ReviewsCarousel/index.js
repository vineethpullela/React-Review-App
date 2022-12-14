import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {review: 0}

  changePrevCount = () => {
    this.setState(prevState => ({review: prevState.review + 1}))
  }

  changeNxtCount = () => {
    this.setState(prevState => ({review: prevState.review - 1}))
  }

  getReview = reviewsList => {
    const {review} = this.state
    const result = reviewsList[review]
    return result
  }

  render() {
    const {reviewsList} = this.props
    const resultReview = this.getReview(reviewsList)
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="review-heading">Reviews</h1>
          <img
            src={resultReview.imgUrl}
            alt={resultReview.username}
            className="review-img"
          />
          <div className="arrow-name-container">
            <button
              className="button"
              type="button"
              testId="leftArrow"
              onClick={this.changePrevCount}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-img"
              />
            </button>

            <p className="profile-name">{resultReview.username}</p>
            <button
              className="button"
              type="button"
              testId="rightArrow"
              onClick={this.changeNxtCount}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
                alt="right arrow"
                className="arrow-img"
              />
            </button>
          </div>
          <p className="review-company-name">{resultReview.companyName}</p>
          <p className="review-text">{resultReview.description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
