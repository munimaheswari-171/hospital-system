import React from "react";
import { Grid, Container } from "@mui/material";
import DoctorCard from "../Components/DoctorCard";

const doctors = [
  {
    name: "Dr. dyana",
    specialization: "Cardiology",
    experience: 10,
    time: "10 AM - 2 PM",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. joseph",
    specialization: "ENT",
    experience: 8,
    time: "12 PM - 4 PM",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. catling",
    specialization: "Orthopedic",
    experience: 12,
    time: "9 AM - 1 PM",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function Doctors() {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {doctors.map((doc, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <DoctorCard doctor={doc} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
