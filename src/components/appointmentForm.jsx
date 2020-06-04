import React, { useState, useEffect, useContext } from "react";
import "./style/appointmentForm.css";

import Badge from "react-bootstrap/Badge";

import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

import "react-datepicker/dist/react-datepicker.css";
import { siteContext } from "../context/siteContext";

const AppointmentForm = () => {
  const { addBooking, bookedTimeSlots } = useContext(siteContext);
  /*  const availableDatesAndTimes;
  const services ;
 */

  const [name, setName] = useState("tharik");
  const [phone, setPhone] = useState("0767936896");
  const [address, setAddress] = useState("78,hillstreet,kalutarra");
  const [nic, setNic] = useState("983133150V");
  const [service, setService] = useState("mhc1");
  const [date, setDate] = useState(setHours(setMinutes(new Date(), 30), 16));

  const handleChange = (e) => {
    let targetName = e.target.name;
    let value = e.target.value;
    switch (targetName) {
      case "name":
        setName(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "nic":
        setNic(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "service":
        setService(value);
        break;

      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      name,
      phone,
      nic,
      date,
      address,
      service,
    };

    const regexNIC = /^(?:19|20)?\d{2}(?:[0-35-8]\d\d(?<!(?:000|500|36[7-9]|3[7-9]\d|86[7-9]|8[7-9]\d)))\d{4}(?:[vVxX])$/;
    const regexPhone = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/;

    let validNIC = regexNIC.exec(nic);
    let validPhone = regexPhone.exec(phone);
    /* console.log("date", date.getDate());
    console.log("month", date.getMonth());
    console.log("Time", date.getHours());
    console.log("Minnutes", date.getMinutes()); */
    if (!validNIC) {
      // setMessage("invlaid NIC");
      setNic("");
      alert("invlaid NIC");
      return;
    } else if (!validPhone) {
      //setMessage("invlaid Phone");
      setPhone("");
      alert("invlaid Phone");
      return;
    } else {
      addBooking(booking);
      setName("");
      setAddress("");
      setPhone("");
      setDate(null);
      setNic("");
      setService("");
      return;
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="imgcontainer">
        <h1>
          <Badge>Book An Appointment</Badge>
        </h1>
      </div>

      <div className="container">
        <div className="coronaMessage">
          <h4>
            <Badge className="badge" variant="danger">
              Due to COVID-19 please be kind enough to provide <br />
              NIC number and address
            </Badge>
          </h4>
          <h4>
            <Badge className="badge" variant="danger">
              This is a request from the Health Officials
            </Badge>
          </h4>
        </div>

        <label>
          <b>Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <label>
          <b>NIC</b>
        </label>
        <input
          type="text"
          placeholder="Enter NIC"
          name="nic"
          value={nic}
          onChange={handleChange}
          required
        />
        <label>
          <b>Address</b>
        </label>
        <input
          type="text"
          placeholder="Enter Address"
          name="address"
          value={address}
          onChange={handleChange}
          required
        />
        <label>
          <b>Phone Number</b>
        </label>
        <input
          type="text"
          placeholder="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
          required
        />

        <label>
          <b>Select Service</b>
        </label>
        <select name="service" value={service} onChange={handleChange}>
          <option value="mhc1">Male Normal Hair cut [30min]</option>
          <option value="mhc2">Trim / Shave Beard [15min]</option>
          <option value="fhc1">Female Normal Hair cut [30min]</option>
          <option value="fhc2">Female Trimming [45min]</option>
          <option value="fhc3">Female Hair Dressing [1 hour]</option>
        </select>
        <label>
          <b>Select Date and time</b>
        </label>
        <div>
          <DatePicker
            placeholderText="Click to set date and time"
            selected={date}
            onChange={(date) => {
              setDate(date);
              console.log(date);
            }}
            minDate={new Date()}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            excludeTimes={[...bookedTimeSlots]}
            isClearable
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>

        <button type="submit">BOOK</button>
      </div>
    </form>
  );
};

export default AppointmentForm;
