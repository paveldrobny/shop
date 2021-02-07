import React from "react";
import CardsView from "../components/Card/CardsView";
import Search from "../components/Search/Search";

function Home() {
  return (
    <div className="page-wrapper">
      <Search />
      <CardsView/>
    </div>
  );
}

export default Home;
