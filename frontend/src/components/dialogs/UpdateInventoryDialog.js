import React from "react";

// MUI
import CategoryIcon from '@mui/icons-material/Category';
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Avatar,
  Typography
} from "@mui/material";

import UpdateInventoryForm from "../forms/UpdateInventoryForm";

const UpdateInventoryDialog = (props) => {
    const { sku, open, onClose } = props;

  return (
      <Dialog fullWidth maxWidth="lg" open={open} onClose={onClose}>
        <DialogTitle sx={{ bgcolor: "#212121", color: "#fff" }}>
          Update Inventory #{sku}
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
            <Avatar sx={{ mt: 3, bgcolor: "error.main" }}>
                <CategoryIcon />
            </Avatar>
          
            <Typography component="div" align="center" variant="h5" marginBottom={1}>
                Inventory Management
            </Typography>

            <UpdateInventoryForm sku={sku} onClose={onClose}/>
            
        </DialogContent>
    </Dialog>
  );
}

export default UpdateInventoryDialog;