import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import UpdateIcon from "@mui/icons-material/Update";
// import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import { Button } from "@material-ui/core";

export default function DoctorRecord(obj) {
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
        <Typography style={{ width: "40%" }} variant="h6">
          {obj.obj.name}
        </Typography>
        <Typography style={{ width: "40%" }} variant="h6">
          {obj.obj.specialisedIn}
        </Typography>
        <Typography style={{ width: "20%" }} variant="h6">
          {obj.obj.fees}
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
      </CardContent>
    </Card>
  );
}
