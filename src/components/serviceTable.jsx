import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./style/serviceTable.css";

const ServiceTable = () => {
  return (
    <div className="priceTable">
      <div className="mensTable">
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
                <img src="./images/mhaircut1.jpg" alt="mhair1" />
              </td>
              <td>HairCut</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>
                <img src="./images/mhaircut2.jpg" alt="mhair1" />
              </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>
                <img src="./images/mhaircut3.jpg" alt="mhair1" />
              </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>
                <img src="./images/mhaircut4.jpg" alt="mhair1" />
              </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>
                <img src="./images/mhaircut5.jpg" alt="mhair1" />
              </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="femalesTable">
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
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>
                <img src="./images/fhaircut5.jpg" alt="mhair1" />
              </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>
                <img src="./images/fhaircut3.jpg" alt="mhair1" />
              </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>
                <img src="./images/fhaircut4.jpg" alt="mhair1" />
              </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>
                <img src="./images/fhaircut5.jpg" alt="mhair1" />
              </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ServiceTable;
