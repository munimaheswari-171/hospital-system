import React from "react";
import { Container, Typography, Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 2 }}>
      {/* TOP SIGN IN / SIGN UP */}
      <Box
        display="flex"
        justifyContent="flex-end"
        mb={2}
      >
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            onClick={() => navigate("/login")}
          >
            Sign In
          </Button>

          <Button
            variant="contained"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </Button>
        </Stack>
      </Box>

      {/* IMAGE + CONTENT */}
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