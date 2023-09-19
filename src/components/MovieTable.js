import {useState, useEffect} from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Col, Row, Container, Stack, Button, Carousel, CarouselItem, ModalDialog, ModalHeader, ModalBody, ModalFooter, ModalTitle, Modal, Form, Spinner } from 'react-bootstrap';
import MovieSlide from './MovieSlide';
import MovieModal from './MovieModal';
import SearchGrid from './SearchGrid';

export default function MovieTable() {
  const [movies, setMovies] = useState([]);
  const [slicedMovies, setSlicedMovies] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [selectedData, setSelectedData] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedActor, setSelectedActor] = useState(null);
  const [selectedDirector, setSelectedDirector] = useState(null);
  const cardDisplayCount = 3;
  
  const fetchMovies = params => {
    setLoading(true);

    const movies_url = "/movie/get-movie-list";
    axios.post(movies_url, params, {
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.data)
      .then(data => data.data)
      .then(data => {
        setMovies(data.movies);
        setPageCount(data.pageCount);

        const sliced = [];
        for (let i = 0; i < data.movies.length; i += cardDisplayCount) {
          sliced.push(data.movies.slice(i, i + cardDisplayCount));
        }
        setSlicedMovies(sliced);
        setLoading(false);
      });
  };

  const handleSearch = () => {
    if (pageNumber === 1) {
      const params = {...selectedData, pageNumber};
      if (selectedActor) params.actorId = selectedActor.actorId;
      if (selectedDirector) params.directorId = selectedDirector.directorId;
      fetchMovies(params);
    } else {
      setPageNumber(1);
    }
  }

  const updatePageNumber = val => {
    setPageNumber(parseInt(val));
  }

  const onSelectActor = actor => {
    setShowModal(false);
    setSelectedActor(actor);
    setSelectedDirector(null);
  }

  const onSelectDirector = director => {
    setShowModal(false);
    setSelectedDirector(director);
    setSelectedActor(null);
  }

  const setUpModal = movie => {
    setModalData(movie);
    setShowModal(true);
  }

  useEffect(() => {
    const params = {...selectedData, pageNumber};
    if (selectedActor) params.actorId = selectedActor.actorId;
    if (selectedDirector) params.directorId = selectedDirector.directorId;
    pageNumber && fetchMovies(params);
  }, [pageNumber, selectedActor, selectedDirector]);
  
  return (
    <>
    {loading ?
      <Container style={{width: "100vw", height: "100vh", display: "grid", placeItems: "center"}}>
        <Spinner animation="border" role="status">
          <span className="sr-only"></span>
        </Spinner>
      </Container>
      :
      <Carousel variant="dark" interval={null} controls>
        {slicedMovies.map((movieList, idx) => 
          <CarouselItem key={idx}>
            <MovieSlide movieList={movieList} setUpModal={setUpModal}/>
          </CarouselItem>
        )}
      </Carousel>
    }
      <Row className="m-auto mb-5 w-25">
        <Col>
          <Form.Label style={{marginTop:"25px", color: "red", fontFamily: "monospace"}}>Page Number:</Form.Label>
        </Col>
        <Col>
          <Form.Select className="text-center" style={{marginTop:"20px"}} onChange={e => updatePageNumber(e.target.value)}>
            {[...Array(pageCount).keys()].map(val => <option key={val+1} value={val+1} selected={val + 1 === pageNumber}>{val+1}</option>)}
          </Form.Select>
        </Col>
      </Row>
      {selectedActor &&
        <Row className="m-auto mb-5 w-25">
          <Col>
            <h6>{`Selected Actor: ${selectedActor.actorName}`}</h6>
          </Col>
          <Col>
            <Button className="btn-danger" onClick={() => onSelectActor(null)}>Remove</Button>
          </Col>
        </Row>
      }
      {selectedDirector &&
        <Row className="m-auto mb-5 w-25">
          <Col>
            <h6>{`Selected Director: ${selectedDirector.directorName}`}</h6>
          </Col>
          <Col>
            <Button className="btn-danger" onClick={() => onSelectDirector(null)}>Remove</Button>
          </Col>
        </Row>
      }
      <SearchGrid handleSearch={handleSearch} selectedData={selectedData} setSelectedData={setSelectedData}/>
      {Object.keys(modalData).length !== 0 &&
        <MovieModal showModal={showModal} setShowModal={setShowModal} modalData={modalData} onSelectActor={onSelectActor} onSelectDirector={onSelectDirector}/>
      }
    </>
  )
}
