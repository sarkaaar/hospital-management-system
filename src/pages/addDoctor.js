import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    display: "flex",
    margin: "auto",
    marginTop: "20px",
  },
}));

export default function AddDoctor() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [specialisedIn, setSpecialisedIn] = useState("");
  const [fees, setFees] = useState("");

  function addDoctor() {}

  return (
    <div>
      <Header />

      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Add a New Doctor
          </Typography>
          <form className={classes.form}>
            <TextField
              // variant="outlined"
              margin="normal"
              type="name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
            />
            <TextField
              // variant="outlined"
              margin="normal"
              type="text"
              label="Specialized In"
              value={specialisedIn}
              onChange={(e) => setSpecialisedIn(e.target.value)}
              required
              fullWidth
            />
            <TextField
              // variant="outlined"
              margin="normal"
              type="number"
              label="Fees"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              required
              fullWidth
            />

            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => addDoctor()}
            >
              Add Doctor
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
