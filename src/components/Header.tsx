import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SocialMedia from "./SocialMedia";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect, useRef, useState } from "react";
import { logoutUser } from "../redux/authActions";

const Header = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const userEmail = useSelector((state: RootState) => state.auth.email);
  const username = userEmail.replace(/@.*/, "");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      setIsDropdownOpen(false);
    }
  }, [isLoggedIn]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="my-5 flex items-center justify-between flex-col md:flex-row md:relative">
      <div className="hidden lg:flex lg:items-center lg:gap-5 lg:absolute lg:mb-10 lg:left-20">
        <SocialMedia />
      </div>
      <Link className="m-auto" to="/">
        <img className="h-24 object-cover" src={logo} alt="Star Wars Logo" />
      </Link>
      <div className="flex gap-5 text-neutral-200 font-bold mt-8 md:absolute md:mt-0 md:mb-10 md:right-20">
        {isLoggedIn ? (
          <div
            ref={dropdownRef}
            className={
              isDropdownOpen
                ? `mb-8 flex flex-col items-center w-56 md:mb-0`
                : `flex flex-col items-center w-56`
            }
          >
            <button onClick={toggleDropdown} className="relative uppercase">
              Welcome {username}
            </button>
            {isDropdownOpen && (
              <button
                onClick={handleLogout}
                className="absolute my-8 text-sm uppercase border border-neutral-800 text-neutral-400 py-2 px-10 w-56 md:my-0 md:top-8 hover:text-neutral-300"
              >
                Log Out
              </button>
            )}
          </div>
        ) : (
          <>
            <Link to="/signup" className="uppercase hover:text-neutral-100">
              Sign Up
            </Link>
            <Link
              to="/login"
              className="uppercase hover:text-neutral-100 flex gap-2"
            >
              <img
                src="https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Oneid_User-85043c6786ab.svg"
                alt="User Icon"
              />
              <span>Log In</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
