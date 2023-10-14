// a container for all the movie components and their data
import React from 'react';
import Movie from './movies';
import StarRating from './stars';

export default class MovieList extends React.Component {
    render(){
        return(
            <div className='card w-100'>
                <div></div>
               <Movie
                    title="Spirited Away"
                    imageSrc="https://th.bing.com/th/id/OIP.Yrca_CIo_X-2xIANaQqWgAHaLH?w=185&h=278&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    synopsis="During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches 
                    and spirits, a world where humans are changed into beasts."
                />
                <StarRating totalStars={5} ratings={[4, 5, 3, 2]} />,
                <Movie
                    title="Howl's Moving Castle"
                    imageSrc="https://i.pinimg.com/originals/e7/5b/b4/e75bb43510423b1d2119c992f934c692.png"
                    synopsis="When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell 
                    lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle."
                />
                <StarRating totalStars={5} ratings={[4, 5, 3, 2]} />,
                <Movie
                    title="Ponyo"
                    imageSrc="https://th.bing.com/th/id/R.c166afbf90580d125a20d457c9e6a3c4?rik=lCBOZhA0cVtF4A&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Q16R2GjoZbU%2fT9EkcBCdAMI%2fAAAAAAAABjs%2fMSKUZq3nOrQ%2fs1600%2fponyo_us_poster.jpg&ehk=zO4GiwweIPwPhQh2UcBvGWbJ31kosAcNh2DBUNe1Nrc%3d&risl=&pid=ImgRaw&r=0"
                    synopsis="A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him.."
                />
                <StarRating totalStars={5} ratings={[4, 5, 3, 2]} />,
            </div>
        )
    }
}