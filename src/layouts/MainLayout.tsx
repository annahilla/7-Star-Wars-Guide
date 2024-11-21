import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header>
          <Header />
          <Navbar />
          <div className="hidden md:block">
            <Banner />
          </div>
        </header>
        <main className="flex-grow">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default MainLayout;
