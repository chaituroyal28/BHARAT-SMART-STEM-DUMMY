import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center pt-6 absolute top-0 z-50">
      <div className="w-[90%] bg-[#e9e6e1] border border-gray-400 rounded-[30px] px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Bharat Smart STEM"
            width={70}
            height={70}
            className="object-contain"
          />
        </div>

        {/* Menu */}
        <div className="flex gap-12 text-gray-800 font-semibold text-lg">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/program">Program</Link>
          <Link href="/lab-setup">STEM Lab Setup</Link>
        </div>

        {/* Button */}
        <button className="bg-black text-white px-6 py-2 rounded-lg">
          Contact Us
        </button>

      </div>
    </div>
  );
}