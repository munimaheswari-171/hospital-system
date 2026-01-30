import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  const navigate = useNavigate();

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={doctor.image}
        alt={doctor.name}
      />
      <CardContent>
        <Typography variant="h6">{doctor.name}</Typography>
        <Typography>{doctor.specialization}</Typography>
        <Typography>{doctor.experience} years experience</Typography>
        <Typography>Available: {doctor.time}</Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 1 }}
          onClick={() => navigate("/book")}
        >
          Book Appointment
        </Button>
      </CardContent>
    </Card>
  );
}
