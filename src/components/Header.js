import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 


export default function Header() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
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
                to={`/viewAppointments`}
                activeClassName="active"
                style={{ textDecoration: "none", color: "white" }}
              >
                View Appointments
              </NavLink>
            </Button>
          </Typography>

          {token ? (
            <div>
              <Button
                color="inherit"
                onClick={() => {
                  console.log("logout");
                  localStorage.clear();
                  navigate('/sign_in');
                }}
              >
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

          {/* <Button color="inherit">
            <NavLink
              to={`/sign_in`}
              activeClassName="active"
              style={{ textDecoration: "none", color: "white" }}
            >
              Login
            </NavLink>
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
