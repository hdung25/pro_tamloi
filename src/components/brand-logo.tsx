import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
  width?: number;
};

export function BrandLogo({ className = "", width = 110 }: Props) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Tâm Lợi Foods">
      <Image
        src="/images/logo-tamloi.png"
        alt="Tâm Lợi Foods"
        width={width}
        height={Math.round(width * 0.95)}
        priority
        className="h-auto"
        style={{ width: `${width}px` }}
      />
    </Link>
  );
}
