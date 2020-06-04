import React, { useState, createContext, useEffect } from "react";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { uuid } from "uuidv4";

export const siteContext = createContext();

const SiteContextProvider = (props) => {
  const [booking, setBooking] = useState([]);
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
  const addBooking = async (newBooking) => {
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
    /*  console.log(bookedTimeSlots); */
  };

  const removeBooking = (id) => {
    let arraySlotToBeRemoved = booking.filter((slot) => slot._id === id);

    let slotToBeRemoved = arraySlotToBeRemoved[0];

    console.log(slotToBeRemoved.bookedTime);
    //chcking whether the booked slot is available
    if (slotToBeRemoved) {
      console.log("before removing:", bookedTimeSlots);
      setBookedTimeSlots(
        bookedTimeSlots.filter(
          (x) => slotToBeRemoved.bookedTime.indexOf(x) == -1
        )
      );

      setBooking(booking.filter((slot) => slot._id !== id));
    }
  };

  return (
    <siteContext.Provider
      value={{
        booking,
        bookedTimeSlots,
        service,

        setBooking,
        addBooking,
        removeBooking,
        addService,
        removeService,
        editService,
      }}
    >
      {props.children}
    </siteContext.Provider>
  );
};

export default SiteContextProvider;
