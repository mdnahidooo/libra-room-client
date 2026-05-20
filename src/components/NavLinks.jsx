"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ onClick }) {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Rooms", path: "/rooms" },
        { name: "Add Room", path: "/add-room" },
        { name: "My Listings", path: "/my-listings" },
        { name: "My Bookings", path: "/my-bookings" },
        { name: "About Us", path: "/about" },
    ];

    const isActive = (path) => pathname === path;

    return (
        <>
            {navLinks.map((link) => (
                <Link
                    key={link.path}
                    href={link.path}
                    onClick={onClick}
                    className={`text-sm font-medium pb-1 border-b-2 transition ${isActive(link.path)
                            ? "border-[#06BBCC] text-[#06BBCC]"
                            : "border-transparent text-[#3F4255] hover:text-[#06BBCC]"
                        }`}
                >
                    {link.name}
                </Link>
            ))}
        </>
    );
}