import React, { useState } from "react";
import { Container, TextField, Button, Typography, Alert, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Register() {
  // form now has name, email, password
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (form.name.trim() === "") {
      setError("Please enter your name.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already registered
    const exists = users.find((u) => u.email === form.email);
    if (exists) {
      setError("Email already registered!");
      return;
    }

    // Add new user
    users.push({ ...form });
    localStorage.setItem("users", JSON.stringify(users));

    // Success message
    setSuccess("Registration Successful! Redirecting to Login...");

    // Reset form
    setForm({ name: "", email: "", password: "" });

    // Redirect to Login page after 2 seconds
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>

      <Stack spacing={2}>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
      </Stack>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          sx={{ my: 1 }}
          required
        />
        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          sx={{ my: 1 }}
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          fullWidth
          sx={{ my: 1 }}
          required
        />

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Register
        </Button>
      </form>

      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Already have an account?{" "}
        <Button variant="text" onClick={() => navigate("/login")}>
          Login
        </Button>
      </Typography>
    </Container>
  );
}
