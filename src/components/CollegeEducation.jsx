import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './CollegeEducation.css';


export default class CollegeEducation extends Component{
    render() {
        return (
            <div>
                <Container>
                <Row>
                <Col sm={12}>
                    <div className="title">
                    <h2>Welcome to <span>College Education</span></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                </Col>
                </Row>
                </Container>

       <div className="callouts-wrapper">
        <Container>
         <Row>
        <Col sm={4}>
        <div className="callouts">
          <div className="callouts-box text-center">
            <div className="icon-box"><i className="fa fa-book"></i></div>
            <div className="box-header">
              <h3>Awesome Courses</h3>
            </div>
            <div className="divider bg-primary"></div>
            <div className="box-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
            </div>
          </div>
        </div>
      </Col>
      <Col sm={4}>
        <div className="callouts">
          <div className="callouts-box text-center">
            <div className="icon-box"><i className="fa fa-users " aria-hidden="true"></i></div>
            <div className="box-header">
              <h3>Qualified Teachers</h3>
            </div>
            <div className="divider bg-primary"></div>
            <div className="box-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
            </div>
          </div>
        </div>
      </Col>
      <Col sm={4}>
        <div className="callouts">
          <div className="callouts-box text-center">
            <div className="icon-box"><i className="fa fa-android" aria-hidden="true"></i></div>
            <div className="box-header">
              <h3>App Development</h3>
            </div>
            <div className="divider bg-primary"></div>
            <div className="box-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
            </div>
          </div>
        </div>
        </Col>
        <Col sm={4}>
        <div className="callouts">
          <div className="callouts-box text-center">
            <div className="icon-box"><i className="fa fa-globe" aria-hidden="true"></i></div>
            <div className="box-header">
              <h3>Online Classes</h3>
            </div>
            <div className="divider bg-primary"></div>
            <div className="box-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
            </div>
          </div>
        </div>
        </Col>
        <Col sm={4}>
        <div className="callouts">
          <div className="callouts-box text-center">
            <div className="icon-box"><i className="fa fa-truck" aria-hidden="true"></i></div>
            <div className="box-header">
              <h3>Transportation</h3>
            </div>
            <div className="divider bg-primary"></div>
            <div className="box-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
            </div>
          </div>
        </div>
        </Col>
        <Col sm={4}>
        <div className="callouts">
          <div className="callouts-box text-center">
            <div className="icon-box"><i className="fa fa-users" aria-hidden="true"></i></div>
            <div className="box-header">
              <h3>Customer Support</h3>
            </div>
            <div className="divider bg-primary"></div>
            <div className="box-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
            </div>
          </div>
        </div>
      </Col>      
       </Row>
       </Container>
      </div>
    </div>
        )
    }
}