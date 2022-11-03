import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getHomes, getHomesByLocation,getHomesbyId } from "../../data/homes.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsPinMapFill } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import NumericInput from "react-numeric-input";
import "./Home.css";
import Homedetails from "./HomeDetails.js";
import Search from "./Search.js";
import { FormControlLabel, Checkbox } from "@mui/material";
import Ownerdetails from "./ShowOwnerInfo.js";

const Home = () => {
  let filteredHomes;
  var homeee=[];
  let homesList = getHomes();
  const [selectedItem, setSelectedItem] = useState("Feature");
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [furn, setFurn] = useState(false);
  const [parking, setParking] = useState(false);
  const [num, setNum] = useState("");
  const printVal = () => {
    console.log(location);
  };
  const openPort = (id) => {
    setOpen(true);
    homeee= getHomesbyId(id)
    console.log(homeee);
    setTimeout(function() {
      //your code to be executed after 1 second
    }, 1000);
  };
  return (
    <>
      <div className="search">
        <div className="srchinput">
          <DropdownButton id="dropdown-basic-button" title={selectedItem}>
            <Dropdown.Item onClick={() => setSelectedItem("Balconies")}>
              Balconies
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedItem("Rooms")}>
              Rooms
            </Dropdown.Item>
          </DropdownButton>
          <NumericInput
            id="numsrch"
            min={0}
            max={10}
            value={0}
            onInput={(e) => setNum(e.target.value)}
          />
          <input
            type="text"
            id="srchin"
            onInput={(e) => setLocation(e.target.value)}
            placeholder="Enter Location"
          />
          {/* <button id="srchbtn">Search</button> */}
          <Link
            to="/search"
            className="btn btn-primary"
            onClick={() => {
              filteredHomes = getHomesByLocation(location);
              printVal();
              <Search fltr={filteredHomes} />;
            }}
          >
            Search
          </Link>
        </div>
        <div className="checkboxes">
          <FormControlLabel
            control={<Checkbox color="default" onClick={() => setFurn(true)} />}
            label="With Furniture"
          />
          <FormControlLabel
            control={
              <Checkbox color="default" onClick={() => setParking(true)} />
            }
            label="With Parking"
          />
        </div>
      </div>
      <div className="cards-list">
        {homesList.map((homes) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img
              id="img"
              src={process.env.PUBLIC_URL + `photos/${homes.photos}`}
            />
            <Card.Body>
              <h5>
                <BsPinMapFill></BsPinMapFill> {homes.location}
              </h5>
              {/* <Card.Title><BsPinMapFill></BsPinMapFill>  {homes.location}</Card.Title> */}
              <Card.Text>
                Number of rooms: {homes.numberOfRooms}
                <br></br>
              </Card.Text>
              <div className="buttonss">
                <Button
                  id="btn"
                  variant="primary"
                  onClick={() => openPort(homes.id)}
                >
                  See Details{" "}
                </Button>
                <Homedetails
                  balconies={`Balconies:${homeee.balconies}`}
                  parking={`Parking: ${homeee.parking}`}
                  location={`Location: ${homeee.location}`}
                  numRooms={`Number Of Rooms: ${homeee.numberOfRooms}`}
                  area={`Surface area: ${homeee.surfaceArea}`}
                  furniture={`With Furniture: ${homeee.furniture}`}
                  build={`Newely Build: ${homeee.NewlyBuild}`}
                  available={`Available for rent: ${homeee.available}`}
                  times={`Times rented before: ${homeee.timesRentedBefore}`}
                  cost={`Price: ${homeee.cost}`}
                  status={`Status: ${homeee.status}`}
                  isOpen={open}
                  onClose={() => setOpen(false)}
                />
                <Button
                  id="btn"
                  variant="primary"
                  onClick={() => setOpen(true)}
                >
                  Contact Owner{" "}
                </Button>
                <Ownerdetails
                  ownerName={`Owner Name: ${homes.ownerName} `}
                  ownerPhone={`Owner Phone Number: ${homes.ownerDetails}`}
                  isOpen={open}
                  onClose={() => setOpen(false)}
                />
              </div>
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
        <Card className="tcard">
          <Card.Img src={process.env.PUBLIC_URL + "photos/price.jpg"} />
          <Card.Body>
            <Card.Text>Finance made easy</Card.Text>
          </Card.Body>
        </Card>
        <Card className="tcard">
          <Card.Img src={process.env.PUBLIC_URL + "photos/homeHeart.jpg"} />
          <Card.Body>
            <Card.Text>Faster and easier</Card.Text>
          </Card.Body>
        </Card>
        <Card className="tcard">
          <Card.Img src={process.env.PUBLIC_URL + "photos/time.jpg"} />
          <Card.Body>
            <Card.Text>Save your time</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Home;
