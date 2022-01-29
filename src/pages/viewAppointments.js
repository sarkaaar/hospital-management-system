import * as React from "react";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import PatientRecord from "../components/PatientRecord";

const head = {
  Patient_ID: "ID",
  Patient_Name: "Patient Name",
  Issue: "Issue",
  Gender: "Gender",
  Appointment_Time: "Appointment Time",
  Age: "Age",
  Date: "Date",
  Doctor_Name: "Doctor Name",
};

export default function ViewAppointments() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/patients/"
  );

  if (loading)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  if (error)
    return (
      <div>
        <h2>Error 404...</h2>
      </div>
    );
  return (
    <div>
      <Header />

      <div style={{ margin: "50px" }}>
        <PatientRecord obj={head} style={{ marginBottom: "10px" }} />

        {data.data.map((a) => (
          <PatientRecord obj={a.attributes} />
        ))}
      </div>
    </div>
  );
}
