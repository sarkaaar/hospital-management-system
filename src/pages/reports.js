import { Avatar, Button, TextField, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Header from "../components/Header";
import { db } from "../firebase-config";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import { query, where, collection, getDocs } from "firebase/firestore";
import ReportResultHead from "../components/ReportResultHead";
import ReportResultBody from "../components/ReportResultBody";

export default function Reports() {
  const doctorsCollection = collection(db, "doctors");
  const patientsCollection = collection(db, "patients");

  useEffect(() => {
    const getPatients = async () => {
      const data = await getDocs(doctorsCollection);

      setDoctors(data.docs.map((doc) => doc.data().name)); // data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    };
    getPatients();

    console.log(doctors);
  }, []);

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]); // local

  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);
  const [docName, setDocName] = useState([]);
  const [specDate, setSpecDate] = useState([]);
  const [pat_Contact, setPat_Contact] = useState([]);
  // ---------------------------------------------------------------------------
  // Report w.r.t Start and End Date
  const search_To_From = async () => {};
  // ---------------------------------------------------------------------------
  // Report w.r.t Doctor Name and Date
  const search_Doctor_date = async () => {
    const q = query(
      patientsCollection,
      where("doc_Name", "==", docName),
      where("date", "==", specDate)
    );
    const queryResults = await getDocs(q);
    setPatients(
      queryResults.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    ); 
  };
  //----------------------------------------------------------------------------
  // Report w.r.t Patient Contact
  const search_Patient_Contact = async () => {
    const q = query(patientsCollection, where("phone_no", "==", pat_Contact));
    const queryResults = await getDocs(q);

    setPatients(
      queryResults.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    ); // data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

    // queryResults.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    // });
  };
  // ---------------------------------------------------------------------------

  const box_Style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "400px",
    margin: "auto",
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{ width: "20%", padding: "20px 30px" }}>
          <Box sx={box_Style}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <ReportOutlined /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              View Reports w.r.t Start-End Date
            </Typography>
            <div>
              <TextField
                margin="normal"
                required
                fullWidth
                id="startDate"
                label="Start Date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="endDate"
                label="End Date"
                type="date"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={search_To_From}
              >
                Submit
              </Button>
            </div>
          </Box>

          <Box sx={box_Style}>
            <Typography component="h1" variant="h5">
              View Reports w.r.t Doctor
            </Typography>
            <Box
              component="form"
              // onSubmit={search_Doctor_date}
              noValidate
              sx={{ mt: 1 }}
            >
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Doctor Name"
                type="text"
                value={docName}
                onChange={(e) => setDocName(e.target.value)}
              /> */}
              <FormControl fullWidth style={{ margin: "10px 0" }}>
                <InputLabel id="demo-simple-select-label">
                  Doctor Name
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={docName}
                  label="Doctor Name"
                  onChange={(e) => {
                    setDocName(e.target.value);
                  }}
                >
                  {doctors.map((item) => {
                    return <MenuItem value={item}>{item}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <TextField
                margin="normal"
                required
                fullWidth
                name="date"
                label="Date"
                type="date"
                id="date"
                value={specDate}
                onChange={(e) => setSpecDate(e.target.value)}
              />

              <Button
                // type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={search_Doctor_date}
              >
                Submit
              </Button>
            </Box>
          </Box>

          <Box sx={box_Style}>
            <Typography component="h1" variant="h5">
              View Reports w.r.t Patient Contact
            </Typography>
            <Box
              component="form"
              // onSubmit={search_Patient_Contact}
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
                value={pat_Contact}
                onChange={(e) => setPat_Contact(e.target.value)}
              />

              <Button
                // type="submit"
                fullWidth
                variant="contained"
                // sx={{ mt: 3, mb: 2 }}
                onClick={search_Patient_Contact}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </div>
        <hr />
        {/* ---------------- Reports Tables ---------------------------*/}
        <div style={{ width: "80%", padding: "10px" }}>
          <ReportResultHead />
          <hr />
          {patients.map((patient) => {
            return <ReportResultBody obj={patient} />;
          })}
        </div>
      </div>
      <button
        onClick={() => {
          console.log(patients);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
