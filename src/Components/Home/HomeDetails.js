import React from "react";
import { getHomes } from "../../data/homes.js";
import * as ReactDOM from "react-dom";
import "./homedetails.css";

const Homedetails = ({
  balconies,
  parking,
  location,
  numRooms,
  area,
  furniture,
  build,
  available,
  times,
  cost,
  status,
  ownerName,
  ownerPhone,
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="homedetails">
      <h2> Home details</h2>
      <p>
        {location} <br></br>
        {area} <br></br>
        {numRooms}
        <br></br>
        {balconies}
        <br></br>
        {parking}
        <br></br>
        {furniture}
        <br></br>
        {build}
        <br></br>
        {times}
        <br></br>
        {cost}
        <br></br>
        {available}
        <br></br>
        {status}
        <br></br>
        {ownerName}
        <br></br>
        {ownerPhone}
      </p>

      <button onClick={onClose}>Close</button>
    </div>,
    document.body
  );
};
export default Homedetails;
