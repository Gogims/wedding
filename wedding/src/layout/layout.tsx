import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";

type LayoutProps = {
  //
};

class Layout extends Component<LayoutProps, any> {
  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>);
  }
}

export default Layout;
