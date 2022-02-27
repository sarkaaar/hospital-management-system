import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

export default function Header() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    navigate("/sign_in");
  };

  return (
    <div sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit">
              <NavLink
                to={`/AddPatient`}
                activeClassName="active"
                style={{ textDecoration: "none", color: "white" }}
              >
                Add Patient
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink
                to={`/addDoctor`}
                activeClassName="active"
                style={{ textDecoration: "none", color: "white" }}
              >
                Add Doctor
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink
                to={`/viewDoctors`}
                activeClassName="active"
                style={{ textDecoration: "none", color: "white" }}
              >
                View Doctors
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink
                to={`/viewAppointments`}
                activeClassName="active"
                style={{ textDecoration: "none", color: "white" }}
              >
                View Appointments
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink
                to={`/viewReports`}
                activeClassName="active"
                style={{ textDecoration: "none", color: "white" }}
              >
                View Reports
              </NavLink>
            </Button>
          </Typography>

          {token ? (
            <div>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Button color="inherit">
                <NavLink
                  to={`/sign_in`}
                  activeClassName="active"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </NavLink>
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
