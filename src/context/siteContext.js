import React, { useState, createContext, useEffect } from "react";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { uuid } from "uuidv4";

export const siteContext = createContext();

const SiteContextProvider = (props) => {
  const [booking, setBooking] = useState([]);
  const [arrivedBooking, setArrivedBooking] = useState([]);
  const [service, setService] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  const [bookedTimeSlots, setBookedTimeSlots] = useState([]);

  useEffect(() => {
    console.log("after removing booking:", bookedTimeSlots);
  }, []);
  const addService = () => {
    console.log("add service");
  };
  const removeService = () => {
    console.log("remove service");
  };
  const editService = () => {
    console.log("edit service");
  };
  const addBooking = (newBooking) => {
    const { name, phone, address, nic, date, service } = newBooking;

    let bookedTime = [
      setHours(setMinutes(date, date.getMinutes()), date.getHours()),
    ];

    // Making Time slots unavailable in the time picker by inserting it to booking
    switch (service) {
      case "mhc1":
        for (let i = 0; i < 1; i++) {
          date.setMinutes(date.getMinutes() + 15);

          bookedTime.push(
            setHours(setMinutes(date, date.getMinutes()), date.getHours())
          );
        }

        break;
      case "mhc2":
        for (let i = 0; i < 0; i++) {
          date.setMinutes(date.getMinutes() + 15);

          bookedTime.push(
            setHours(setMinutes(date, date.getMinutes()), date.getHours())
          );
        }

        break;
      case "fhc1":
        for (let i = 0; i < 1; i++) {
          date.setMinutes(date.getMinutes() + 15);

          bookedTime.push(
            setHours(setMinutes(date, date.getMinutes()), date.getHours())
          );
        }

        break;
      case "fhc2":
        for (let i = 0; i < 2; i++) {
          date.setMinutes(date.getMinutes() + 15);

          bookedTime.push(
            setHours(setMinutes(date, date.getMinutes()), date.getHours())
          );
        }

        break;
      case "fhc3":
        for (let i = 0; i < 3; i++) {
          date.setMinutes(date.getMinutes() + 15);

          bookedTime.push(
            setHours(setMinutes(date, date.getMinutes()), date.getHours())
          );
        }

        break;

      default:
        break;
    }
    /*   console.log("booked time", bookedTime); */

    //checking if two users booked concurrently
    /*     bookedTime.forEach((element1) => {
      bookedTimeSlots.forEach((element2) => {
        if (element1 === element2) {
          setAlertMessage("Sorry, some customer  Booked it  Just now ☹");
        }
      });
    }); */

    //checking whether there is no alert message before booking it
    if (!alertMessage) {
      setBookedTimeSlots([...bookedTimeSlots, ...bookedTime]);

      setBooking([
        ...booking,
        { _id: uuid(), ...newBooking, bookedTime, currentTime: new Date() },
      ]);
    }
  };

  const removeBooking = (id) => {
    let arraySlotToBeRemoved = booking.filter((slot) => slot._id === id);

    let slotToBeRemoved = arraySlotToBeRemoved[0];

    console.log(slotToBeRemoved.bookedTime);
    //chcking whether the booked slot is available
    if (slotToBeRemoved) {
      //unallocating the booked time slot
      setBookedTimeSlots(
        bookedTimeSlots.filter(
          (x) => slotToBeRemoved.bookedTime.indexOf(x) == -1
        )
      );

      setBooking(booking.filter((slot) => slot._id !== id));
    }
  };
  const customerArrived = (id) => {
    let arrayArrivedBooking = booking.filter((slot) => slot._id === id);

    let newArrivedBooking = arrayArrivedBooking[0];

    console.log("arrivedBooking:", newArrivedBooking);

    //chcking whether the booked slot is available
    if (newArrivedBooking) {
      setArrivedBooking([...arrivedBooking, newArrivedBooking]);
      setBooking(booking.filter((slot) => slot._id !== id));
    }
  };

  const removeHistory = (id) => {
    let arraySlotToBeRemoved = arrivedBooking.filter((slot) => slot._id === id);

    let slotToBeRemoved = arraySlotToBeRemoved[0];

    //chcking whether the booked slot is available
    if (slotToBeRemoved) {
      setArrivedBooking(arrivedBooking.filter((slot) => slot._id !== id));
    }
  };

  return (
    <siteContext.Provider
      value={{
        booking,
        bookedTimeSlots,
        service,
        arrivedBooking,

        setBooking,
        addBooking,
        removeBooking,
        addService,
        removeService,
        editService,
        customerArrived,
        removeHistory,
      }}
    >
      {props.children}
    </siteContext.Provider>
  );
};

export default SiteContextProvider;
