import React from "react";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import { Wrapper } from "../components/ui/Wrapper";

function PageLayout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
}

export default PageLayout;
