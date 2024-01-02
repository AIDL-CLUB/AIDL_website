import React from "react";
import Card from "react-bootstrap/Card";

const Expt = () => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="image1.jpg" alt="Experiment 1" />
        <Card.Body>
          <Card.Title as="h3">Experiment 1</Card.Title>
          <Card.Text>
            This is a description of Experiment 1. Add more details as needed.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="image2.jpg" alt="Experiment 2" />
        <Card.Body>
          <Card.Title as="h3">Experiment 2</Card.Title>
          <Card.Text>
            This is a description of Experiment 2. Add more details as needed.
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Repeat similar Card components for Experiment 3, 4, and 5 */}
    </div>
  );
};

export default Expt;
