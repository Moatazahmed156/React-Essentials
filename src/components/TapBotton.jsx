export default function TapButtton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button
        onClick={onSelect}
        className={`py-2 px-6 rounded-xl transition-all duration-200 text-[#a18aba] hover:text-white hover:bg-[#1b082f] ${
          isSelected ? "bg-[#7925d3] text-white hover:bg-indigo-400" : ""
        }`}
      >
        {children}
      </button>
    </li>
  );
}
