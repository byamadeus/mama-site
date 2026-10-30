import type { ComponentType } from "react";
import { Mail } from "lucide-react";
import { SiInstagram, SiFacebook, SiYoutube, SiPatreon } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { bebasNeue } from "@/lib/fonts";
import { LINKS } from "@/lib/links";
import SocialIcon from "@/components/ui/SocialIcon";
import PillButton from "@/components/ui/PillButton";

// Icon per platform lives in code (lucide-react for generic glyphs,
// react-icons for brand marks), never in content — see AGENTS.md's "Icons"
// section. The href for each comes straight from lib/links.ts by the same
// key, so content only ever picks which platforms to show and in what
// order.
const SOCIAL_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  instagram: SiInstagram,
  facebook: SiFacebook,
  linkedin: FaLinkedin,
  patreon: SiPatreon,
  youtube: SiYoutube,
  email: Mail,
};

type Social = { platform: keyof typeof LINKS; label: string };
type Cta = { label: string; link: keyof typeof LINKS };

type Props = Readonly<{
  socials: Social[];
  ctas: Cta[];
  copyrightName: string;
}>;

/** The socials + CTAs + copyright bar from the live microsite, as a typren
 *  slice: content picks which socials/CTAs appear and their labels, the
 *  design and every URL stay in code. */
export function MicrositeFooter({ socials, ctas, copyrightName }: Props) {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black px-6 py-8 sm:px-10 sm:py-10">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          {socials.map(({ platform, label }) => {
            const Icon = SOCIAL_ICONS[platform];
            if (!Icon) return null;
            return <SocialIcon key={platform} href={LINKS[platform]} label={label} Icon={Icon} />;
          })}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {ctas.map(({ label, link }) => (
            <PillButton key={label} href={LINKS[link]}>
              {label}
            </PillButton>
          ))}
        </div>
      </div>

      <p
        className={`${bebasNeue.className} mt-6 text-center text-sm tracking-wide text-white/40 sm:mt-8`}
      >
        &copy; {new Date().getFullYear()} {copyrightName}. All rights reserved.
      </p>
    </footer>
  );
}
