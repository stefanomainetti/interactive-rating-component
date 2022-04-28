import React from "react";
import Rating from "./Rating";
import Thankyou from "./Thankyou";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export const UserContext = React.createContext();

const ReactRouterSetup = () => {
  const [rating, setRating] = useState(null);
  return (
    <BrowserRouter basename="/interactive-rating-component">
      <UserContext.Provider value={{ rating, setRating }}>
        <Routes>
          <Route path="/" element={<Rating />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default ReactRouterSetup;
