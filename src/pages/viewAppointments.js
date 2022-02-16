import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { db } from "../firebase-config";
import PatientRecord from "../components/PatientRecord";
import PatientRecordHead from "../components/PatientRecordHead";
import { query, where } from "firebase/firestore";

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
  // const [date, setDate] = useState([]);
  const patientsCollection = collection(db, "patients");

  // function currentDate() {
  //   var today = new Date();
  //   var dd = String(today.getDate()).padStart(2, "0");
  //   var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  //   var yyyy = today.getFullYear();

  //   setDate(yyyy + "-" + mm + "-" + dd);
  // }
  useEffect(() => {
    // currentDate();
    // const q = query(patientsCollection, where("date", "==", date));

    console.log("useEfect Working");
    const getPatients = async () => {
      const data = await getDocs(patientsCollection);

      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });

      //  data.forEach((doc) => {
      //    console.log(doc.id, " => ", doc.data());
      //  });

      setPatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); // data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    };

    getPatients();

    console.log(patients);
  }, []);
  return (
    <div>
      <Header />

      <div style={{ margin: "50px" }}>
        <PatientRecordHead obj={head} style={{ marginBottom: "10px" }} />

        {patients.map((patient) => {
          return <PatientRecord obj={patient} />;
        })}
      </div>
    </div>
  );
}
