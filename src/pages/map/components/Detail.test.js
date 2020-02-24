import React from "react";
import { cleanup, render } from "@testing-library/react";
import Detail from "./Detail";

afterEach(cleanup);

const testLocation = {
  id: "1",
  name: "Te Aro",
  address: "983 Queen St E, Toronto, ON M4M 1K2",
  latitude: 43.6613421,
  longitude: -79.3384474,
  category: "Eats",
  nursing: 1,
  stroller: 2,
  changeTable: true,
  indoor: true,
  outdoor: true,
  description:
    "Very popular spot for parents and their babies. Large patio with ample seating and stroller space as well as a big umbrella that offers some shade. High chairs available. ",
  strollerTips:
    "Plenty of stroller space on the patio. Indoors, there is space for strollers but it can quickly get crowded on a weekend. Doors are not accessible but access to everything is at ground level, including the bathrooms.",
  nursingTips: "All seating is exposed but vibe of the cafe is very relaxed.",
  website: "https://www.pilotcoffeeroasters.com/queen-st-e/",
  instagram: "http://instagram.com/pilotcoffee",
  facebook: "http://facebook.com/pilotcoffee",
};

const testCategoryColor = { backgroundColor: "#F7A79A", color: "#374B5B" };

describe("Detail", () => {
  it("renders heading", () => {
    const { getByText } = render(
      <Detail location={testLocation} categoryColor={testCategoryColor} />
    );

    expect(getByText(/eats/i)).toBeTruthy();
  });
});
