import React from "react";
import closeIcon from "./icons/close.svg";

const FiltersOverlay = ({ filters, updateFilters, onClose }) => {
  return (
    <div
      className="overlay"
      style={{
        color: "#374B5B"
      }}
    >
      <button
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          margin: "10px",
          padding: "5px"
        }}
        onClick={onClose}
      >
        <img src={closeIcon} alt="Close"></img>
      </button>

      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold"
        }}
      >
        Filters
      </div>

      <div className="filterSection">
        <div className="filterLabel">Type of Place</div>
        <div>
          <input
            type="checkbox"
            name="indoor"
            checked={filters.indoor}
            onChange={e => {
              const checked = e.target.checked;
              updateFilters(filters => ({ ...filters, indoor: checked }));
            }}
          />
          <label htmlFor="indoor">Indoor</label>
          <input
            type="checkbox"
            style={{
              marginLeft: "24px"
            }}
            name="outdoor"
            checked={filters.outdoor}
            onChange={e => {
              const checked = e.target.checked;
              updateFilters(filters => ({
                ...filters,
                outdoor: checked
              }));
            }}
          />
          <label htmlFor="outdoor">Outdoor</label>
        </div>
      </div>

      <div className="filterSection">
        <div className="filterLabel">Change table availability</div>
        <div>
          <input
            type="checkbox"
            name="changeTable"
            checked={filters.changeTable}
            onChange={e => {
              const checked = e.target.checked;
              updateFilters(filters => ({
                ...filters,
                changeTable: checked
              }));
            }}
          />
          <label htmlFor="changeTable">Must have a change table</label>
        </div>
      </div>

      <div className="filterSection">
        <div className="filterLabel">Stroller space</div>

        <select
          value={filters.stroller}
          onChange={e => {
            const value = e.target.value;
            updateFilters(filters => ({ ...filters, stroller: value }));
          }}
          onBlur={e => {
            const value = e.target.value;
            updateFilters(filters => ({ ...filters, stroller: value }));
          }}
        >
          <option value="">Any</option>
          <option value="1">Doable with a bit of effort</option>
          <option value="2">Moderate space</option>
          <option value="3">It&apos;s a stroller party!</option>
        </select>
      </div>

      <div className="filterSection">
        <div className="filterLabel">Ease of nursing/pumping</div>
        <select
          value={filters.nursing}
          onChange={e => {
            const value = e.target.value;
            updateFilters(filters => ({ ...filters, nursing: value }));
          }}
          onBlur={e => {
            const value = e.target.value;
            updateFilters(filters => ({ ...filters, nursing: value }));
          }}
        >
          <option value="">Any</option>
          <option value="1">Public, but chill vibe</option>
          <option value="2">Some privacy</option>
          <option value="3">Dedicated space</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersOverlay;
