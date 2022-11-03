import React from "react";
import * as ReactDOM from "react-dom";
import "./homedetails.css";

const Ownerdetails = ({
  ownerName,
  ownerPhone,
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="ownerdetails">
      <h2> Owner details</h2>
      <p>
        {ownerName}
        <br></br>
        {ownerPhone}
      </p>

      <button onClick={onClose}>Close</button>
    </div>,
    document.body
  );
};
export default Ownerdetails;
