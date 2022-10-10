import React from "react";
// import {useNavigate} from 'react-router-dom';
import {getHomes} from "../../data/homes.js"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {BsPinMapFill} from "react-icons/bs";
import "./Home.css";

const home =() => {
    // const navigate = useNavigate();
    let homesList = getHomes();
    // const navigateToHomeDetails = () => {
    //     navigate('/homedetails');
    //   };
    return(
        <>
        <div className="search">
        <input type="text" id="srchin" placeholder="Enter a search word" />
        <input type="text" id="srchin"  placeholder="Enter Location" />
        <button id="srchbtn">Search</button>
          
        </div>
        <div className="cards-list">
         {homesList.map((homes) => (
            
            <Card style={{ width: '18rem' }}>
            <Card.Img id="img" src={process.env.PUBLIC_URL+`photos/${homes.photos}`} />
            <Card.Body>
                <h5><BsPinMapFill></BsPinMapFill>  {homes.location}</h5>
              {/* <Card.Title><BsPinMapFill></BsPinMapFill>  {homes.location}</Card.Title> */}
              <Card.Text>
              Parking: {homes.parking}<br></br>
              Number of rooms: {homes.numberOfRooms}<br></br>
              Owner Name: {homes.ownerName} <br></br>
              Owner phone: {homes.ownerDetails}
              </Card.Text>
              <Button variant="primary">See Full Details</Button>
              {/* <Button variant="primary" onClick={navigateToHomeDetails}>See Full Details</Button> */}
            </Card.Body>
          </Card>
          
        ))}
        </div>
        <div className="why-text">
            <h1>Why Choose us?</h1>
            <h4>We provide full services at every step.</h4>

        </div>
        <div className="textcard">
        <Card  className="tcard">
            <Card.Img src={process.env.PUBLIC_URL+"photos/price.jpg"} />
            <Card.Body>
              <Card.Text>
                Finance made easy
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="tcard">
            <Card.Img src={process.env.PUBLIC_URL+"photos/homeHeart.jpg"} />
            <Card.Body>
              <Card.Text>
                Faster and easier
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="tcard">
            <Card.Img src={process.env.PUBLIC_URL+"photos/time.jpg"} />
            <Card.Body>
              <Card.Text>
                Save your time
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
</>
    )
};
export default home;
