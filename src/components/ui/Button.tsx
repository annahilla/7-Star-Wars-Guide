import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  as: "link" | "button";
  to?: string;
  onClick?: () => void;
}

const Button = ({ children, as, to, onClick }: ButtonProps) => {
  const styles =
    "m-auto flex items-center justify-center w-40 uppercase bg-yellow-300 py-4 rounded-full text-black font-semibold hover:opacity-95";

    if (as === "link" && onClick) {
      throw new Error("onClick can't be used in a link (as='link')");
    }
  
    if (as === "button" && to) {
      throw new Error("to can't be used in a button (as='button')");
    }

  if (as === "link" && to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;
