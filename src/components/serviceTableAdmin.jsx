import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./style/serviceTableAdmin.css";

const ServiceTableAdmin = () => {
  return (
    <div className="priceTableAdmin">
      <div className="mensTableAdmin">
        <Table responsive>
          <thead>
            <tr>
              <th></th>
              <th>Service</th>
              <th>Time</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="./images/mhaircut1.jpg" alt="mhair1" />
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
            <tr>
              <td>
                <img src="./images/mhaircut2.jpg" alt="mhair1" />
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
            <tr>
              <td>
                <img src="./images/mhaircut3.jpg" alt="mhair1" />
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
            <tr>
              <td>
                <img src="./images/mhaircut4.jpg" alt="mhair1" />
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
            <tr>
              <td>
                <img src="./images/mhaircut5.jpg" alt="mhair1" />
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
          </tbody>
        </Table>
      </div>
      <div className="femalesTableAdmin">
        <Table responsive>
          <thead>
            <tr>
              <th></th>
              <th>Service</th>
              <th>Time</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="./images/fhaircut1.jpg" alt="mhair1" />
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
            <tr>
              <td>
                <img src="./images/fhaircut3.jpg" alt="mhair1" />
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
            <tr>
              <td>
                <img src="./images/fhaircut4.jpg" alt="mhair1" />
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
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ServiceTableAdmin;
