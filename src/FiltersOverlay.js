import React from "react";
import closeIcon from "./close.png";

const FiltersOverlay = ({ filters, updateFilters, onClose }) => {
  return (
    <div id="filtersOverlay">
      <button
        className="controlButton"
        style={{
          boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
          position: "absolute",
          top: 0,
          right: 0,
          margin: "10px",
          padding: "5px"
        }}
        onClick={onClose}
      >
        <img src={closeIcon} alt="Close"></img>
      </button>
      <h1>Filters</h1>
      <h2>Type of Place</h2>
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
      </div>
      <div>
        <input
          type="checkbox"
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

      <h2>Stroller Friendly?</h2>
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

      <h2>Whip &apos;em out?</h2>
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

      <h2>Blowout emergency?</h2>
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
  );
};

export default FiltersOverlay;
