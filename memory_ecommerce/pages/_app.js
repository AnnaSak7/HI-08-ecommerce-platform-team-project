import Layout from "../components/ui/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#5FA0A4" },
    secondary: { main: "#B5E0DF" },
    // trying to style info color in pink on cartbutton in navbar
    info: { main: "#FFC0CB" },
  },
  typography: { htmlFontSize: 16 },
});

function MyApp({ Component, pageProps, todo }) {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="top-center" limit={1} />
      <Layout>
        <Component {...pageProps} todo={todo} />
      </Layout>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await res.json();
  return { todo: json };
};

export default MyApp;
