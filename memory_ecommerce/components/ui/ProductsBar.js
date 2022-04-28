import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ProductsBar() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        //variant="fullWidth"
        centered
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="1" label="Lavish trip" />
        <Tab value="2" label="Long night out" />
        <Tab value="3" label="Top of the world" />
        <Tab value="4" label="Butterflies in the stomach" />
        <Tab value="5" label="Pearl white beaches" />
      </Tabs>
    </Box>
  );
}
