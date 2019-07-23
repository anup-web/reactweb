import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ExpertTeam.css';


export default class ExpertTeam extends Component{
    render() {
        return (
            <div>
           <Container>
          <Row>
          <Col sm={12}>
            <div class="title">
            <h2>Expert <span>Team</span></h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
          </Col>
          </Row>
          </Container>

          <Container>
          <Row>
            <Col sm={3}>
              <Card>
            <Card.Img variant="top" src="assets/img/team1.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
            <Col sm={3}>
              <Card>
            <Card.Img variant="top" src="assets/img/team2.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
            <Col sm={3}>
              <Card>
            <Card.Img variant="top" src="assets/img/team3.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col sm={3}>
              <Card>
            <Card.Img variant="top" src="assets/img/team4.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
          </Row>  
          </Container>
            </div>
        )
    }
}