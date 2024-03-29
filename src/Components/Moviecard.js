import React from "react";
import { Card } from "react-bootstrap";

function Moviecard({ movie }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl}></Card.Img>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Moviecard;
