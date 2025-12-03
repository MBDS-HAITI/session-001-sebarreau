import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import notes from "../../data.json";

export default function Matieres() {
  const map = new Map();

  notes.forEach((n) => {
    const course = n.course;
    if (!map.has(course)) {
      map.set(course, {
        course,
        count: 0,
        total: 0,
      });
    }
    const entry = map.get(course);
    entry.count += 1;
    entry.total += n.grade;
  });

  const matieres = Array.from(map.values()).map((m) => ({
    ...m,
    average: m.total / m.count,
  }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="courses table">
        <TableHead>
          <TableRow>
            <TableCell>Matière</TableCell>
            <TableCell align="right">Nombre de notes</TableCell>
            <TableCell align="right">Moyenne</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {matieres.map((row) => (
            <TableRow key={row.course}>
              <TableCell>{row.course}</TableCell>
              <TableCell align="right">{row.count}</TableCell>
              <TableCell align="right">{row.average.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
