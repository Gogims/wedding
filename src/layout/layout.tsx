import { createMuiTheme, Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header/header";

export const Layout: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#004d40',
      },
      secondary: {
        main: '#DA9681',
      },
    },
    typography: {
      fontFamily: [
        'Roboto', 
        'Helvetica', 
        'Arial', 
        'sans-serif',
        'Marck Script'
      ].join(',')
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Grid container justify="center">
          <Body />
        </Grid>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Layout;
