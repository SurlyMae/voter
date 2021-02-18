import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Navpane from "../components/Navpane";
import axios from "axios";

function Home() {
  const [members, getMembers] = useState([]);
  const [states, getStates] = useState([]);
  const apiCall =
    "https://api.propublica.org/congress/v1/116/senate/members.json";

  useEffect(() => {
    axios.get("./states.json").then((res) => {
      getStates(res.data.states);
    });
  });

  useEffect(() => {
    axios
      .get(apiCall, {
        headers: { "X-API-Key": "IWc4gzoEbejd3CUB2eNz5EMyKsgT9MC7EFmz7M6A" },
      })
      .then((res) => {
        getMembers(res.data.results[0].members);
        // console.log(`members is ${JSON.stringify(members)}`);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Navpane states={states}></Navpane>;
      </Container>
    </>
  );
}

export default Home;
