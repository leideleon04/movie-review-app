// a component that represents movie data (i.e. image, synopsis, rating, etc..)

import React from 'react';
import Review from './reviewForm';

export default class Movie extends React.Component{
    render() {
        const { title, imageSrc, synopsis } = this.props;
    
        return (
          <div className="card w-75" style={{ alignSelf: 'center'}}>
            <div className="card-header bg-success text-white">
              <h4>{title}</h4>
            </div>
            <div className="card-body">
              <img 
              src={imageSrc} 
              alt={title} 
              className="img-fluid" 
            />
              <p>{synopsis}</p>
            </div>
            <div className="card-footer">
              <Review /> {Review}
            </div>
          </div>
        );
    }
}