import React, { useState, useEffect } from "react";

import AppointmentForm from "../components/appointmentForm";
import "./styles/adminPage.css";

import BookedSlotsCardsAdmin from "../components/bookedSlotsCardsAdmin";
import Badge from "react-bootstrap/Badge";
import ServiceTableAdmin from "../components/serviceTableAdmin";
import BookingHistoryTable from "../components/bookingHistoryTable";

const AdminPage = () => {
  return (
    <div className="parent">
      <main>
        <section className="bookedSlots">
          <h1 style={{ textAlign: "center" }}>
            <Badge variant="success">BOOKED SLOTS</Badge>
          </h1>
          <BookedSlotsCardsAdmin />
        </section>
        <section className="serviceTableAdmin">
          <ServiceTableAdmin />
        </section>

        <section className="appointmentForm">
          <AppointmentForm />
        </section>
        <section className="bookingHistory">
        <h1 style={{ textAlign: "center" }}>
            <Badge variant="success">BOOKING HISTORY</Badge>
          </h1>
          <BookingHistoryTable />
        </section>
        {/*  <section>servicesTable</section> */}
      </main>
    </div>
  );
};

export default AdminPage;
