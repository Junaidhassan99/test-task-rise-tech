const PlanCard: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="bg-white py-6 px-10 rounded-md shadow-lg flex flex-col items-center justify-evenly">
      {children}
    </div>
  );
};

export default PlanCard;
