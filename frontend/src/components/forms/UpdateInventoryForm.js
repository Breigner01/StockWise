import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addInventory,
  decreaseInventory,
  storeInventory,
} from "../../redux/actions/inventoryActions";

// MUI
import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

const UpdateInventoryForm = (props) => {
  const { sku, onClose } = props;

  const defaultAction = {
    id: 0,
    quantity: 0,
  };

  const actions = [
    { id: 0, name: "Add Inventory" },
    { id: 1, name: "Decrease Inventory" },
    { id: 2, name: "Store Inventory" },
  ];

  const [action, setAction] = useState(defaultAction);

  const onActionTypeChange = (e) =>
    setAction((prevState) => ({
      ...prevState,
      id: e.target.value,
    }));

  const onActionQuantityChange = (e) =>
    setAction((prevState) => ({
      ...prevState,
      quantity: Number(e.target.value),
    }));

  const updateInventory = (e) => {
    e.preventDefault();
    const invData = {
      ownerId: props.userId,
      sku: sku,
      quantity: action.quantity,
    };
    switch (action.id) {
      case 0:
        props.addInventory(props.userId, invData);
        break;
      case 1:
        props.decreaseInventory(props.userId, invData);
        break;
      case 2:
        props.storeInventory(props.userId, invData);
    }
    onClose();
  };

  return (
    <Box component="form" onSubmit={updateInventory}>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            alignItems: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography align="left" variant="subtitle1">
                Action
              </Typography>
              <Select
                required
                placeholder="Action"
                name="action"
                fullWidth
                value={action.id}
                onChange={onActionTypeChange}
                align="left"
              >
                {actions.map((item, i) => (
                  <MenuItem key={i} value={item["id"]}>
                    {item["name"]}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Typography align="left" variant="subtitle1">
                Quantity
              </Typography>
              <TextField
                type="number"
                placeholder="0"
                required
                name="quantity"
                fullWidth
                onChange={onActionQuantityChange}
                value={action.quantity}
                // {...(errors.name && {error: true, helperText: errors.name} )}
              />
            </Grid>
          </Grid>

          <Button
            color="error"
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  userId: state.authReducer.user.uid,
});

export default connect(mapStateToProps, {
  addInventory,
  decreaseInventory,
  storeInventory,
})(UpdateInventoryForm);
