import React from "react";
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";

export default function AppointmentList({
  appointments,
  setAppointments,
  setEditData,
}) {
  const handleDelete = (id) => {
    setAppointments(appointments.filter((a) => a.id !== id));
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5">Appointment List</Typography>

      <Table sx={{ mt: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell>Patient</TableCell>
            <TableCell>Doctor</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {appointments.map((a) => (
            <TableRow key={a.id}>
              <TableCell>{a.patient}</TableCell>
              <TableCell>{a.doctor}</TableCell>
              <TableCell>{a.date}</TableCell>
              <TableCell>{a.time}</TableCell>

              <TableCell>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ mr: 1 }}
                  onClick={() => setEditData(a)}
                >
                  Update
                </Button>

                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(a.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
