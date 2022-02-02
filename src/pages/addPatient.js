import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useNavigate } from "react-router-dom"; 

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { db } from "../firebase-config";


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
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddPatient() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [MR_no, setMR_no] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [issue, setIssue] = useState("");
  const [doc_Name, setDoc_Name] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [adress, setAdress] = useState("");
  const [phone_no, setPhone_no] = useState(0);

  const patientsCollection = collection(db, "patients");

  const addPatient = async () => {
    const newPatient = {
      MR_no: MR_no,
      name: name,
      time: time,
      date: date,
      issue: issue,
      doc_Name: doc_Name,
      gender: gender,
      age: age,
      adress: adress,
      phone_no: phone_no,
    };
    await addDoc(patientsCollection, newPatient);
    // navigate('/addPatient');
     await window.location.reload(false);
  };

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
              label="MR no."
              value={MR_no}
              onChange={(e) => setMR_no(e.target.value)}
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
              value={doc_Name}
              onChange={(e) => setDoc_Name(e.target.value)}
              fullWidth
              required
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
              type="number"
              label="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="text"
              label="Adress"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="number"
              label="Phone no."
              value={phone_no}
              onChange={(e) => setPhone_no(e.target.value)}
              required
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => addPatient()}
              fullWidth
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
