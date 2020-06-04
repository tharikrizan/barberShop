import React, { useState, useEffect } from "react";

import "./style/BookedSlotsCards.css";
import BookedSlotAdmin from "./bookedSlotAdmin";
const BookedSlotsCardsAdmin = () => {
  const x = [1, 2, 3, 4, 5, 6];
  const bookedSlotComponents = x.map((x) => <BookedSlotAdmin key={x} />);
  return <div className="bookeSlotsCards">{bookedSlotComponents}</div>;
};

export default BookedSlotsCardsAdmin;
