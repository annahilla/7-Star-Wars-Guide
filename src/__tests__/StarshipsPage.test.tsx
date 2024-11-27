import '@testing-library/jest-dom/'
import StarshipsPage from "../pages/StarshipsPage";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMockStore, mockState } from "../utils/mockStore";
import { BrowserRouter } from 'react-router-dom';

const store = createMockStore({ 
    auth: { email: "test@test.com", isAuthenticated: true, error: null }, 
    starships: mockState.starships 
});

describe("StarshipsPage Component", () => {
  test("Renders starships correctly", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
            <StarshipsPage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("CR90 corvette", {  selector: 'h3' })).toBeInTheDocument();
  });

  test("Displays loading spinner when loading is true", async () => {
    const store = createMockStore({
      ...mockState,
      starships: { ...mockState.starships, loading: true },
    });
    render(
      <Provider store={store}>
        <BrowserRouter>
            <StarshipsPage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByRole("progress-bar")).toBeInTheDocument();
  }); 

  test("Displays error message if error exists in the state", async () => {
    const store = createMockStore({
      ...mockState,
      starships: { ...mockState.starships, error: "Error loading starships" },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
            <StarshipsPage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("Error: Error loading starships")).toBeInTheDocument();
  });

  test("Navigates to the correct starship page when clicked", async () => {
    const store = createMockStore(mockState);
    render(
      <Provider store={store}>
        <BrowserRouter>
            <StarshipsPage />
        </BrowserRouter>
      </Provider>
    );

    const starshipLink = screen.getByRole("link");
    expect(starshipLink).toHaveProperty("href", "http://localhost/CR90%20corvette");
  });
});
