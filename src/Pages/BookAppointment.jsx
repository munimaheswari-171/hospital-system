import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  MenuItem,
  Typography,
  Grid,
} from "@mui/material";

export default function BookAppointment({ setAppointments }) {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments((prev) => [...prev, { ...form, status: "Booked" }]);
    alert("Appointment Booked Successfully!");
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5">Book Appointment</Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6}>
            <TextField label="Patient Name" name="patient" fullWidth onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Age" name="age" type="number" fullWidth onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField select label="Gender" name="gender" fullWidth onChange={handleChange}>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Mobile Number" name="mobile" fullWidth onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Doctor Name" name="doctor" fullWidth onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField type="date" name="date" fullWidth onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField type="time" name="time" fullWidth onChange={handleChange} />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Confirm Appointment
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
