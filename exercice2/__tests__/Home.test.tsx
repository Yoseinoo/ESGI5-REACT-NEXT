import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../src/pages/Home";

describe("Home Page", () => {
  it('should contain a H1 with text "Page"', () => {
    render(<Home />);
    
    // Get link by text
    const title = screen.getByText(/Page/i);
    
    // Check that it exists and is an anchor tag
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H1");
  });
});
