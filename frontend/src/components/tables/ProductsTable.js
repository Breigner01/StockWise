import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ProductTable = ({ products }) => {
  const renderProductRows = () => {
    return products.map((product) => (
      <TableRow key={product.id}>
        <TableCell>{product.id}</TableCell>
        <TableCell>{product.name}</TableCell>
        <TableCell>{product.price}</TableCell>
        <TableCell>{product.quantity}</TableCell>
      </TableRow>
    ));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product ID</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderProductRows()}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
