export default function Heading({ children, className, onClick }) {
  return (
    <header onClick={onClick} className={` w-full   ${className} `}>
      {children}
    </header>
  );
}
