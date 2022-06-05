import React from "react";
import { Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Container className="h-100 d-flex">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
