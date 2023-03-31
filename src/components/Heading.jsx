export default function Heading({ children, className, onClick }) {
  return (
    <header
      onClick={onClick}
      className={`w-screen  bg-stone-900 bg-opacity-80 p-4 text-center font-heading text-5xl text-orange-100  shadow-lg ${className} `}
    >
      {children}
    </header>
  );
}
