// a form at the bottom of a movie component that allows users to leave reviews. When submitted, the review should be added to the
// movie. All this data can be stored in an array, no networking or database needed for this assignment.
import React from 'react';

export default class Review extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            reviews: [],
            newReview: ''
        };
    }

    handleReviewChange = (event) => {
        this.setState({newReview: event.target.value});
    }
    
    handleSubmitReview = (event) => {
        event.preventDefault();
        const {newReview} = this.state;
        if (newReview.trim() === '') {
            return;
        }
    
        const username = 'User'
        const date = new Date().toLocaleDateString();
        const review = {username, date, content: newReview};
    
        this.setState((prevState) => ({
            reviews: [...prevState.reviews, review],
            newReview: '',
        }));
    };

    render(){
        const{reviews, newReview} = this.state;

        return(
            <div>
                <div className='review-form'>
                    <h2>Write a Review</h2>
                    <form onSubmit={this.handleSubmitReview}>
                        <div className='form-group'>
                            <textarea 
                            className='form-control'
                            rows='3'
                            placeholder='Write here...'
                            value={newReview}
                            onChange={this.handleReviewChange}
                            ></textarea>
                        </div>
                        <button type='submit' className='btn btn-primary'>
                            Submit Review
                        </button>
                    </form>
                </div>
                <div className="reviews">
          <h2>Reviews</h2>
          {reviews.map((review, index) => (
            <div key={index} className="card w-75">
              <div className="card-header bg-success text-white">
                {review.username} {review.date}
              </div>
              <div className="card-body">{review.content}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
