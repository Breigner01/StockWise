import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../../redux/actions/authActions";

// MUI
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";

const RegisterUser = (props) => {
  const { redirect } = props;

  let navigate = useNavigate();

  const emptyForm = {
    email: "",
    password: "",
    confirm_password: "",
  };

  // Store form data in state
  const [state, setState] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  // Change form data in state at each change
  const handleChange = (e) =>
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validRegistration()){
        const {
          email,
          password,
          confirm_password,
        } = state;
    
        if (password !== confirm_password) {
          console.log("Passwords do not match");
        } else {
          const newUser = {
            email,
            password,
          };
          if (props.registerUser(newUser)){
            navigate(`${redirect}`);
          }
          
        }
    }
  };

  const validRegistration = () => {
    let temp = {}

    const emailRegEx = (/$^|.+@.+..+/);

    temp.email = emailRegEx.test(state.email)? "" : "Invalid Email";
    temp.password = state.password.length > 5 ? "" : "Minimum 6 characters required";
    
    setErrors({ ...temp });

    return Object.values(temp).every(helperText => helperText == "");
  };

  return (
    <Container component="main" maxWidth="xs">
        <Box
            sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <AccountCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={state.email}
                            onChange={handleChange}
                            {...(errors.email && {error: true, helperText: errors.email} )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            value={state.password}
                            onChange={handleChange}
                            {...(errors.password && {error: true, helperText: errors.password} )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="confirm_password"
                            label="Confirm Password"
                            type="password"
                            id="confirm_password"
                            value={state.confirm_password}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign Up
                </Button>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Link href="/login" variant="body2">
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Container>
  );
}

RegisterUser.propTypes = {
    registerUser: PropTypes.func.isRequired,
};

export default connect(null, { registerUser })(RegisterUser);