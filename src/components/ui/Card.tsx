interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className="bg-neutral-800 text-neutral-500 p-5">{children}</div>;
};

export default Card;
