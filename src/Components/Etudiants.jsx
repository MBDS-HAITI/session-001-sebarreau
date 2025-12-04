import React, { useEffect, useState } from "react";

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

export default function Etudiants() {
  const [etudiants, setEtudiants] = useState([]);
  const [orderBy, setOrderBy] = useState("lastName");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8010/api/students")
      .then((res) => res.json())
      .then((data) => {
        const list = data.map((s) => ({
          id: s._id,                    
          firstName: s.firstName || "", 
          lastName: s.lastName || "",
        }));
        setEtudiants(list);
      })
      .catch((err) =>
        console.error("Erreur API STUDENTS pour étudiants :", err)
      );
  }, []);

  const filtered = etudiants.filter((e) => {
    const text = `${e.id} ${e.firstName} ${e.lastName}`.toLowerCase();
    return text.includes(search.toLowerCase());
  });

  const sorted = [...filtered].sort((a, b) => {
    const aVal = a[orderBy];
    const bVal = b[orderBy];

    const res = String(aVal || "").localeCompare(String(bVal || ""));
    return order === "asc" ? res : -res;
  });

  const paged = sorted.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      <Box className="search-bar" sx={{ mb: 2 }}>
        <TextField
          size="small"
          label="Rechercher un étudiant..."
          variant="outlined"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(0);
          }}
        />
      </Box>

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
            {paged.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={sorted.length}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) =>
          setRowsPerPage(parseInt(e.target.value, 10))
        }
        labelRowsPerPage="Lignes par page"
      />
    </>
  );
}
