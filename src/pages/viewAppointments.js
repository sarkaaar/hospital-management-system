import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { db } from "../firebase-config";
import PatientRecord from "../components/PatientRecord";
import {
  collection,
  getDocs,
  // addDoc,
  // updateDoc,
  // deleteDoc,
  // doc,
} from "firebase/firestore";


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
    console.log("useEfect Working");
    const getPatients = async () => {
      const data = await getDocs(patientsCollection);

      setPatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); // data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    };
    getPatients();

    console.log(patients);
  }, []);
  return (
    <div>
      <Header />

      <div style={{ margin: "50px" }}>
        <PatientRecord obj={head} style={{ marginBottom: "10px" }} />

        {patients.map((patient) => {
          return <PatientRecord obj={patient} />;
        })}
      </div>
    </div>
  );
}
