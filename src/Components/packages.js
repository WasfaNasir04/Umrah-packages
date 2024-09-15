import React from "react";
import "./packages.css";

const Packages = () => {
  return (
    <div className="packages-page">
      <div className="packages-header">
        <h1>Packages</h1>  
      </div>

      <div className="package-container">
        <h1>PACKAGE 01</h1>  <button className="enquiry-button">ENQUIRY NOW</button>
        <h2>NEXT UMRAH September 26th, 2024 - October 7th, 2024</h2>
        <p>
          ACCOMMODATION:5-STAR HOTEL
        </p>
        <p>
          DEPARTURE:Thu 26th September 2024
        </p>

        <div className="package-details">
          <div className="pricing">
            <table>
              <thead>
                <tr>
                  <th>DURATION</th>
                  <th>MAKKAH</th>
                  <th>MADINAH</th>
                  <th>QUAD</th>
                  <th>TRIPLE</th>
                  <th>DOUBLE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10 DAYS 10 NIGHTS</td>
                  <td>6</td>
                  <td>5</td>
                  <td>$5370</td>
                  <td>$5670</td>
                  <td>$5970</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>

        {/* package include   */}
        <div className="package-inclusions">
  <div className="package-left">
    <h3>Package Include:</h3>
    <p>Terms & Conditions:</p>
  </div>
  <div className="package-right">
    <ul>
      <li>Airfare, Visa, Transport</li>
      <li>Travel Insurance</li>
      <li>5 Star Accommodation (Clock Tower Makkah and next to Haram in Medina)</li>
      <li>Ziyaraat in Makkah and Madinah</li>
      <li>Zamzam and Ihram complementary</li>
      <li>Breakfast Included</li>
      <li>Jumma in Makkah and Madinah</li>
      <li>Transfer from Makkah to Madinah</li>
    </ul>
  </div>
</div>


        
      
    </div>
  );
};

export default Packages;
