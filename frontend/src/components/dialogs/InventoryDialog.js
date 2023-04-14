import React from "react";

// MUI
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";

import InventoryTable from "../tables/InventoryTable";

const InventoryDialog = (props) => {

  const { open, onClose, sku } = props;

  const inventory = {
    ownerId: "1",
    sku: "111",
    quantity: 100,
    available: 30,
    inTransit: 70
  };

  return (
      <Dialog fullWidth maxWidth="lg" open={open} onClose={onClose}>
        <DialogTitle sx={{ bgcolor: "#212121", color: "#fff" }}>
          Product #{sku}
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
            <InventoryTable sku={sku} inventory={inventory}/>
        </DialogContent>
    </Dialog>
  );
}

export default InventoryDialog;