import React from "react";

// MUI
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";

import ProductsTable from "../tables/ProductsTable";

const InventoryDialog = (props) => {

  const { open, onClose, inventory_id } = props;

  const products = [
    { id: 1, name: "Product A", quantity: 10 },
    { id: 2, name: "Product B", quantity: 11 },
    { id: 3, name: "Product C", quantity: 12 },
    { id: 4, name: "Product D", quantity: 13 },
  ];

  return (
      <Dialog fullWidth maxWidth="lg" open={open} onClose={onClose}>
        <DialogTitle sx={{ bgcolor: "#212121", color: "#fff" }}>
          Inventory #{inventory_id}
          <IconButton
            edge="start"
            color="inherit"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          align="center"
        >
            <ProductsTable inventory_id={inventory_id} products={products}/>
        </DialogContent>
    </Dialog>
  );
}

export default InventoryDialog;