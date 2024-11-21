import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="hidden md:block">
        <Banner />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
