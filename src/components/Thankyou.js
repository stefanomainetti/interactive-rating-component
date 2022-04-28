import React from "react";
import thank from "../assets/images/illustration-thank-you.svg";
import { UserContext } from ".";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Thankyou = () => {
  const { rating, setRating } = React.useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (rating === null) navigate("/");
  });
  return (
    <div className="thank">
      <div className="main_container">
        <div className="image_container">
          <img src={thank} alt="thank"></img>
        </div>
        <div className="selection">
          <p>You selected {rating} out of 5</p>
        </div>
        <h1>Thank you!</h1>
        <div className="message_box">
          <p>We appreciate you taking the time to give a rating.</p>
          <p> If you ever need more support, don't hesitate to get in touch!</p>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
