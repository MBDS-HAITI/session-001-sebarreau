import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import notes from "../../data.json";


export default function Notes() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="notes table">
        <TableHead>
          <TableRow>
            <TableCell>Cours</TableCell>
            <TableCell>Étudiant</TableCell>
            <TableCell>Date</TableCell>
            <TableCell align="right">Note</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {notes.map((row) => (
            <TableRow key={row.unique_id}>
              <TableCell>{row.course}</TableCell>
              <TableCell>
                {row.student.firstname} {row.student.lastname} (#{row.student.id})
              </TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell align="right">{row.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
