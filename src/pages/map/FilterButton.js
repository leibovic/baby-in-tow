import React, { useState, useCallback } from "react";
import FiltersOverlay from "./FiltersOverlay";

function FilterButton({ filters, updateFilters }) {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const showOverlay = useCallback(() => {
    setOverlayVisible(true);
  }, [setOverlayVisible]);
  const hideOverlay = useCallback(() => {
    setOverlayVisible(false);
  }, [setOverlayVisible]);

  return (
    <>
      <button type="button" className="filterButton" onClick={showOverlay}>
        Filter
      </button>
      {overlayVisible && (
        <FiltersOverlay
          filters={filters}
          updateFilters={updateFilters}
          onClose={hideOverlay}
        />
      )}
    </>
  );
}

export default FilterButton;
