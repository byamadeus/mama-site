import { bebasNeue } from "@/lib/fonts";
import { LINKS } from "@/lib/links";
import SocialLinks from "./SocialLinks";
import PillButton from "./ui/PillButton";

export default function MicrositeFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black px-6 py-8 sm:px-10 sm:py-10">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
        <SocialLinks />

        <div className="flex flex-wrap items-center justify-center gap-3">
          <PillButton href={LINKS.email}>Contact Us</PillButton>
          <PillButton href={LINKS.newsletter}>Join the Newsletter</PillButton>
        </div>
      </div>

      <p
        className={`${bebasNeue.className} mt-6 text-center text-sm tracking-wide text-white/40 sm:mt-8`}
      >
        &copy; {new Date().getFullYear()} Tajči. All rights reserved.
      </p>
    </footer>
  );
}
