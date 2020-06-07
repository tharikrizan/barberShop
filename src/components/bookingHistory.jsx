import React, { useState, useEffect, useContext } from "react";
import { siteContext } from "../context/siteContext";

const BookingHistory = ({ arrivedBookingDetails }) => {
  const { removeHistory } = useContext(siteContext);
  console.log("arrivedBookingDetails:", arrivedBookingDetails);
  const date = arrivedBookingDetails.bookedTime[0];
  const dateTD = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} `;
  const timeTD = `${date.getHours()} : ${date.getMinutes()}`;
  return (
    <tr>
      <td>{dateTD}</td>
      <td>{timeTD}</td>
      <td>{arrivedBookingDetails.name}</td>
      <td>{arrivedBookingDetails.nic}</td>
      <td>{arrivedBookingDetails.address}</td>
      <td>{arrivedBookingDetails.phone}</td>
      <td>{arrivedBookingDetails.service}</td>
      <td>
        <button onClick={() => removeHistory(arrivedBookingDetails._id)}>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default BookingHistory;
