import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

import axios from "axios";

function Home() {
  // const [members, getMembers] = useState([]);
  const [states, getStates] = useState([
    "AK",
    "AL",
    "AR",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "MD",
    "ME",
    "MI",
    "MN",
    "MO",
    "MS",
    "MT",
    "NC",
    "ND",
    "NE",
    "NH",
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VA",
    "VT",
    "WA",
    "WI",
    "WV",
    "WY",
  ]);
  // const apiCall =
  // "https://api.propublica.org/congress/v1/116/senate/members.json";

  // useEffect(() => {
  //   axios.get("./states.json").then((res) => {
  //     getStates(res.data.states);
  //   });
  // }, []);

  console.log(states);
  // useEffect(() => {
  //   axios
  //     .get(apiCall, {
  //       headers: { "X-API-Key": "IWc4gzoEbejd3CUB2eNz5EMyKsgT9MC7EFmz7M6A" },
  //     })
  //     .then((res) => {
  //       getMembers(res.data.results[0].members);
  //     });
  // }, []);

  return (
    <>
      <Navbar />
      <Container states={states} />
    </>
  );
}

export default Home;
