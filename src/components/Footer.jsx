import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="w-full bg-[#014468] text-[#F0FBFC] border-t border-[#0b5a7a]">

            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* BRAND */}
                <div>
                    <h2 className="text-2xl font-bold text-[#F0FBFC]">
                        LibraRoom
                    </h2>

                    <p className="text-[#06BBCC] tracking-widest text-sm">
                        Library Room Booking System
                    </p>

                    <p className="mt-4 text-sm text-[#B9D6E2] leading-relaxed">
                        A smart platform for students to discover, book, and manage study rooms with real-time availability and conflict-free scheduling.
                    </p>
                </div>

                {/* USEFUL LINKS */}
                <div className="md:ml-20">
                    <h3 className="text-lg font-semibold mb-4 text-[#F0FBFC]">
                        Useful Links
                    </h3>

                    <div className="flex flex-col gap-2 text-sm">
                        <Link href="/" className="text-[#B9D6E2] hover:text-[#06BBCC] transition">
                            Home
                        </Link>
                        <Link href="/rooms" className="text-[#B9D6E2] hover:text-[#06BBCC] transition">
                            Rooms
                        </Link>
                        <Link href="/about" className="text-[#B9D6E2] hover:text-[#06BBCC] transition">
                            About
                        </Link>
                    </div>
                </div>

                {/* CONTACT + SOCIAL */}
                <div className="md:ml-25">

                    <h3 className="text-lg font-semibold mb-4 text-[#F0FBFC]">
                        Contact Information
                    </h3>

                    <p className="text-sm text-[#B9D6E2]">
                        Email: support@libraroom.com
                    </p>

                    <p className="text-sm text-[#B9D6E2] mt-2">
                        Phone: +880 1XXX-XXXXXX
                    </p>

                    {/* SOCIAL */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-3 text-[#F0FBFC]">
                            Follow Us
                        </h3>

                        <div className="flex gap-4 text-lg">
                            <Link href="https://www.facebook.com/" className="text-[#B9D6E2] hover:text-[#06BBCC] transition">
                                <FaFacebookF />
                            </Link>

                            <Link href="https://x.com/" className="text-[#B9D6E2] hover:text-[#06BBCC] transition">
                                <FaXTwitter />
                            </Link>

                            <Link href="https://www.linkedin.com/" className="text-[#B9D6E2] hover:text-[#06BBCC] transition">
                                <FaLinkedinIn />
                            </Link>

                            <Link href="https://www.instagram.com/" className="text-[#B9D6E2] hover:text-[#06BBCC] transition">
                                <FaInstagram />
                            </Link>

                            <Link href="https://github.com/" className="text-[#B9D6E2] hover:text-[#06BBCC] transition">
                                <FaGithub />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="border-t border-[#0b5a7a] py-4 text-center text-sm text-[#B9D6E2]">
                © {new Date().getFullYear()} LibraRoom. All rights reserved.
            </div>

        </footer>
    );
}