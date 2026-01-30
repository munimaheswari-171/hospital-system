import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Doctors from "./Pages/Doctors";
import BookAppointment from "./Pages/BookAppointment";
import AppointmentList from "./Pages/AppointmentList";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

export default function App() {
  // STATE MANAGEMENT (central state)
  
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem("appointments");
    return saved ? JSON.parse(saved) : [];
  });

  // save to localStorage whenever appointments change
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />

        {/* CREATE – Book Appointment */}
        <Route
          path="/book"
          element={<BookAppointment setAppointments={setAppointments} />}
        />

        {/* READ + UPDATE + DELETE – Appointment List */}
        <Route
          path="/appointments"
          element={
            <AppointmentList
              appointments={appointments}
              setAppointments={setAppointments}
            />
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
