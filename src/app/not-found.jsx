import Link from "next/link";
import React from "react";
import { Button, Card } from "@heroui/react";
import { ArrowLeft, SearchX } from "lucide-react";

export const metadata = {
    title: "Page Not Found | LibraRoom",
    description: "The page you are looking for does not exist in LibraRoom.",
};

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-[#F0FBFC] flex items-center justify-center px-4 py-10">

            <Card className="w-full max-w-5xl overflow-hidden rounded-[40px] border border-[#d8edf0] bg-white shadow-xl">

                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* LEFT CONTENT */}
                    <div className="p-8 md:p-14 flex flex-col justify-center">

                        {/* SMALL BADGE */}
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#b9e9ee] bg-[#F0FBFC] px-4 py-2 text-sm font-medium text-[#06BBCC]">
                            <SearchX size={16} />
                            Page Not Found
                        </div>

                        {/* TITLE */}
                        <h1 className="mt-6 text-6xl md:text-7xl font-black tracking-tight text-[#3F4255]">
                            404
                        </h1>

                        <h2 className="mt-3 text-2xl md:text-4xl font-black leading-tight text-[#3F4255]">
                            Oops! This page does not exist.
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="mt-5 text-sm md:text-base leading-relaxed text-[#667085] max-w-xl">
                            The page you are looking for may have been removed,
                            renamed, or is temporarily unavailable. Let’s get you
                            back to exploring beautiful study rooms.
                        </p>

                        {/* BUTTONS */}
                        <div className="mt-8 flex flex-wrap gap-4">

                            <Link href="/">
                                <Button className="bg-[#14B8A6] hover:bg-[#0F766E] text-white rounded-2xl px-7 py-6 text-sm font-semibold shadow-lg shadow-teal-200/50">
                                    Go Home
                                </Button>
                            </Link>

                            <Link href="/rooms">
                                <Button
                                    variant="bordered"
                                    className="rounded-2xl border-[#cfecef] text-[#3F4255] px-7 py-6 text-sm font-semibold"
                                    startContent={<ArrowLeft size={16} />}
                                >
                                    Browse Rooms
                                </Button>
                            </Link>

                        </div>

                    </div>

                    {/* RIGHT DESIGN */}
                    <div className="relative hidden lg:flex items-center justify-center bg-linear-to-br from-[#ECFEFF] via-white to-[#F0FDFA] p-10 overflow-hidden">

                        {/* BIG CIRCLE */}
                        <div className="absolute h-96 w-96 rounded-full bg-[#14B8A6]/10 blur-3xl" />

                        {/* CARD */}
                        <div className="relative z-10 w-full max-w-sm rounded-[32px] border border-white/70 bg-white/80 backdrop-blur-xl p-8 shadow-2xl">

                            <div className="flex items-center justify-center">

                                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#14B8A6]/10">
                                    <SearchX
                                        size={56}
                                        className="text-[#14B8A6]"
                                    />
                                </div>

                            </div>

                            <div className="mt-8 text-center">

                                <h3 className="text-2xl font-black text-[#3F4255]">
                                    Lost in LibraRoom?
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-[#667085]">
                                    Don’t worry — your perfect study space is still
                                    waiting for you.
                                </p>

                            </div>

                            {/* MINI STATS */}
                            <div className="mt-8 grid grid-cols-2 gap-4">

                                <div className="rounded-2xl border border-[#d8edf0] bg-[#F8FAFC] p-4 text-center">
                                    <h4 className="text-2xl font-black text-[#14B8A6]">
                                        24/7
                                    </h4>
                                    <p className="mt-1 text-xs text-[#667085]">
                                        Smart Booking
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-[#d8edf0] bg-[#F8FAFC] p-4 text-center">
                                    <h4 className="text-2xl font-black text-[#14B8A6]">
                                        100+
                                    </h4>
                                    <p className="mt-1 text-xs text-[#667085]">
                                        Study Rooms
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </Card>

        </div>
    );
};

export default NotFoundPage;