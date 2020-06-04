import React, { useState, useEffect } from "react";

const ServiceFemaleAdmin = () => {
  return (
    <div>
      <tr>
              <td>
                <img src="./images/fhaircut5.jpg" alt="mhair1" />
              </td>
              <td>
                <input value="HairCut" />
              </td>
              <td>
                <input value="5min" />
              </td>
              <td>
                <input value="Rs.50.00" />
              </td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
    </div>
  );
};

export default ServiceFemaleAdmin;
