import React, { useState, useEffect, useContext } from "react";
import Table from "react-bootstrap/Table";
import { siteContext } from "../context/siteContext";
import BookingHistory from "./bookingHistory";
const BookingHistoryTable = () => {
  const { arrivedBooking } = useContext(siteContext);

  const arrivedBookingComponents = arrivedBooking.map((x) => (
    <BookingHistory key={x._id} arrivedBookingDetails={x} />
  ));
  return (
    <Table responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Name</th>
          <th>Address</th>
          <th>NIC</th>
          <th>Phone</th>
          <th>Service</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>{arrivedBookingComponents}</tbody>
    </Table>
  );
};

export default BookingHistoryTable;
