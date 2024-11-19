import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  const hoverStyles =
    " hover:shadow-[0px_0px_6px_2px_rgba(255,223,0,0.6)] hover:shadow-neutral-500";

  return (
    <div className="flex items-center gap-5">
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
  );
};

export default SocialMedia;
