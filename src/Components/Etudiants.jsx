import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import notes from "../../data.json"; 

export default function Etudiants() {
  const map = new Map();

  notes.forEach((n) => {
    const s = n.student;
    if (!map.has(s.id)) {
      map.set(s.id, {
        id: s.id,
        firstname: s.firstname,
        lastname: s.lastname,
      });
    }
  });

  const etudiants = Array.from(map.values());

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="students table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Prénom</TableCell>
            <TableCell>Nom</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {etudiants.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.firstname}</TableCell>
              <TableCell>{row.lastname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

