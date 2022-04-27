import React from "react";
import star from "../assets/images/icon-star.svg";
import { UserContext } from ".";
import { useNavigate } from "react-router-dom";

const Rating = () => {
  const { rating, setRating } = React.useContext(UserContext);
  const handleChange = (e) => {
    setRating(e.target.value);
  };
  const navigate = useNavigate();
  const redirect = (e) => {
    e.preventDefault();
    if (!rating) {
      alert("Please provide a feedback");
      return;
    }
    navigate("/thankyou");
  };
  return (
    <div className="rating">
      <div className="main_container">
        <div className="image_container">
          <img src={star} alt="star"></img>
        </div>
        <h1>How did we do?</h1>
        <p className="message_box">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <form>
          <div>
            <input
              id="1"
              type="radio"
              name="rating"
              value="1"
              onChange={handleChange}
            />
            <label htmlFor="1">1</label>
          </div>
          <div>
            <input
              id="2"
              type="radio"
              name="rating"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="2">2</label>
          </div>
          <div>
            <input
              id="3"
              type="radio"
              name="rating"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="3">3</label>
          </div>
          <div>
            <input
              id="4"
              type="radio"
              name="rating"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="4">4</label>
          </div>
          <div>
            <input
              id="5"
              type="radio"
              name="rating"
              value="5"
              onChange={handleChange}
            />
            <label htmlFor="5">5</label>
          </div>
        </form>
        <div className="button_container">
          <button type="submit" onClick={redirect}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rating;
