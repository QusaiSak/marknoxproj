import Image from "next/image";
import Link from "next/link";
import QS from "../../public/Image/Qusai.png"

interface LogoProps {
  className?: string;
  imageSize?: number;
}

export function Logo({ className = "", imageSize = 50 }: LogoProps) {
  return (
    <Link 
      href="#home" 
      className={`flex items-center gap-2 group ${className}`}
    >
      <div className="relative">
        <Image
          src={QS} // Make sure to add your logo image to the public folder
          alt="Portfolio Logo"
          width={imageSize}
          height={imageSize}
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 rounded-full cyber-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
} 