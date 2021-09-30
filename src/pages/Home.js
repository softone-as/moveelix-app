import React from "react";
import Introduction from "../components/Section/Introduction";
import SectionGames from "../components/Section/SectionGames";
import SectionMovie from "../components/Section/SectionMovie";
import "./home.css";

const Home = () => {
  return (
    <>
      <Introduction />
      <SectionMovie />
      <SectionGames />
    </>
  );
};

export default Home;
