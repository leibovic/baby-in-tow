import React, { useCallback, useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import WelcomeOverlay from "./WelcomeOverlay";
import LogoButton from "./LogoButton";
import CategoryPicker from "./CategoryPicker";
import FilterButton from "./FilterButton";
import BetaNotice from "./BetaNotice";
import Map from "./Map";

const App = ({ locationId }) => {
  const [category, setCategory] = useState("");
  const [filters, updateFilters] = useState({
    indoor: true,
    outdoor: true,
    changeTable: false,
    stroller1: true,
    stroller2: true,
    stroller3: true,
    nursing1: true,
    nursing2: true,
    nursing3: true,
  });
  const [welcomeVisible, updateWelcomeVisible] = useState(!locationId);
  const openWelcome = useCallback(() => {
    updateWelcomeVisible(true);
  }, [updateWelcomeVisible]);
  const closeWelcome = useCallback(() => {
    updateWelcomeVisible(false);
  }, [updateWelcomeVisible]);

  return (
    <div id="container">
      <Map filters={filters} category={category} locationId={locationId} />
      <LogoButton onClick={openWelcome} />
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <CategoryPicker
          category={category}
          handleCategoryChange={setCategory}
        />
        <FilterButton filters={filters} updateFilters={updateFilters} />
      </div>
      {welcomeVisible && <WelcomeOverlay onClose={closeWelcome} />}
      <BetaNotice />
    </div>
  );
};

render(
  <Router>
    <App default />
    <App path="locations/:locationId" />
  </Router>,
  document.getElementById("root")
);
