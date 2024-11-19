interface CardProps {
  children: React.ReactNode;
  bg: string;
  rounded?: string;
}

const Card = ({ children, bg, rounded }: CardProps) => {
  return <div className={`${rounded} bg-${bg} p-5`}>{children}</div>;
};

export default Card;
