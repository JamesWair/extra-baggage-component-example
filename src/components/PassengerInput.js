import React from "react";
import { Form, Card } from "react-bootstrap";

export default function PassengerInput(props) {
  return (
    <Card style={{ width: "100%", padding: "1rem", marginBottom: "1rem" }}>
      <Card.Body>
        <Card.Title>Passenger Details</Card.Title>
        <Form>
          <Form.Group>
            <Form.Label>Passenger 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              readOnly={true}
              value={props.passengers[0].name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Passenger 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              readOnly={true}
              value={props.passengers[1].name}
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
