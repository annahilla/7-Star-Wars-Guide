interface TextMessageProps {
  children: React.ReactNode;
}

const TextMessage = ({ children }: TextMessageProps) => {
  return <p className="text-neutral-400 m-auto text-center py-4">{children}</p>;
};

export default TextMessage;
