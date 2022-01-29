import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function PatientRecord(obj) {
  return (
    <Card sx={{ marginTop: "5px", height: "50px" }}>
      <CardContent
        sx={{
          marginLeft: "25px",
          display: "flex",
          flexDirection: "row",
          justifyItems: "space-between",
        }}
      >
        <Typography style={{ width: "12.5%" }} variant="h6">
          {obj.obj.Patient_ID}
        </Typography>
        <Typography style={{ width: "12.5%" }} variant="h6">
          {obj.obj.Patient_Name}
        </Typography>
        <Typography style={{ width: "12.5%" }} variant="h6">
          {obj.obj.Issue}
        </Typography>
        <Typography style={{ width: "12.5%" }} variant="h6">
          {obj.obj.Gender}
        </Typography>
        <Typography style={{ width: "12.5%" }} variant="h6">
          {obj.obj.Appointment_Time}
        </Typography>
        <Typography style={{ width: "12.5%" }} variant="h6">
          {obj.obj.Age}
        </Typography>
        <Typography style={{ width: "12.5%" }} variant="h6">
          {obj.obj.Date}
        </Typography>
        <Typography style={{ width: "12.5%" }} variant="h6">
          {obj.obj.Doctor_Name}
        </Typography>
      </CardContent>
    </Card>
  );
}
