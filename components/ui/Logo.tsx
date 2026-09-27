/** The wordmark. White-fill SVG, meant to sit directly on a dark photo. */
export default function Logo({ className = "" }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/logo.svg" alt="Tajči" className={className} />;
}
