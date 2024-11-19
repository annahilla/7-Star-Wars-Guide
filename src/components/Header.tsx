import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  const hoverStyles =
    " hover:shadow-[0px_0px_6px_2px_rgba(255,223,0,0.6)] hover:shadow-neutral-500";

  return (
    <header className="my-7 flex items-center justify-between flex-col md:flex-row md:relative">
      <div className="hidden md:flex md:items-center md:gap-5 md:absolute md:mb-10 md:left-20">
        <Link target="_blank" to="https://www.tiktok.com/@starwars">
          <FaTiktok size={24} />
        </Link>
        <Link target="_blank" to="https://www.instagram.com/starwars/">
          <FaInstagram size={24} />
        </Link>
        <Link target="_blank" to="https://twitter.com/starwars">
          <FaXTwitter size={24} />
        </Link>
        <Link target="_blank" to="https://www.facebook.com/StarWars">
          <FaFacebook size={24} />
        </Link>
        <Link target="_blank" to="https://www.youtube.com/user/starwars">
          <FaYoutube size={24} />
        </Link>
        <span className="text-neutral-600">|</span>
        <Link
          className={`rounded-lg ${hoverStyles}`}
          target="_blank"
          to="https://www.starwarskids.com/"
        >
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_kids_937ed58b.svg?region=0%2C0%2C40%2C15"
            alt=""
          />
        </Link>
      </div>
      <Link className="m-auto" to="/">
        <img className="h-24 object-cover" src={logo} alt="Star Wars Logo" />
      </Link>
      <div className="flex gap-5 text-neutral-200 font-bold md:absolute mb-8 md:mb-10 md:right-20">
        <button className="uppercase hover:text-neutral-100">Sign Up</button>
        <button className="uppercase hover:text-neutral-100 flex gap-2">
          <img
            src="https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Oneid_User-85043c6786ab.svg"
            alt="User Icon"
          />
          <span>Log In</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
