import React from 'react'
import { Button, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row } from 'react-bootstrap'

export default function MovieModal({showModal, setShowModal, modalData, onSelectActor, onSelectDirector}) {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} style={{maxHeight: "45rem", overflowY: "auto"}}>
        <ModalHeader closeButton>
          <ModalTitle className="w-100 text-center">{modalData.name}</ModalTitle>
        </ModalHeader>

        <ModalBody>
          <Container fluid>
            <Row>
              <Col className="text-center">
                <Row className="mt-3">
                  <h4>Actors</h4>
                  <ul>
                    {modalData.actors.map(actor => <li key={actor.actorId} className="clickable" onClick={() => onSelectActor(actor)}>{actor.actorName}</li>)}
                  </ul>
                </Row>
                <Row className="mt-3">
                  <h4>Director</h4>
                  <p className="clickable" onClick={() => onSelectDirector(modalData.director)}>{modalData.director.directorName}</p>
                </Row>
                <Row className="mt-3">
                  <h4>Genres</h4>
                  <ul>
                    {modalData.genres.map((genre, idx) => <li key={idx}>{genre}</li>)}
                  </ul>
                </Row>
                <Row className="mt-3">
                  <h4>Keywords</h4>
                  <ul>
                    {modalData.keywords.map((keyword, idx) => <li key={idx}>{keyword}</li>)}
                  </ul>
                </Row>
                <Row className="mt-3">
                  <h4>Platforms</h4>
                  <ul>
                    {modalData.platforms.map(platform => <li key={platform.platformId}>{platform.platformName}</li>)}
                  </ul>
                </Row>
              </Col>
              <Col className="col">
                <Row>
                  <img src={modalData.posterUrl} style={{height: "30rem", aspectRatio: "2 / 3"}} onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src="./no_image.jpeg";
                  }}></img>
                </Row>
                <Row className="mt-5 text-center">
                  <h5>Release Year: {modalData.releaseYear}</h5>
                </Row>
                <Row className="mt-2 text-center">
                  <h5>Rating: {modalData.rating}</h5>
                </Row>
              </Col>
            </Row>
            <Row className="mt-4 p-3">
              <p>{modalData.descriptionContent}</p>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
  )
}
