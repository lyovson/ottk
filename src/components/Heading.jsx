export default function Heading({ children, className, onClick }) {
  return (
    <header
      onClick={onClick}
      className={`text-yellow-600 text-center text-5xl bg-stone-900 bg-opacity-80 font-heading w-screen p-4  shadow-lg ${className} `}
    >
      {children}
    </header>
  );
}
