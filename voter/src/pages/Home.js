import React from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Navpane from "../components/Navpane";

function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Navpane />
      </Container>
    </>
  );
}

export default Home;
