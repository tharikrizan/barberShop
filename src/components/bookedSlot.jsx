import React, { useState, useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import "./style/bookedSlotCard.css";
import { siteContext } from "../context/siteContext";

const BookedSlot = ({ bookingDetails }) => {
  const { removeBooking } = useContext(siteContext);

  const [cancelButton, setCancelButton] = useState(true);

  console.log(
    "time difference,",
    new Date().getTime() - bookingDetails.currentTime.getTime()
  );
  const confirmBooking = () => {
    if (new Date().getTime() - bookingDetails.currentTime.getTime() < 1000) {
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCancelButton(false);
    }, 1000 * 60 * 15);
    return () => clearInterval(interval);
  }, []);

  let sTime = bookingDetails.bookedTime[0];
  let eTime = bookingDetails.bookedTime[bookingDetails.bookedTime.length - 1];
  let endTime = new Date(eTime.getTime() + 1000 * 60 * 15);

  console.log(sTime.getHours(), sTime.getMinutes());
  console.log(eTime.getHours(), eTime.getMinutes());
  console.log("endTime:", endTime.getHours(), endTime.getMinutes());
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
            End Time : {endTime.getHours()} : {endTime.getMinutes()}
          </Card.Subtitle>

          {cancelButton ? (
            <Card.Subtitle>
              PLEASE CANCEL BOOKING WITHIN 15 MIN
              <Card.Subtitle>
                <button onClick={() => removeBooking(bookingDetails._id)}>
                  CANCEL
                </button>
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
