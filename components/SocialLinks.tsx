import { Mail } from "lucide-react";
import { SiInstagram, SiFacebook, SiYoutube, SiPatreon } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import SocialIcon from "./ui/SocialIcon";
import { LINKS } from "@/lib/links";

const SOCIALS = [
  { label: "Instagram", href: LINKS.instagram, Icon: SiInstagram },
  { label: "Facebook", href: LINKS.facebook, Icon: SiFacebook },
  { label: "LinkedIn", href: LINKS.linkedin, Icon: FaLinkedin },
  { label: "Patreon", href: LINKS.patreon, Icon: SiPatreon },
  { label: "YouTube", href: LINKS.youtube, Icon: SiYoutube },
  { label: "Email", href: LINKS.email, Icon: Mail },
] as const;

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      {SOCIALS.map(({ label, href, Icon }) => (
        <SocialIcon key={label} href={href} label={label} Icon={Icon} />
      ))}
    </div>
  );
}
