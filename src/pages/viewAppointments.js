import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { db } from "../firebase-config";
import PatientRecord from "../components/PatientRecord";
import PatientRecordHead from "../components/PatientRecordHead";
import { query, where } from "firebase/firestore";

import { collection, getDocs } from "firebase/firestore";

const head = {
  MR_no: "MR_no",
  name: "Patient Name",
  time: "Time",
  date: "Date",
  issue: "Issue",
  doc_Name: "Doctor Name",
  gender: "Gender",
  age: "Age",
  adress: "Adress",
  phone_no: "Phone_no",
};

export default function ViewAppointments() {
  const [patients, setPatients] = useState([]);
  const patientsCollection = collection(db, "patients");

  useEffect(() => {
    const getPatients = async () => {
      // const data = await getDocs(patientsCollection);
      const q = query(patientsCollection, where("date", "==", today()));
      const queryResults = await getDocs(q);

      setPatients(
        queryResults.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      //   setPatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); // data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    };

    getPatients();

    // console.log(patients);
  }, []);

  // const search_Patient_Contact = async () => {
  //   const q = query(patientsCollection, where("date", "==", today()));
  //   const queryResults = await getDocs(q);

  //   setPatients(
  //     queryResults.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //   ); // data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

    
  // };

  function today() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    console.log(today);
    return Date.parse(today);
  }
  return (
    <div>
      <Header />
      <h1 style={{padding:"15px"}}>Today's Appointments</h1>

      <div style={{ margin: "50px" }}>
        <PatientRecordHead obj={head} style={{ marginBottom: "10px" }} />

        {patients.map((patient) => {
          return <PatientRecord obj={patient} />;
        })}
      </div>
    </div>
  );
}
