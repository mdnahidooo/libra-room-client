"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import NavLinks from "./NavLinks";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const { data: session } = authClient.useSession();
    const userInfo = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
        router.push('/signin');
    };

    return (
        <nav className="bg-[#F0FBFC] border-b border-[#cfeaec] relative z-50">
            <div className="max-w-8xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* LEFT */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden text-[#3F4255] text-2xl"
                    >
                        <HiOutlineMenuAlt3 />
                    </button>

                    <Link href="/" className="leading-tight">
                        <h1 className="text-2xl font-bold text-[#3F4255]">
                            LibraRoom
                        </h1>
                        {/* <p className="text-sm text-[#06BBCC] tracking-widest">
                            University Library System
                        </p> */}
                    </Link>
                </div>

                {/* DESKTOP LINKS */}
                <div className="hidden md:flex gap-8 md:ml-20">
                    <NavLinks />
                </div>

                {/* RIGHT SIDE AUTH */}
                <div className="flex gap-3 items-center">

                    {!session ? (
                        <>
                            <Link href="/signin">
                                <button className="px-4 py-2 text-sm text-[#3F4255] font-medium rounded-full border border-[#06BBCC] hover:bg-[#06BBCC] hover:text-white transition">
                                    Login
                                </button>
                            </Link>

                            <Link href="/signup">
                                <button className="px-4 py-2 text-sm bg-[#06BBCC] text-white font-medium rounded-full hover:opacity-90 transition">
                                    Sign Up
                                </button>
                            </Link>
                        </>
                    ) : (
                        <>
                            {/* profile avatar */}
                            <Link href="/my-profile" className="flex items-center gap-2">
                                <Avatar size="sm">
                                    <Avatar.Image
                                        alt={userInfo.name}
                                        src={userInfo?.image}
                                        referrerPolicy="no-referrer"
                                    />
                                    <Avatar.Fallback>
                                        {userInfo?.name.charAt(0)}
                                    </Avatar.Fallback>
                                </Avatar>
                            </Link>

                            {/* logout btn */}
                            <Button
                                onClick={handleSignOut}
                                size="sm"
                                className="bg-[#3F4255] text-white hover:opacity-90"
                            >
                                Logout
                            </Button>
                        </>
                    )}

                </div>
            </div>

            {/* MOBILE DRAWER */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-[#F0FBFC] border-r border-[#cfeaec] shadow-lg transform transition-transform duration-300 z-50 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setOpen(false)}
                        className="text-[#3F4255] text-2xl"
                    >
                        <HiOutlineX />
                    </button>
                </div>

                <div className="flex flex-col px-6 gap-6 mt-6">
                    <NavLinks onClick={() => setOpen(false)} />
                </div>
            </div>

            {/* OVERLAY */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/20 z-40"
                />
            )}
        </nav>
    );
}