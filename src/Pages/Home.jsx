import React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Box textAlign="center">
        <img
          src="https://th.bing.com/th/id/OIP.koxaWIl248OakWja7hzGCAHaCw?w=297&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
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


