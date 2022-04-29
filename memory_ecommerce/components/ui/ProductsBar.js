import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

export default function ProductsBar(props) {
  const [value, setValue] = React.useState("1");
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const showDetailsHandler = (path) => {
    router.push(`/${path}`);
    console.log("value is ", path);
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
        <Tab
          id="1"
          value="1"
          label="Lavish trip"
          onClick={(e) => showDetailsHandler("/626670ddf92bdf3fb20675aa")}
        />
        <Tab
          id="2"
          value="2"
          label="Long night out"
          onClick={(e) => showDetailsHandler("/6266758df92bdf3fb20675ac")}
        />
        <Tab
          id="3"
          value="3"
          label="Top of the world"
          onClick={(e) => showDetailsHandler("/62666fd2f92bdf3fb20675a9")}
        />
        <Tab
          id="4"
          value="4"
          label="Butterflies in the stomach"
          onClick={(e) => showDetailsHandler("/62666fd2f92bdf3fb20675a9")}
        />
        <Tab
          id="5"
          value="5"
          label="Pearl white beaches"
          onClick={(e) => showDetailsHandler("/62667676f92bdf3fb20675ad")}
        />
      </Tabs>
    </Box>
  );
}
