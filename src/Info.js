import React from 'react'


//elvis operator... is the ?.

function Info(props){

  return (
    <div className='movie-data'>
    Movie Component
    {/* <p>Title: {props?.movie?.results[0]?.title}</p>
    <img src={props?.movie?.results[0]?.image_url } alt = ""/> */}
    </div>
    
  )
}

export default Info