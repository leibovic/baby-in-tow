import { useState, useEffect } from "react";

export const useGetLocations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("/.netlify/functions/getLocations", {
      method: "POST"
    })
      .then(r => r.json())
      .then(response => {
        setLocations(response.locations);
      })
      .catch(err => {
        console.error(err);
      });
  }, []); // Called once to load locations state
  return { locations };
};
