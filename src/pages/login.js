import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";
import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  avatar: {
    margin: theme.spacing(1),
    width: "70px",
    height: "70px",
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

export default function SignIn() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  // Keep the Satate of Login
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    localStorage.setItem("token", user.accessToken);
  });

  // Login Function
  const login = async () => {
    try {
      const LoggedInUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(LoggedInUser);
    } catch (error) {
      console.log(error);
    }
  };

  // Logout Function
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <Header />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              fullWidth
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
            />

            <Button
              variant="contained"
              sx={{ padding: "100px" }}
              color="primary"
              className={classes.submit}
              onClick={() => login()}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
      <div>
        <h1>USer Logged In</h1>
        <h3>{user?.email}</h3>
      </div>
      <div>
        <Button onClick={logout}>Logout</Button>
      </div>
      <div>
        <Button
          onClick={() => {
            console.log(user.accessToken);
          }}
        >
          Print Token
        </Button>
      </div>
    </div>
  );
}
