"use client";

import React from "react";
import Link from "next/link";
import { Button, Card } from "@heroui/react";
import { RefreshCcw, TriangleAlert, House } from "lucide-react";

const ErrorPage = ({ error, reset }) => {

    console.log(error);

    return (
        <div className="min-h-screen bg-[#F0FBFC] flex items-center justify-center px-4 py-10">

            <Card className="w-full max-w-5xl overflow-hidden rounded-[40px] border border-[#d8edf0] bg-white shadow-xl">

                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* LEFT CONTENT */}
                    <div className="p-8 md:p-14 flex flex-col justify-center">

                        {/* BADGE */}
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600">
                            <TriangleAlert size={16} />
                            Something Went Wrong
                        </div>

                        {/* TITLE */}
                        <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight tracking-tight text-[#3F4255]">
                            Oops! An unexpected error occurred.
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="mt-5 text-sm md:text-base leading-relaxed text-[#667085] max-w-xl">
                            Something went wrong while loading this page.
                            It may be a temporary issue. Please try again
                            or return to the homepage.
                        </p>

                        {/* ERROR MESSAGE */}
                        {error?.message && (
                            <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 p-4">
                                <p className="text-xs uppercase tracking-wider text-red-500 font-bold mb-2">
                                    Error Details
                                </p>

                                <p className="text-sm text-red-600 wrap-break-word">
                                    {error.message}
                                </p>
                            </div>
                        )}

                        {/* ACTION BUTTONS */}
                        <div className="mt-8 flex flex-wrap gap-4">

                            {/* RETRY */}
                            <Button
                                onClick={() => reset()}
                                className="bg-[#14B8A6] hover:bg-[#0F766E] text-white rounded-2xl px-7 py-6 text-sm font-semibold shadow-lg shadow-teal-200/50"
                                startContent={<RefreshCcw size={16} />}
                            >
                                Try Again
                            </Button>

                            {/* HOME */}
                            <Link href="/">
                                <Button
                                    variant="bordered"
                                    className="rounded-2xl border-[#cfecef] text-[#3F4255] px-7 py-6 text-sm font-semibold"
                                    startContent={<House size={16} />}
                                >
                                    Go Home
                                </Button>
                            </Link>

                        </div>

                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative hidden lg:flex items-center justify-center overflow-hidden bg-linear-to-br from-[#ECFEFF] via-white to-[#F0FDFA] p-10">

                        {/* GLOW */}
                        <div className="absolute h-96 w-96 rounded-full bg-red-100 blur-3xl opacity-70" />

                        {/* MAIN CARD */}
                        <div className="relative z-10 w-full max-w-sm rounded-[32px] border border-white/70 bg-white/80 backdrop-blur-xl p-8 shadow-2xl">

                            {/* ICON */}
                            <div className="flex items-center justify-center">

                                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-red-50 border border-red-100">
                                    <TriangleAlert
                                        size={56}
                                        className="text-red-500"
                                    />
                                </div>

                            </div>

                            {/* TEXT */}
                            <div className="mt-8 text-center">

                                <h3 className="text-2xl font-black text-[#3F4255]">
                                    System Interrupted
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-[#667085]">
                                    We encountered an issue while processing your request.
                                    Please refresh or try again shortly.
                                </p>

                            </div>

                            {/* MINI STATUS */}
                            <div className="mt-8 grid grid-cols-2 gap-4">

                                <div className="rounded-2xl border border-[#d8edf0] bg-[#F8FAFC] p-4 text-center">
                                    <h4 className="text-2xl font-black text-[#14B8A6]">
                                        Secure
                                    </h4>

                                    <p className="mt-1 text-xs text-[#667085]">
                                        System Active
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-[#d8edf0] bg-[#F8FAFC] p-4 text-center">
                                    <h4 className="text-2xl font-black text-[#14B8A6]">
                                        Fast
                                    </h4>

                                    <p className="mt-1 text-xs text-[#667085]">
                                        Auto Recovery
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

export default ErrorPage;