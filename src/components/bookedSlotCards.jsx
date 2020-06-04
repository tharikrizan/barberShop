import React, { useState, useEffect, useContext } from "react";

import "./style/BookedSlotsCards.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import BookedSlot from "./bookedSlot";
import { siteContext } from "../context/siteContext";
const BookedSlotsCards = () => {
  const {  booking } = useContext(siteContext);

  console.log("booking in bookedSlotCards:", booking);
  const bookedSlotComponents = booking.map((sb) => (
    <BookedSlot key={sb._id} bookingDetails={sb} />
  ));
  return (
    <div className="bookeSlotsCards">
      <CardGroup>{bookedSlotComponents}</CardGroup>
    </div>
  );
};

export default BookedSlotsCards;
