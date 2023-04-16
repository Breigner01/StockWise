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

  return (
      <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
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
            <InventoryTable onClose={onClose} sku={sku}/>
        </DialogContent>
    </Dialog>
  );
}

export default InventoryDialog;