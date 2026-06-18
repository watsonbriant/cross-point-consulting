import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Cross Point Consulting"
      width={942}
      height={216}
      className="brand__logo"
      priority
    />
  );
}
