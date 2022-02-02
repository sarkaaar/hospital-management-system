import  DoctorRecord from "../components/DoctorRecord";
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { db } from "../firebase-config";

const head = {
  name: "name",
  specialisedIn: "Specialised In",
  fees: "Fees",
  };

export default function ViewDoctors() {
  const [patients, setPatients] = useState([]);
  const patientsCollection = collection(db, "patients");

  // useEffect(() => {
  //   console.log("useEfect Working");
  //   const getPatients = async () => {
  //     const data = await getDocs(patientsCollection);

  //     setPatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); // data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //   };
  //   getPatients();

  //   console.log(patients);
  // }, []);
  return (
    <div>
      <Header />
      <DoctorRecord obj={head} style={{ marginBottom: "10px" }} />

      {/* <div style={{ margin: "50px" }}>
        <PatientRecord obj={head} style={{ marginBottom: "10px" }} />

        {patients.map((patient) => {
          return <PatientRecord obj={patient} />;
        })}
         
      </div>  */}
    </div>
  );
}
