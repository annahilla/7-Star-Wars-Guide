import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import StarshipsPage from "./pages/StarshipsPage";
import MainLayout from "./layouts/MainLayout";
import StarshipDetails from "./pages/StarshipDetailsPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getStarships } from "./redux/starshipsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      fetch("https://swapi.dev/api/starships")
          .then((response) => response.json())
          .then((data) => {
            const starships = data.results;
            dispatch(getStarships(starships))
          })
          .catch((error) => console.log(error))
  }, [])
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/starships" element={<StarshipsPage />} />
        <Route path="/starships/:name" element={<StarshipDetails />} />
        <Route index element={<HomePage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
