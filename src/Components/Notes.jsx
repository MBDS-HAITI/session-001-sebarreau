import * as React from "react";
import { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";
import TablePagination from "@mui/material/TablePagination";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import notesData from "../../data.json"; 

function compare(a, b, field) {
  if (field === "course") {
    return a.course.localeCompare(b.course);
  }
  if (field === "date") {
    return a.date.localeCompare(b.date);
  }
  if (field === "grade") {
    return a.grade - b.grade;
  }
  return 0;
}

export default function Notes() {
  const [orderBy, setOrderBy] = useState("course");
  const [order, setOrder] = useState("asc"); 
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  const filteredNotes = notesData.filter((note) => {
    const text = (
      note.course +
      " " +
      note.student.firstname +
      " " +
      note.student.lastname
    ).toLowerCase();
    return text.includes(search.toLowerCase());
  });

  const sortedNotes = [...filteredNotes].sort((a, b) => {
    const res = compare(a, b, orderBy);
    return order === "asc" ? res : -res;
  });

  const pagedNotes = sortedNotes.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleRequestSort = (field) => {
    if (orderBy === field) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setOrderBy(field);
      setOrder("asc");
    }
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Box className="search-bar">
        <TextField
          size="small"
          label="Rechercher un nom..."
          variant="outlined"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(0);
          }}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="notes table">
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "course"}
                  direction={orderBy === "course" ? order : "asc"}
                  onClick={() => handleRequestSort("course")}
                >
                  Cours
                </TableSortLabel>
              </TableCell>

              <TableCell>Étudiant</TableCell>

              <TableCell>
                <TableSortLabel
                  active={orderBy === "date"}
                  direction={orderBy === "date" ? order : "asc"}
                  onClick={() => handleRequestSort("date")}
                >
                  Date
                </TableSortLabel>
              </TableCell>

              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === "grade"}
                  direction={orderBy === "grade" ? order : "asc"}
                  onClick={() => handleRequestSort("grade")}
                >
                  Note
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {pagedNotes.map((row) => (
              <TableRow key={row.unique_id}>
                <TableCell>{row.course}</TableCell>
                <TableCell>
                  {row.student.firstname} {row.student.lastname} (#
                  {row.student.id})
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell align="right">{row.grade}</TableCell>
              </TableRow>
            ))}

            {pagedNotes.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  Aucune note trouvée.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={sortedNotes.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Lignes par page"
      />
    </>
  );
}
