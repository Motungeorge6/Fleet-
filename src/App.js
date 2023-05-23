import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Mainbar from "./component/mainBar/Mainbar";
import Dashboard from "./component/dashboard/Dashboard";
import BookingHistory from "./component/outlet/BookingHistory";
import Profile from "./component/outlet/Profile";
import Logout from "./component/outlet/Logout";
import DashboardHome from "./component/outlet/DashboardContainer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />}>
          <Route
            exact
            path="/dashboard/booking-history"
            element={<BookingHistory />}
          />
          <Route exact path="/dashboard/home" element={<DashboardHome />} />
          <Route exact path="/dashboard/profile" element={<Profile />} />
          <Route exact path="/dashboard/logout" element={<Logout />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
