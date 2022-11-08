import React, { useState } from "react";
import PopUpModal from "./PopUpModal";
import "../App.css";

const PopUp = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <div>
        <h1>Hello</h1>
        <button className="button-default" onClick={handlePopup}>
          Open Popout
        </button>
      </div>
      <div>{showPopup && <PopUpModal onClose={handlePopup} />}</div>
    </div>
  );
};

export default PopUp;
