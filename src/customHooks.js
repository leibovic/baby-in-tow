import { useState, useEffect } from "react";

export const useGetLocations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("/.netlify/functions/getLocations", {
      method: "POST"
    })
      .then(r => {
        const json = r.json();
        console.log(json);
        return json;
      })
      .then(response => {
        setLocations(
          response.result.values.map(location => ({
            name: location[0],
            address: location[1],
            latitude: location[2] ? parseFloat(location[2]) : 0,
            longitude: location[3] ? parseFloat(location[3]) : 0,
            category: location[4],
            nursing: location[5] ? parseInt(location[5]) : 0,
            stroller: location[6] ? parseInt(location[6]) : 0,
            changeTable: location[7] === "Y",
            indoor: location[8] === "Y",
            outdoor: location[9] === "Y",
            description: location[10],
            website: location[11]
          }))
        );
      })
      .catch(err => {
        console.error(err);
      });
  }, []); // Called once to load locations state
  return { locations };
};
