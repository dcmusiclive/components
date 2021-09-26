import Link from "next/link";
export default function SetListHome() {
  return (
    <div>
      <Link href="/setlist/cap">Capitol Hill</Link>
      <Link href="/setlist/wharf">The Wharf</Link>
      <Link href="/setlist/nav">Navy Yard</Link>
      <Link href="/setlist/hst">H Street</Link>
      <Link href="/setlist/uni">Union Market</Link>
      <Link href="/setlist/uni">Ivy City</Link>
    </div>
  );
}
