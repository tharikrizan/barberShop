import React, { useState, useEffect, useContext } from "react";

import "./style/BookedSlotsCards.css";
import BookedSlotAdmin from "./bookedSlotAdmin";
import { siteContext } from "../context/siteContext";
const BookedSlotsCardsAdmin = () => {
  const { booking } = useContext(siteContext);

  const x = [1, 2, 3, 4, 5, 6];
  const bookedSlotComponents = booking.map((x) => (
    <BookedSlotAdmin key={x._id} bookingDetails={x} />
  ));
  return <div className="bookeSlotsCards">{bookedSlotComponents}</div>;
};

export default BookedSlotsCardsAdmin;
