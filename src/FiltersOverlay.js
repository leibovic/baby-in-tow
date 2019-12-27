import React, { useState } from "react";
import chevronUp from "./icons/chevron-up.svg";
import chevronDown from "./icons/chevron-down.svg";

const FiltersOverlay = ({ filters, updateFilters, onClose }) => {
  const [strollerExpanded, updateStrollerExpanded] = useState(false);
  const [nursingExpanded, updateNursingExpanded] = useState(false);

  return (
    <div
      className="overlay"
      style={{
        color: "#374B5B",
        padding: "24px"
      }}
    >
      <div
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          backgroundColor: "#E3F0FB",
          padding: "16px"
        }}
      >
        <button
          type="button"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            fontWeight: 800,
            border: "none",
            backgroundColor: "#374B5B",
            color: "white",
            borderRadius: "4px",
            boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.0882594)",
            cursor: "pointer"
          }}
          onClick={onClose}
        >
          Apply
        </button>
      </div>
      <div
        style={{
          fontSize: "24px",
          fontWeight: 600
        }}
      >
        Filters
      </div>

      <div
        style={{
          overflowY: "scroll",
          height: "calc(100% - 66px)"
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
                updateFilters(_filters => ({ ..._filters, indoor: checked }));
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
                updateFilters(_filters => ({
                  ..._filters,
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
                updateFilters(_filters => ({
                  ..._filters,
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
          <div className="filterSectionTitle">
            Stroller space
            <button
              type="button"
              className="filterExpandButton"
              onClick={() => updateStrollerExpanded(!strollerExpanded)}
            >
              <img src={strollerExpanded ? chevronUp : chevronDown} alt="" />
            </button>
          </div>

          {strollerExpanded && (
            <div>
              <div className="filterRow">
                <input
                  type="checkbox"
                  name="stroller1"
                  checked={filters.stroller1}
                  onChange={e => {
                    const checked = e.target.checked;
                    updateFilters(_filters => ({
                      ..._filters,
                      stroller1: checked
                    }));
                  }}
                />
                <div className="filterLabel">
                  <label htmlFor="stroller1">Doable with a bit of effort</label>
                  <div>
                    You’ll need to maneuver yourself around tight spots.
                  </div>
                </div>
              </div>

              <div className="filterRow">
                <input
                  type="checkbox"
                  name="stroller2"
                  checked={filters.stroller2}
                  onChange={e => {
                    const checked = e.target.checked;
                    updateFilters(_filters => ({
                      ..._filters,
                      stroller2: checked
                    }));
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
                    updateFilters(_filters => ({
                      ..._filters,
                      stroller3: checked
                    }));
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
          )}
        </div>

        <div className="filterSection">
          <div className="filterSectionTitle">
            Ease of nursing
            <button
              type="button"
              className="filterExpandButton"
              onClick={() => updateNursingExpanded(!nursingExpanded)}
            >
              <img src={nursingExpanded ? chevronUp : chevronDown} alt="" />
            </button>
          </div>
          {nursingExpanded && (
            <div>
              <div className="filterRow">
                <input
                  type="checkbox"
                  name="nursing1"
                  checked={filters.nursing1}
                  onChange={e => {
                    const checked = e.target.checked;
                    updateFilters(_filters => ({
                      ..._filters,
                      nursing1: checked
                    }));
                  }}
                />
                <div className="filterLabel">
                  <label htmlFor="nursing1">Public, but chill</label>
                  <div>
                    The venue is open and public but still has a chill vibe so
                    no creepy glares.
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
                    updateFilters(_filters => ({
                      ..._filters,
                      nursing2: checked
                    }));
                  }}
                />
                <div className="filterLabel">
                  <label htmlFor="nursing2">Some privacy</label>
                  <div>
                    While there isn’t a dedicated room you can find some privacy
                    on a corner seat or a quiet seat in the back.
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
                    updateFilters(_filters => ({
                      ..._filters,
                      nursing3: checked
                    }));
                  }}
                />
                <div className="filterLabel">
                  <label htmlFor="nursing3">Dedicated private space</label>
                  <div>There is a dedicated space for nursing.</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FiltersOverlay;
