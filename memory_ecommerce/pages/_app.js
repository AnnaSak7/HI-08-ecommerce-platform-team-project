import Layout from '../components/ui/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fontSize } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: { main: "#5FA0A4" },
    secondary: { main: "#B5E0DF" },
    // trying to style info color in pink on cartbutton in navbar
    info: { main: "#FFC0CB" },
  },
    typography: { htmlFontSize: 16 },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp