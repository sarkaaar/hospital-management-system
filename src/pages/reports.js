import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ReportOutlined from "@mui/icons-material/ReportOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme} from "@mui/material/styles";
import Header from "../components/Header";
import { useState } from "react";

export default function Reports() {
  const [currentDate, setCurrentDate] = useState();

  function currDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + "/" + mm + "/" + yyyy;
    console.log(today);
    setCurrentDate(today);
  }
  const handleSubmit = (event) => {};

  return (
    <div>
      <Header />
      <div style={{ width: "500px" }}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              // marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <ReportOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              View Reports w.r.t Start-End Date
            </Typography>
            <div
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="startDate"
                label="Start Date"
                type="date"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="endDate"
                label="End Date"
                type="date"
                id="endDate"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </div>
          </Box>
        </Container>

        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              View Reports w.r.t Doctor
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Doctor Name"
                type="text"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="endDate"
                label="Date"
                type="date"
                id="endDate"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>

        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              View Reports w.r.t Patient Contact
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1, width: "100%" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                name="contact"
                label="Patient Contact"
                type="text"
                id="patientContact"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}
