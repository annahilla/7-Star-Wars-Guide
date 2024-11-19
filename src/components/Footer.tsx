import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="text-center flex flex-col items-center justify-center gap-6 my-12">
      <p className="text-sm font-semibold">More from Star Wars:</p>
      <SocialMedia />
    </footer>
  );
};

export default Footer;
