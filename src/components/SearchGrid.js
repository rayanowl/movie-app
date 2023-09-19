import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Dropdown, Form, Row } from 'react-bootstrap'

export default function SearchGrid({handleSearch, selectedData, setSelectedData}) {
    const [genres, setGenres] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [releaseYears, setReleaseYears] = useState([]);

    const fetchGenres = () => {
        const genresUrl = "/movie/get-genre-list";
        axios.get(genresUrl, {
          headers: {
            'Accept-Type': 'application/json'
          },
        }).then(res => res.data)
          .then(data => setGenres(data.data.genres));
    };

    const fetchPlatforms = () => {
      const platformsUrl = "/movie/get-platform-list";
      axios.get(platformsUrl, {
        headers: {
          'Accept-Type': 'application/json'
        },
      }).then(res => res.data)
        .then(data => setPlatforms(data.data.platforms));
    };

    const fetchReleaseYears = () => {
      const releaseYearsUrl = "/movie/get-release-year-list";
      axios.get(releaseYearsUrl, {
        headers: {
          'Accept-Type': 'application/json'
        },
      }).then(res => res.data)
        .then(data => setReleaseYears(data.data.releaseYears));
    };

    const updateGenre = val => setSelectedData({...selectedData, genreID: val});
    const updatePlatformChange = val => setSelectedData({...selectedData, platformId: val});
    const updateReleaseYearChange = val => setSelectedData({...selectedData, releaseYear: val});

    useEffect(() => {
        fetchGenres();
        fetchPlatforms();
        fetchReleaseYears();
    }, []);

  return (
    <Container className="p-3 text-center" style={{width: "60%", border: "solid 2px black"}}>
      <h4>Search</h4>
      <Form onSubmit={handleSearch}>
        <Row>
          <Col className="col-6">
            <Form.Select onChange={e => updateGenre(e.target.value)}>
                <option hidden value>Select Genre</option>
                {genres.map(genre => <option key={genre.genreId} value={genre.genreId}>{genre.genreName}</option>)}
            </Form.Select>
            <Form.Select onChange={e => updatePlatformChange(e.target.value)}>
                <option hidden value>Select Platform</option>
                {platforms.map(platform => <option key={platform.platformId} value={platform.platformId}>{platform.platformName}</option>)}
            </Form.Select>
          </Col>
          <Col className="col-6">
            <Row>
              <Form.Select onChange={e => updateReleaseYearChange(e.target.value)}>
                  <option hidden value>Select Release Year</option>
                  {releaseYears.map((releaseYear, idx) => <option key={idx}>{releaseYear.year}</option>)}
              </Form.Select>
            </Row>
            <Row>
              <Col className="col-6">
                <Button className="mt-2 w-100 btn-secondary" type="reset" onClick={() => setSelectedData({})}>Reset</Button>
              </Col>
              <Col className="col-6">
                <Button className="mt-2 w-100" type="button" onClick={handleSearch}>Search</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}
