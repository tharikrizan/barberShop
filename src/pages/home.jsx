import React, { useState, useEffect } from "react";

import AppointmentForm from "../components/appointmentForm";
import "./styles/home.css";
import ServiceTable from "../components/serviceTable";
import BookedSlotsCards from "../components/bookedSlotCards";
import Badge from "react-bootstrap/Badge";

const Home = () => {
  return (
    <div className="parent">
      <main>
        <section className="bookedSlots">
          <h1 style={{ textAlign: "center" }}>
            <Badge variant="success">BOOKED SLOTS</Badge>
          </h1>

          <BookedSlotsCards />
        </section>
        <section className="serviceTable">
          <ServiceTable />
        </section>

        <section className="appointmentForm">
          <AppointmentForm />
        </section>
        {/*  <section>servicesTable</section> */}
      </main>
    </div>
  );
};

export default Home;
