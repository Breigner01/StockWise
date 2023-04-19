import React from "react";

// MUI
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Avatar,
  Typography
} from "@mui/material";

import UpdateProductForm from "../forms/UpdateProductForm";

const UpdateProductDialog = (props) => {
    const { sku, open, onClose } = props;

  return (
      <Dialog fullWidth maxWidth="lg" open={open} onClose={onClose}>
        <DialogTitle sx={{ bgcolor: "#212121", color: "#fff" }}>
          Update Product Form
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
                <ChangeCircleIcon />
            </Avatar>
          
            <Typography component="div" align="center" variant="h5">
                Product
            </Typography>

            <UpdateProductForm sku={sku} onClose={onClose}/>
            
        </DialogContent>
    </Dialog>
  );
}

export default UpdateProductDialog;