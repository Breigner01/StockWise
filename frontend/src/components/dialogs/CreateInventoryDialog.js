import React from "react";

// MUI
import InventoryIcon from '@mui/icons-material/Inventory';
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Avatar,
  Typography
} from "@mui/material";

import InventoryForm from "../forms/InventoryForm";

const CreateInventoryDialog = (props) => {
    const { open, onClose } = props;

  return (
      <Dialog fullWidth maxWidth="lg" open={open} onClose={onClose}>
        <DialogTitle sx={{ bgcolor: "#212121", color: "#fff" }}>
          Create Inventory Form
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
            <Avatar sx={{ mt: 3, bgcolor: "success.main" }}>
                <InventoryIcon />
            </Avatar>
          
            <Typography component="div" align="center" variant="h5">
                Inventory
            </Typography>

            <InventoryForm onClose={onClose}/>
            
        </DialogContent>
    </Dialog>
  );
}

export default CreateInventoryDialog;