import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

export const Layout: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#004d40',
      },
      secondary: {
        main: '#ffcdd2',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Layout;
