import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";

export default function Matieres() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState("name");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    fetch("http://localhost:8010/api/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((err) => console.error("Erreur API COURSES :", err));
  }, []);

  const filtered = courses.filter((c) => {
    const text = `${c._id} ${c.code} ${c.name}`.toLowerCase();
    return text.includes(search.toLowerCase());
  });

  const sorted = [...filtered].sort((a, b) => {
    let aVal = "";
    let bVal = "";

    if (orderBy === "id") {
      aVal = a._id || "";
      bVal = b._id || "";
    } else if (orderBy === "code") {
      aVal = a.code || "";
      bVal = b.code || "";
    } else if (orderBy === "name") {
      aVal = a.name || "";
      bVal = b.name || "";
    }

    const res = aVal.localeCompare(bVal);
    return order === "asc" ? res : -res;
  });

  const paged = sorted.slice(
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

  return (
    <>
      <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-end" }}>
        <TextField
          size="small"
          label="Rechercher une matière..."
          variant="outlined"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(0);
          }}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="courses table">
          <TableHead>
            <TableRow>
              
              <TableCell>
                <TableSortLabel
                  active={orderBy === "id"}
                  direction={orderBy === "id" ? order : "asc"}
                  onClick={() => handleRequestSort("id")}
                >
                  ID Cours
                </TableSortLabel>
              </TableCell>

              <TableCell>
                <TableSortLabel
                  active={orderBy === "code"}
                  direction={orderBy === "code" ? order : "asc"}
                  onClick={() => handleRequestSort("code")}
                >
                  Code
                </TableSortLabel>
              </TableCell>

              <TableCell>
                <TableSortLabel
                  active={orderBy === "name"}
                  direction={orderBy === "name" ? order : "asc"}
                  onClick={() => handleRequestSort("name")}
                >
                  Nom du cours
                </TableSortLabel>
              </TableCell>

            </TableRow>
          </TableHead>

          <TableBody>
            {paged.map((course) => (
              <TableRow key={course._id}>
                
              
                <TableCell>{course._id}</TableCell>

                
                <TableCell>{course.code}</TableCell>

              
                <TableCell>{course.name}</TableCell>

              </TableRow>
            ))}

            {paged.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  Aucune matière trouvée.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={sorted.length}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
        labelRowsPerPage="Lignes par page"
      />
    </>
  );
}
