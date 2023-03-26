import Heading from "../components/Heading.jsx";

export default function Header() {
  return (
    <Heading className="mt-10  ">
      <h1 className="text-5xl flex flex-col ">
        <span className="block text-4xl text-stone-300 font-body">
          {"Serj Gabyan's"}
        </span>
        <span className="text-9xl block text-red-800 font-heading">OTTK</span>
        <span className="block text-2xl text-stone-300 font-body">
          {'"the air, the mulberry, and the gun handle"'}
        </span>
      </h1>
    </Heading>
  );
}
