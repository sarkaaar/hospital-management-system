import * as React from "react";

export default function ReportResultBody(obj) {
  function toDate(dt) {
    var dd = String(dt.getDate()).padStart(2, "0");
    var mm = String(dt.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = dt.getFullYear();

    return yyyy + "-" + mm + "-" + dd;
  }
  const th = { width: "20%", display: "flex", justifyContent: "center" };
  return (
    <div style={{ display: "flex" }}>
      <h3 style={th}>{obj.obj.MR_no}</h3>
      <hr />
      <h3 style={th}>{obj.obj.name}</h3>
      <hr />
      <h3 style={th}>{obj.obj.time}</h3>
      <hr />
      <h3 style={th}>{toDate(new Date(obj.obj.date))}</h3>
      <hr />
      <h3 style={th}>{obj.obj.issue}</h3>
      <hr />
      <h3 style={th}>{obj.obj.doc_Name}</h3>
      <hr />
      <h3 style={th}>{obj.obj.gender}</h3>
      <hr />
      <h3 style={th}>{obj.obj.age}</h3>
      <hr />
      <h3 style={th}>{obj.obj.adress}</h3>
      <hr />
      <h3 style={th}>{obj.obj.phone_no}</h3>
    </div>
  );
}
