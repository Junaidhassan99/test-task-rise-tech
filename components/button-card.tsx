const ButtonCard: React.FC<{
  children: React.ReactNode;
  backgroundColor?: string;
}> = ({ children, backgroundColor = "primary-background-color" }) => {
  return (
    <button className={`${backgroundColor} rounded-sm px-6 py-1`}>
      {children}
    </button>
  );
};

export default ButtonCard;
