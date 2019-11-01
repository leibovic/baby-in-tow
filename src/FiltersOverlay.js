import React from "react";
import closeIcon from "./icons/close.svg";

const FiltersOverlay = ({ filters, updateFilters, onClose }) => {
  return (
    <div
      className="overlay"
      style={{
        color: "#374B5B",
        padding: "24px"
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

      <div
        style={{
          overflowY: "scroll",
          height: "calc(100% - 24px)"
        }}
      >
        <div className="filterSection">
          <div className="filterSectionTitle">Type of Place</div>
          <div className="filterRow">
            <input
              type="checkbox"
              name="indoor"
              checked={filters.indoor}
              onChange={e => {
                const checked = e.target.checked;
                updateFilters(filters => ({ ...filters, indoor: checked }));
              }}
            />
            <div className="filterLabel">
              <label htmlFor="indoor">Indoor</label>
            </div>

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
            <div className="filterLabel">
              <label htmlFor="outdoor">Outdoor</label>
            </div>
          </div>
        </div>

        <div className="filterSection">
          <div className="filterSectionTitle">Change table availability</div>
          <div className="filterRow">
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
            <div className="filterLabel">
              <label htmlFor="changeTable">Must have a change table</label>
            </div>
          </div>
        </div>

        <div className="filterSection">
          <div className="filterSectionTitle">Stroller space</div>

          <div className="filterRow">
            <input
              type="checkbox"
              name="stroller1"
              checked={filters.stroller1}
              onChange={e => {
                const checked = e.target.checked;
                updateFilters(filters => ({ ...filters, stroller1: checked }));
              }}
            />
            <div className="filterLabel">
              <label htmlFor="stroller1">Doable with a bit of effort</label>
              <div>You’ll need to maneuver yourself around tight spots.</div>
            </div>
          </div>

          <div className="filterRow">
            <input
              type="checkbox"
              name="stroller2"
              checked={filters.stroller2}
              onChange={e => {
                const checked = e.target.checked;
                updateFilters(filters => ({ ...filters, stroller2: checked }));
              }}
            />
            <div className="filterLabel">
              <label htmlFor="stroller2">Moderate space</label>
              <div>There may not be an accessible door or ramp access.</div>
            </div>
          </div>

          <div className="filterRow">
            <input
              type="checkbox"
              name="stroller3"
              checked={filters.stroller3}
              onChange={e => {
                const checked = e.target.checked;
                updateFilters(filters => ({ ...filters, stroller3: checked }));
              }}
            />
            <div className="filterLabel">
              <label htmlFor="stroller3">Stroller party</label>
              <div>
                Accessible door or ramp access and a lot of space to move
                around.
              </div>
            </div>
          </div>
        </div>

        <div className="filterSection">
          <div className="filterSectionTitle">Ease of nursing/pumping</div>

          <div className="filterRow">
            <input
              type="checkbox"
              name="nursing1"
              checked={filters.nursing1}
              onChange={e => {
                const checked = e.target.checked;
                updateFilters(filters => ({ ...filters, nursing1: checked }));
              }}
            />
            <div className="filterLabel">
              <label htmlFor="nursing1">Public, but chill</label>
              <div>
                The venue is open and public but still has a chill vibe so no
                creepy glares.
              </div>
            </div>
          </div>

          <div className="filterRow">
            <input
              type="checkbox"
              name="nursing2"
              checked={filters.nursing2}
              onChange={e => {
                const checked = e.target.checked;
                updateFilters(filters => ({ ...filters, nursing2: checked }));
              }}
            />
            <div className="filterLabel">
              <label htmlFor="nursing2">Some privacy</label>
              <div>
                While there isn’t a dedicated room you can find some privacy on
                a corner seat or a quiet seat in the back.
              </div>
            </div>
          </div>

          <div className="filterRow">
            <input
              type="checkbox"
              name="nursing3"
              checked={filters.nursing3}
              onChange={e => {
                const checked = e.target.checked;
                updateFilters(filters => ({ ...filters, nursing3: checked }));
              }}
            />
            <div className="filterLabel">
              <label htmlFor="nursing3">Dedicated private space</label>
              <div>There is a dedicated space for pumping or nursing.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersOverlay;
