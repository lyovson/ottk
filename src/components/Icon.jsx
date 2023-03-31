import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({ icon, url }) {
  return (
    <a href={url} target="_blank" className=" h-[32px] w-[32px]">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
