export default function Heading({ children, className, onClick }) {
  return (
    <header
      onClick={onClick}
<<<<<<< HEAD
      className={`text-orange-100  text-center text-5xl bg-stone-900 bg-opacity-80 font-heading w-screen p-4  shadow-lg ${className} `}
=======
      className={` w-full bg-stone-900   bg-opacity-80 p-4 text-center font-heading text-5xl text-orange-100  shadow-lg ${className} `}
>>>>>>> beta
    >
      {children}
    </header>
  );
}
