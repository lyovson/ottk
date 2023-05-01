import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({ icon, url }) {
  return (
<<<<<<< HEAD
    <a
      href={url}
      target="_blank"
      className=" w-[32px] h-[32px] shadow-lg transition-all hover:translate-y-1 active:filter-none"
    >
=======
    <a href={url} target="_blank" className=" h-[32px] w-[32px]">
>>>>>>> beta
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
