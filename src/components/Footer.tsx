import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center gap-6 my-12">
      <p className="text-sm font-semibold">More from Star Wars:</p>
      <SocialMedia />
    </div>
  );
};

export default Footer;
