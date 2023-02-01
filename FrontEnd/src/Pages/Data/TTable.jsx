import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({ data, loading }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Names</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Gmail</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">G</TableCell>
            <TableCell align="right">RegNum</TableCell>
            <TableCell align="right">DiscordId</TableCell>
            <TableCell align="right">Town</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <StyledTableRow
              key={item.regnum}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell align="right">{item.lastname}</StyledTableCell>
              <StyledTableCell align="right">{item.gmail}</StyledTableCell>
              <StyledTableCell align="right">{item.score}</StyledTableCell>
              <StyledTableCell align="right">{item.phone}</StyledTableCell>
              <StyledTableCell align="right">{item.g}</StyledTableCell>
              <StyledTableCell align="right">{item.regnum}</StyledTableCell>
              <StyledTableCell align="right">{item.discordid}</StyledTableCell>
              <StyledTableCell align="right">{item.town}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
