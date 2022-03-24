import React from "react";
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";

export default function OfferSummary(props) {
  return (
    <Card style={{ width: "100%", padding: "1rem", marginBottom: "1rem" }}>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col sm="2">
              <img
                alt="Duffel Airways"
                title="Duffel Airways"
                height="50px"
                width="50px"
                src="https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/ZZ.svg"
              />
            </Col>
            <Col>
              <Row>
                <span>
                  {props.offer.slices[0].origin.name} (
                  {props.offer.slices[0].origin.city_name}){" "}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-label="sync"
                  >
                    <path d="M21.65,7.65l-2.79-2.79C18.54,4.54,18,4.76,18,5.21V7H4C3.45,7,3,7.45,3,8v0c0,0.55,0.45,1,1,1h14v1.79 c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79C21.84,8.16,21.84,7.84,21.65,7.65z"></path>
                    <path d="M2.35,16.35l2.79,2.79C5.46,19.46,6,19.24,6,18.79V17h14c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H6v-1.79 c0-0.45-0.54-0.67-0.85-0.35l-2.79,2.79C2.16,15.84,2.16,16.16,2.35,16.35z"></path>
                  </svg>
                </span>
              </Row>
              {props.offer.slices[0].destination.name} (
              {props.offer.slices[0].destination.city_name})<Row></Row>
            </Col>
          </Row>
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <span>Departing:</span>{" "}
          <span>{props.offer.slices[0].segments[0].departing_at}</span>
        </ListGroupItem>
        <ListGroupItem>
          <span>Arriving:</span>{" "}
          <span>{props.offer.slices[0].segments[0].arriving_at}</span>
        </ListGroupItem>
        <ListGroupItem>
          <span>Carrier:</span>{" "}
          <span>
            {props.offer.slices[0].segments[0].marketing_carrier.name}
          </span>
        </ListGroupItem>
        <ListGroupItem>
          {props.offer.slices[0].segments[0].aircraft.name}
          {" - "}
          {props.offer.slices[0].segments[0].marketing_carrier.iata_code}
          {props.offer.slices[0].segments[0].operating_carrier_flight_number}
          {" - "}
          {props.offer.slices[0].fare_brand_name}
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}
