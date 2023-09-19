import React from 'react';
import Card from 'react-bootstrap/Card';

export default function MovieCard({movie, className, setUpModal}) {
  const handleClick = () => setUpModal(movie);

  return (
    <Card className={`${className} movieCard`} style={{ width: "18rem", height: "40rem" }} onClick={handleClick}>
      <Card.Img variant="top" src={movie.posterUrl} height={"60%"} onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src="./no_image.jpeg";
        }}></Card.Img>
      <Card.Body className="overflow-auto">
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>{movie.descriptionContent}</Card.Text>
      </Card.Body>
    </Card>
  )
}
