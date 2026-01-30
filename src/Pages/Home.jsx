import React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Box textAlign="center">
        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
          alt="hospital"
          width="100%"
          style={{ borderRadius: "10px" }}
        />

        <Typography variant="h4" mt={3}>
          Welcome to Hospital Appointment System
        </Typography>
        <Typography>
          Book appointments with expert doctors easily and quickly.
        </Typography>
      </Box>
    </Container>
  );
}


