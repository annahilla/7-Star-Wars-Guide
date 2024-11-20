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
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import AuthListener from "./utils/AuthListener";

function App() {
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route element={<ProtectedRoute canActivate={isLoggedIn} redirectPath="/login" />}>
          <Route path="/starships" element={<StarshipsPage />} />
          <Route path="/starships/:name" element={<StarshipDetails />} />
        </Route>
        <Route element={<ProtectedRoute canActivate={!isLoggedIn} redirectPath="/" />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <AuthListener />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
