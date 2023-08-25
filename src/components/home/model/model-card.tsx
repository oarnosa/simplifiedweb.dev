const ModelCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center h-full px-12 py-6 space-y-4 text-center transition-all bg-white border-t-8 rounded-md shadow-md xl:px-16 xl:py-8 border-t-theme-secondary xl:hover:translate-x-2 xl:hover:-translate-y-2">
      {children}
    </div>
  );
};

export default ModelCard;
