const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-neutral-800 text-neutral-500 p-5 hover:bg-neutral-700">
      {children}
    </div>
  );
};

export default Card;
