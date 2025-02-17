export const Rectangle = ({ isBlack }: { isBlack: boolean }) => {
    return (
      <div
        className={`w-16 h-16 border border-gray-300 ${
          isBlack ? "bg-black" : "bg-white"
        }`}
      />
    );
  };