import React, { useState } from "react";
import { Container, Button, Modal, Row } from "react-bootstrap";

import { AdditionalBaggageSelection } from "@duffel/components";
import "@duffel/components/dist/AdditionalBaggageSelection.min.css";

import OfferSummary from "./OfferSummary";
import PassengerInput from "./PassengerInput";

import DATA from "../services/data.service";

const offer = DATA.OFFER.data;
const passengers = DATA.PASSENGERS;

export default function ExtraBagComponentExampleApp() {
  const [showBags, setShowBags] = useState(false);

  function toggleShowBags() {
    setShowBags(!showBags);
  }

  function handleClose() {
    setShowBags(false);
  }

  function onSubmitFnBag(e) {
    console.log(e);
    handleClose();
  }

  return (
    <>
      <Container style={{ paddingTop: "3rem", maxWidth: "640px" }} fluid="sm">
        <Row>
          <OfferSummary offer={offer} />
        </Row>
        <Row>
          <PassengerInput passengers={passengers} />
        </Row>
        <Row>
          <Button onClick={toggleShowBags}>Add Extra Bags</Button>
        </Row>
      </Container>

      <Modal show={showBags} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Extra Bags</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <AdditionalBaggageSelection
              offer={offer}
              passengers={passengers}
              onSubmit={onSubmitFnBag}
            />
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}
