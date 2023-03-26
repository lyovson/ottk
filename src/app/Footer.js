export default function Header() {
  return (
    <footer className="flex justify-around text-center text-xl bg-stone-900 bg-opacity-80 w-screen p-4 ">
      <p>
        <span className="font-heading text-2xl text-yellow-600">
          Hooligan Studios
        </span>{" "}
        2023. All rights reserved &copy;
      </p>
      <p>
        site by{" "}
        <span className="font-heading text-2xl text-yellow-600">
          <a href="https://lyovson.com">Lyovson</a>
        </span>
      </p>
    </footer>
  );
}
