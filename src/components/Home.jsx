import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import CollegeEducation from './CollegeEducation';
import ExpertTeam from './ExpertTeam';

const list = [
    {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
    },
    ];

export default class Home extends Component {
    
    

    render() {
        return (
            <div>
            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/img/banner.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/img/banner.jpg"
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/img/banner.jpg"
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

         <CollegeEducation />
         <ExpertTeam />


          
           
          <div className="App">
            {list.map(function(item) {
            return (
                <div>
                    <ul>
                        <li>Title : {item.title}</li>
                        <li>Url : {item.url}</li>
                        <li>Author : {item.author}</li>
                        <li>Comments : {item.num_comments}</li>
                        <li>Points : {item.points}</li>
                        <li>ObjectID : {item.objectID}</li>
                    </ul>
                </div>
            );
            })}
          </div>
           
     


          </div>
        )
    }

    
}

