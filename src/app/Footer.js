import Icon from "../components/Icon.jsx";
import { socials } from "../data/socials.js";

export default function Header() {
  return (
    <footer className="flex justify-around text-center text-xl bg-stone-900 bg-opacity-80 w-screen p-4 ">
      <section className=" flex justify-center gap-4 text-5xl">
        {socials.map(({ icon, url, name }) => (
          <Icon key={name} icon={icon} url={url} />
        ))}
      </section>
      <p>
        2023{" "}
        <span className="font-heading text-2xl underline">
          Hooligan Studios
        </span>{" "}
        &copy;
      </p>
      <p>
        site by{" "}
        <span className="font-heading text-2xl underline">
          <a href="https://lyovson.com">Lyovson</a>
        </span>
      </p>
    </footer>
  );
}
