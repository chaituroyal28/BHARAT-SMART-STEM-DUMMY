import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="navbar">

        {/* LOGO */}

        <Image
          src="/logo.png"
          alt="Bharat Smart STEM"
          width={120}
          height={50}
        />

        {/* NAV LINKS */}

        <div className="nav-links">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/program">PROGRAM</Link>
          <Link href="/lab-setup">STEM LAB SETUP</Link>

          <button className="contact-btn">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  )
}