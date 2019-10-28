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
        <div className="filterSectionTitle">Type of Place</div>
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
        <div className="filterSectionTitle">Change table availability</div>
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
        <div className="filterSectionTitle">Stroller space</div>

        <div>
          <input
            type="checkbox"
            name="stroller1"
            checked={filters.stroller1}
            onChange={e => {
              const checked = e.target.checked;
              updateFilters(filters => ({ ...filters, stroller1: checked }));
            }}
          />
          <label htmlFor="stroller1">Doable with a bit of effort</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="stroller2"
            checked={filters.stroller2}
            onChange={e => {
              const checked = e.target.checked;
              updateFilters(filters => ({ ...filters, stroller2: checked }));
            }}
          />
          <label htmlFor="stroller2">Moderate space</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="stroller3"
            checked={filters.stroller3}
            onChange={e => {
              const checked = e.target.checked;
              updateFilters(filters => ({ ...filters, stroller3: checked }));
            }}
          />
          <label htmlFor="stroller3">Stroller party</label>
        </div>
      </div>

      <div className="filterSection">
        <div className="filterLabel">Ease of nursing/pumping</div>
        <div>
          <input
            type="checkbox"
            name="nursing1"
            checked={filters.nursing1}
            onChange={e => {
              const checked = e.target.checked;
              updateFilters(filters => ({ ...filters, nursing1: checked }));
            }}
          />
          <label htmlFor="nursing1">Public, but chill</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="nursing2"
            checked={filters.nursing2}
            onChange={e => {
              const checked = e.target.checked;
              updateFilters(filters => ({ ...filters, nursing2: checked }));
            }}
          />
          <label htmlFor="nursing2">Some privacy</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="nursing3"
            checked={filters.nursing3}
            onChange={e => {
              const checked = e.target.checked;
              updateFilters(filters => ({ ...filters, nursing3: checked }));
            }}
          />
          <label htmlFor="nursing3">Dedicated private space</label>
        </div>
      </div>
    </div>
  );
};

export default FiltersOverlay;
