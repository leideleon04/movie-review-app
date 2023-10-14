// a one to five-star rating component that allows users to rate something 
// (movies in this case , but remember that components are resuable, so you could use it elsewhere)
import React from 'react';

export default class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: props.ratings || [],
    };
  }

  handleStarClick = (rating) => {
    const { ratings } = this.state;
    this.setState({ ratings: [...ratings, rating] });
  };

  calculateAverageRating = () => {
    const { ratings } = this.state;
    if (ratings.length === 0) {
      return 0;
    }
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return (sum / ratings.length).toFixed(1);
  };

  render() {
    const { ratings } = this.state;
    const { totalStars } = this.props;

    return (
      <div>
        {[...Array(totalStars)].map((_, index) => (
          <span
            key={index}
            className={`star ${index < this.calculateAverageRating() ? 'filled' : ''}`}
            onClick={() => this.handleStarClick(index + 1)}
          >
            &#9733;
          </span>
        ))}
        <p>Average Rating: {this.calculateAverageRating()} out of {totalStars}</p>
        <p>Total Votes: {ratings.length}</p>
      </div>
    );
  }
}
