import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./style/bookedSlotCard.css";

const BookedSlot = ({ bookingDetails }) => {
  let sTime = bookingDetails.bookedTime[0];
  let eTime = bookingDetails.bookedTime[bookingDetails.bookedTime.length - 1];
  eTime.setMinutes(eTime.getMinutes() + 15);

  console.log(sTime.getHours(), eTime.getHours());
  return (
    <div className="cardContainer">
      <Card>
        <Card.Body>
          <Card.Title>Booking</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Name : {bookingDetails.name}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Start Time : {sTime.getHours()} : {sTime.getMinutes()}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            End Time : {eTime.getHours()} : {eTime.getMinutes()}
          </Card.Subtitle>

          {new Date().getTime() - bookingDetails.currentTime.getTime() <
          1000 ? (
            <Card.Subtitle>
              PLEASE CANCEL BOOKING WITHIN 15 MIN
              <Card.Subtitle>
                <button>CANCEL</button>
              </Card.Subtitle>
            </Card.Subtitle>
          ) : (
            <Card.Subtitle>Booking Confirmed</Card.Subtitle>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookedSlot;
