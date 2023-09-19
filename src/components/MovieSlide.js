import React from 'react'
import MovieCard from './MovieCard'
import { Stack } from 'react-bootstrap'

export default function MovieSlide({movieList, setUpModal}) {
  return (
    <Stack direction="horizontal" gap={5} className="justify-content-center">
        {movieList.map(movie => 
            <MovieCard key={movie.movieId} movie={movie} setUpModal={setUpModal} className="m-5"/>
        )}
    </Stack>
  )
}
