import React from 'react';
import PropTypes from 'prop-types';

function Movie(props){
  return (
    <div>
      <h2> I like {props.name}</h2>
      <img src = {props.image} alt={props.name}/>
      <h4> {props.rating}/5.0</h4>
    </div>
  )
}

Movie.propTypes = {
  name : PropTypes.string.isRequired,
  image : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

const movie = [
  {
    id : 1,
    name : "Tomorrow",
    rating : 4,
    image : "https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg"
  },
  {
    id : 2,
    name : "Lost Stars",
    rating : 4,
    image : "https://lh3.googleusercontent.com/proxy/40fYmjZUmcs4rDi7Cu8JVHFbw5Op2Fz6oWxZmk0BkoMBHN_kFNaLWyX4_SnUo5zqm-pYwLmzxScF1jI3vryhKEb1TCdcAWpWdcdSSlGEokiFiwlwssM4A2lXh7dFlaViBke9CjNSuDcQR96UhtyW3iBkErP57lQIkvku"
  } 
]

function print_movie(m){
  return(
    <Movie key={m.id} name={m.name} image={m.image} rating={m.rating}/>
  );
}

function App() {
  return (
    <div>
      {movie.map(m => <Movie key={m.id} name={m.name} image={m.image} rating={m.rating}/>)}
      {movie.map(print_movie)} 
    </div>   
  );
}

export default App;
