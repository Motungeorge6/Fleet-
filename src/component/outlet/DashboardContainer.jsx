import React from "react";
import Car from "../assets/car1.png";

import "./dashboard.css";

const DashboardCpntainer = () => {
  const personInfo = {
    driverName: "Idris Olaoluwa",
    carName: "Toyota",
    vehicleModel: "Toyota Camry",
    plateNumber: "36rmfyuf5e",
    numberOfSeat: "4",
    pickUpSchedule: "20-06-2023,12:00p",
    destination: "Sky mall",
    imageUrl: {Car},
  };
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "20px",
  };
  const infoStyle = {
    marginTop: "10px",
    textAlign: "center",
  };
  const lineStyle = {
    width: "80%",
    height: "1px",
    backgroundColor: "gray",
    marginTop: "10px",
  };

  return (
    <div className="dashboard-container">
      <div className="header-text">
        <h1>Hello Oluwadarasimi</h1>
      </div>

      <div className="request-ride-container">
        <h1>Request for your ride</h1>

        <div className="request-ride-form-container">
          <div className="each-input-container">
            <input placeholder="Destination address" type="text" />
          </div>
          <div className="divider" />
          <div className="each-input-container">
            <select placeholder="Local area">
              <option defaultValue="local Area">Local Area </option>
              <option> dropdown1</option>
              <option> dropdown2</option>
              <option> dropdown3</option>
            </select>
          </div>
          <div className="divider" />
          <div className="each-input-container">
            <input placeholder="Schedule" type="date" />
          </div>
          <div className="divider" />
          <div className="each-input-container">
            <input placeholder="Number of seats" type="text" />
          </div>

          <div className="input-button">
            <p>Request</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCpntainer;

//  <div style={{ padding: "60px" }}>
//     <h1 style={{ color: "#80078A" }}>Hello OluwaDarasimi</h1>
//     <p>Request For Your Ride</p>
//   </div>
//   <div
//     style={{
//       // justifyContent: "center",
//       height: "100vh",
//       width: "85vw",
//       alignItems: "center",
//       display: "flex",
//       flexDirection: "column",
//       fontSize: "20px",
//       justifyContent: "flex-start",
//       overflow: "hidden",
//     }}
//   >
//     <div
//       style={{
//         width: "90%",
//         height: "50px",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-evenly",
//         backgroundColor: "#ECF1F8",
//         padding: "20px",
//         overflow: "hidden",
//       }}
//     >
//       <input
//         style={{
//           width: "20%",
//           borderRadius: "15px",
//           text: "destination",
//         }}
//       ></input>
//       <select style={{ width: "20%" }}>
//         <option defaultValue="local Area">Local Area </option>
//         <option> dropdown1</option>
//         <option> dropdown2</option>
//         <option> dropdown3</option>
//       </select>
//       <input style={{ width: "20%" }}></input>
//       <input style={{ width: "20%" }}></input>
//       <div style={{ display: "flex" }}>
//         <button style={{ width: "100%", backGroundColor: "purple" }}>
//           Request
//         </button>
//       </div>
//     </div>

//     <div style={{ justifyContent: "center" }}>
//       <h1>Approved Rides Appears Here</h1>
//       <div
//         style={{
//           borderRadius: "7px",
//           border: "2px solid grey",
//           padding: "10px",
//           width: "50vw",
//           display: "flex",
//           textDecoration: "underline",
//         }}
//       >
//         <img src={Car} alt="Car" style={{ marginRight: "72%" }} />
//         <div style={{ marginRight: "50%" }}>
//           <div style={infoStyle}>
//             <p>{personInfo.driverName}</p>
//             <p>{personInfo.carName}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
