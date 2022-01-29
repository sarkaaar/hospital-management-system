import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Header from "../components/Header";

import axios from "axios";
// import { useHistory } from "react-router-dom";
// import SiteHeader from "../components/SiteHeader";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddPatient() {
  const classes = useStyles();

  // let history = useHistory();

  const [patient_id, setID] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [issue, setIssue] = useState("");
  const [gender, setGender] = useState("");
  const [doctor, setDoctorName] = useState("");
  const [age, setAge] = useState("");

  const token = localStorage.getItem("token");

  function addNewPatient() {
    axios
      .post(
        "http://localhost:1337/api/patients",
        JSON.stringify({
          attributes: {
            Patient_ID: "156",
            Patient_Name: "name",
            Appointment_Time: "12:15",
            Issue: "issue",
            Age: "24",
            Gender: "gender",
            Date: "12-12-15",
            Doctor_Name: "doctor",
            // createdBy: {
            //   id: 1,
            //   firstname: "Usman",
            //   lastname: "Ghani",
            //   username: null,
            // },
          },
        }),
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("User Sucesscully Created", response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
        alert("unable to login");
        // history.push("/products");
      });
  }

  return (
    <div>
      <Header />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add a New Patient
          </Typography>
          <form
            className={classes.form}
            // noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              type="id"
              label="Patient ID"
              value={patient_id}
              onChange={(e) => setID(e.target.value)}
              fullWidth
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
            />

            <TextField
              variant="outlined"
              margin="normal"
              type="time"
              label="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              fullWidth
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="date"
              label="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              fullWidth
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="text"
              label="Issue"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              fullWidth
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="text"
              label="Doctor Name"
              value={doctor}
              onChange={(e) => setDoctorName(e.target.value)}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="text"
              label="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="text"
              label="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              fullWidth
            />

            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => addNewPatient()}
              fullWidth
              // style={{hieght:10}}
            >
              Submit
            </Button>
            <Grid container>
              <Grid item xs></Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
