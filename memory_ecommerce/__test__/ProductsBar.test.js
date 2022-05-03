import React from "react";
import { render } from "@testing-library/react";
import ProductsBar from "../components/ui/ProductsBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

// import { useRouter } from "next/router";

// jest.mock("next/router");

// TEST========================================
test("<Tab /> matches snapshot", () => {
  let value;

  const component = render(
    <Box sx={{ width: "100%" }}>
      <Tabs
        centered
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
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
          onClick={(e) => showDetailsHandler("/626674def92bdf3fb20675ab")}
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
  expect(component.container).toMatchSnapshot();
});

// TEST========================================
test("<Tab /> renders without crashing", () => {
  let value;
  const div = document.createElement("div");
  render(
    <Box sx={{ width: "100%" }}>
      <Tabs
        centered
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
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
          onClick={(e) => showDetailsHandler("/626674def92bdf3fb20675ab")}
        />
        <Tab
          id="5"
          value="5"
          label="Pearl white beaches"
          onClick={(e) => showDetailsHandler("/62667676f92bdf3fb20675ad")}
        />
      </Tabs>
    </Box>,
    div
  );
});

// TEST========================================
test("Defaults to the first tab's content", () => {
  let value;
  const div = document.createElement("div");
  render(
    <Box sx={{ width: "100%" }}>
      <Tabs
        centered
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
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
          onClick={(e) => showDetailsHandler("/626674def92bdf3fb20675ab")}
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
});

// TEST========================================
test("Can set a different tab as the initial state", () => {});

// TEST========================================
test("Click from one tab to the next", () => {});
