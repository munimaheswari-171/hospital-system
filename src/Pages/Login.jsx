import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (user) {
      alert("Login Successful!");
      navigate("/"); // redirect to home after login
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5">Login</Typography>

      <form onSubmit={handleSubmit}>
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

        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
}
