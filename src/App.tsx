import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage";
import StarshipsPage from "./pages/StarshipsPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/starships" element={<StarshipsPage />} />
        <Route index element={<HomePage />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
  )
}

export default App
