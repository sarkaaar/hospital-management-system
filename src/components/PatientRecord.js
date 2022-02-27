import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import UpdateIcon from "@mui/icons-material/Update";
import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import { Button } from "@material-ui/core";

export default function PatientRecord(obj) {
  function toDate(dt) {
    var dd = String(dt.getDate()).padStart(2, "0");
    var mm = String(dt.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = dt.getFullYear();

    return yyyy + "-" + mm + "-" + dd;
  }

  return (
    <Card sx={{ marginTop: "5px", height: "50px" }}>
      <CardContent
        sx={{
          marginLeft: "5px",
          marginRight: "5px",
          display: "flex",
          flexDirection: "row",
          justifyItems: "space-between",
        }}
      >
        <Typography style={{ width: "10%" }} variant="h6">
          {obj.obj.MR_no}
        </Typography>
        <Typography style={{ width: "10%" }} variant="h6">
          {obj.obj.name}
        </Typography>
        <Typography style={{ width: "10%" }} variant="h6">
          {obj.obj.time}
        </Typography>
        <Typography style={{ width: "10%" }} variant="h6">
          {toDate(new Date(obj.obj.date))}
          {/* <button onClick={()=>{console.log(toDate(new Date(obj.obj.date)))}}>click</button> */}
        </Typography>
        <Typography style={{ width: "10%" }} variant="h6">
          {obj.obj.issue}
        </Typography>
        <Typography style={{ width: "10%" }} variant="h6">
          {obj.obj.doc_Name}
        </Typography>
        <Typography style={{ width: "10%" }} variant="h6">
          {obj.obj.gender}
        </Typography>
        <Typography style={{ width: "10%" }} variant="h6">
          {obj.obj.age}
        </Typography>
        <Typography style={{ width: "10%" }} variant="h6">
          {obj.obj.adress}
        </Typography>
        <Typography style={{ width: "10%" }} variant="h6">
          {obj.obj.phone_no}
        </Typography>
        <Typography>
          <Button>
            <DeleteOutlineIcon />
          </Button>
        </Typography>
        <Typography>
          <Button>
            <UpdateIcon />
          </Button>
        </Typography>
        <Typography>
          <Button>
            <AirlineSeatFlatIcon />
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
}
