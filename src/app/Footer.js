import Icon from "../components/Icon.jsx";
import { socials } from "../data/socials.js";

export default function Header() {
  return (
    <footer className="flex w-screen flex-wrap justify-evenly gap-4  bg-stone-900 bg-opacity-80 p-4 text-center text-xl ">
      <section className="flex min-w-[200px] justify-center gap-4 text-5xl">
        {socials.map(({ icon, url, name }) => (
          <Icon key={name} icon={icon} url={url} />
        ))}
      </section>
      <p className="min-w-[200px]">
        2023{" "}
        <span className="font-heading text-2xl underline">
          Hooligan Studios
        </span>{" "}
        &copy;
      </p>
      <p className="min-w-[200px]">
        site by{" "}
        <span className="font-heading text-2xl underline">
          <a href="https://lyovson.com">Lyovson</a>
        </span>
      </p>
    </footer>
  );
}
