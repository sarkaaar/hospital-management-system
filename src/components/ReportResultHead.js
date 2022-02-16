import * as React from "react";

export default function ReportResultHead(obj) {
  const th = { width: "20%", display: "flex", justifyContent: "center" };
  return (
    <div style={{ display: "flex" }}>
      <h1 style={th}>MR_no</h1>
      <hr />
      <h1 style={th}>name</h1>
      <hr />
      <h1 style={th}>time</h1>
      <hr />
      <h1 style={th}>date</h1>
      <hr />
      <h1 style={th}>issue</h1>
      <hr />
      <h1 style={th}>doc_Name</h1>
      <hr />
      <h1 style={th}>gender</h1>
      <hr />
      <h1 style={th}>age</h1>
      <hr />
      <h1 style={th}>adress</h1>
      <hr />
      <h1 style={th}>Phone #</h1>
    </div>
  );
}
