import React from "react";
import Header from "../components/Header";

// import * as React from 'react';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// import * as React from 'react';
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormControl from '@mui/material/FormControl';
import Select from "@mui/material/Select";

export default function Home() {
  const [value, setValue] = React.useState("female");

  const [age, setAge] = React.useState("");
  const data = [
    "Ten",
    "Twenty",
    "Thirty",
    "Fourty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
    "Hundred",
  ];
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Header />
      <h1>Welcome to The Hospital</h1>
      <div>
        <FormControl>
          <RadioGroup
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <button onClick={console.log(value)}>Submit</button>
      </div>

      <div>
        <Box sx={{ width: 120, margin: "120px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              {data.map((item, index) => {
                return <MenuItem value={item}>{item}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>
      </div>
      <button
        onClick={() => {
          console.log(age);
        }}
      >
        click me
      </button>
    </div>
  );
}
