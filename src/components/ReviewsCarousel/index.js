import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {review: 0}

  changePrevCount = () => {
    const {review} = this.state
    if (review !== 0) {
      this.setState(prevState => ({review: prevState.review - 1}))
    } else {
      this.setState({review: 0})
    }
  }

  changeNxtCount = () => {
    const {review} = this.state
    if (review !== 3) {
      this.setState(prevState => ({review: prevState.review + 1}))
    } else {
      this.setState({review: 3})
    }
  }

  render() {
    const {review} = this.state
    const {reviewsList} = this.props
    console.log(review)
    const {imgUrl, username, companyName, description} = reviewsList[review]

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="review-heading">Reviews</h1>
          <img src={imgUrl} alt={username} className="review-img" />
          <div className="arrow-name-container">
            <button
              className="button"
              type="button"
              testid="leftArrow"
              onClick={this.changePrevCount}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-img"
              />
            </button>

            <p className="profile-name">{username}</p>
            <button
              type="button"
              className="button"
              testid="rightArrow"
              onClick={this.changeNxtCount}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
                alt="right arrow"
                className="arrow-img"
              />
            </button>
          </div>
          <p className="review-company-name">{companyName}</p>
          <p className="review-text">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
