import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

export default function NftType() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">NFT Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="NFT Type"
          onChange={handleChange}
        >
          <MenuItem value={10}>Single</MenuItem>
          <MenuItem value={20}>Limited Edition</MenuItem>
          <MenuItem value={30}>Mutable Set</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
