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

  const showDetailsHandler = () => {
    switch (id) {
      case "1":
        console.log("value: ", value);
        router.push("/62666fd2f92bdf3fb20675a9");
        break;
      case "2":
        router.push("/626670ddf92bdf3fb20675aa");
        break;
      case "3":
        router.push("/626674def92bdf3fb20675ab");
        break;
      case "4":
        router.push("/6266758df92bdf3fb20675ac");
        break;
      case "5":
        router.push("/62667676f92bdf3fb20675ad");
        break;
      default:
        router.push("/");
    }
    console.log("value is ", value);
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
          onClick={showDetailsHandler}
        />
        <Tab
          id="2"
          value="2"
          label="Long night out"
          onClick={showDetailsHandler}
        />
        <Tab
          id="3"
          value="3"
          label="Top of the world"
          onClick={showDetailsHandler}
        />
        <Tab
          id="4"
          value="4"
          label="Butterflies in the stomach"
          onClick={showDetailsHandler}
        />
        <Tab
          id="5"
          value="5"
          label="Pearl white beaches"
          onClick={showDetailsHandler}
        />
      </Tabs>
    </Box>
  );
}
