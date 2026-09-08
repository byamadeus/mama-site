import { Bebas_Neue } from "next/font/google";
import { Mail } from "lucide-react";
import { SiInstagram, SiFacebook, SiYoutube, SiPatreon } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tajcicameron/?hl=en",
    Icon: SiInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/tajci.cameron/",
    Icon: SiFacebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tatiana-cameron/",
    Icon: FaLinkedin,
  },
  {
    label: "Patreon",
    href: "https://www.patreon.com/WakingUP",
    Icon: SiPatreon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/c/TajciCameron-TYchi",
    Icon: SiYoutube,
  },
  {
    label: "Email",
    href: "mailto:Team.Tajci@TatianaCameron.com",
    Icon: Mail,
  },
] as const;

export default function MicrositeFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black px-6 py-8 sm:px-10 sm:py-10">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-white/70 transition-colors hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <a
          href="#"
          className={`${bebasNeue.className} rounded-full border border-white/30 px-6 py-2 text-lg tracking-wide text-white transition-colors hover:border-white hover:bg-white hover:text-black`}
        >
          Join the Newsletter
        </a>
      </div>

      <p
        className={`${bebasNeue.className} mt-6 text-center text-sm tracking-wide text-white/40 sm:mt-8`}
      >
        &copy; {new Date().getFullYear()} Tajči. All rights reserved.
      </p>
    </footer>
  );
}
