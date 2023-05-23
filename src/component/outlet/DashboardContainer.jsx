import React from "react";
import Car from "../assets/car1.png";

const DashboardCpntainer = () => {
  const personInfo = {
    driverName: "Idris Olaoluwa",
    carName: "Toyota",
    vehicleModel: "Toyota Camry",
    plateNumber: "36rmfyuf5e",
    numberOfSeat: "4",
    pickUpSchedule: "20-06-2023,12:00p",
    destination: "Sky mall",
    imageUrl: { Car },
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
    <>
      <div style={{ padding: "60px" }}>
        <h1 style={{ color: "#80078A" }}>Hello OluwaDarasimi</h1>
        <p>Request For Your Ride</p>
      </div>
      <div
        style={{
          // justifyContent: "center",
          height: "100vh",
          width: "85vw",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          fontSize: "20px",
          justifyContent: "flex-start",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "90%",
            height: "50px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            backgroundColor: "#ECF1F8",
            padding: "20px",
            overflow: "hidden",
          }}
        >
          <input
            style={{
              width: "20%",
              borderRadius: "15px",
              text: "destination",
            }}
          ></input>
          <select style={{ width: "20%" }}>
            <option defaultValue="local Area">Local Area </option>
            <option> dropdown1</option>
            <option> dropdown2</option>
            <option> dropdown3</option>
          </select>
          <input style={{ width: "20%" }}></input>
          <input style={{ width: "20%" }}></input>
          <div style={{ display: "flex" }}>
            <button style={{ width: "100%", backGroundColor: "purple" }}>
              Request
            </button>
          </div>
        </div>

        <div style={{ justifyContent: "center" }}>
          <h1>Approved Rides Appears Here</h1>
          <div
            style={{
              borderRadius: "7px",
              border: "2px solid grey",
              padding: "10px",
              width: "50vw",
              display: "flex",
              textDecoration: "underline",
            }}
          >
            <img src={Car} alt="Car" style={{ marginRight: "72%" }} />
            <div style={{ marginRight: "50%" }}>
              <div style={infoStyle}>
                <p>{personInfo.driverName}</p>
                <p>{personInfo.carName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCpntainer;
