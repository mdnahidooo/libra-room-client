"use client";

import { Button } from "@heroui/react";
import {
    ArrowRight,
    BookOpen,
    MapPin,
    Star,
    Users,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const slides = [
    {
        title: "Find Your Perfect Study Room",
        description:
            "Browse and book quiet, private study rooms in your library. List your own room and earn with LibraRoom.",
        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Smart Spaces for Better Learning",
        description:
            "Discover modern study environments with Wi-Fi, projectors, quiet zones, and comfortable seating.",
        image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Book Rooms Anytime, Anywhere",
        description:
            "Reserve your favorite study room instantly and enjoy a seamless booking experience with LibraRoom.",
        image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    },
];

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-[#F8FAFC] via-white to-[#ECFEFF] py-12 md:py-10">

            {/* background glow */}
            <div className="absolute top-0 left-0 w-125 h-125 bg-cyan-200/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-100 h-100 bg-blue-200/20 blur-3xl rounded-full" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop
                    className="rounded-[32px]"
                >

                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-10">

                                {/* LEFT CONTENT */}
                                <div className="space-y-8">

                                    {/* badge */}
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-100 bg-cyan-50 text-[#0891B2] font-semibold text-sm shadow-sm">
                                        <Star className="w-4 h-4 fill-[#06BBCC]" />
                                        Trusted by Students & Libraries
                                    </div>

                                    {/* title */}
                                    <div className="space-y-5">

                                        <h1 className="text-4xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-[#0F172A]">
                                            {slide.title}
                                        </h1>

                                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                                            {slide.description}
                                        </p>

                                    </div>

                                    {/* buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4">

                                        <Link href="/rooms">
                                            <Button
                                                className="h-14 px-8 rounded-2xl bg-[#06BBCC] hover:bg-[#0891B2] text-white text-base font-bold shadow-[0_15px_40px_rgba(6,187,204,0.35)] group"
                                            >
                                                Explore Rooms
                                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                            </Button>
                                        </Link>

                                        <Link href="/add-room">
                                            <Button
                                                variant="bordered"
                                                className="h-14 px-8 rounded-2xl border border-[#06BBCC]/30 bg-white text-[#0F172A] font-semibold hover:bg-cyan-50"
                                            >
                                                List Your Room
                                            </Button>
                                        </Link>

                                    </div>

                                    {/* stats */}
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">

                                        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">

                                            <div className="flex items-center gap-2 text-[#06BBCC] mb-3">
                                                <BookOpen className="w-5 h-5" />
                                                <span className="font-bold text-xl">
                                                    500+
                                                </span>
                                            </div>

                                            <p className="text-sm text-slate-500">
                                                Study Rooms
                                            </p>

                                        </div>

                                        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">

                                            <div className="flex items-center gap-2 text-[#06BBCC] mb-3">
                                                <Users className="w-5 h-5" />
                                                <span className="font-bold text-xl">
                                                    10K+
                                                </span>
                                            </div>

                                            <p className="text-sm text-slate-500">
                                                Active Students
                                            </p>

                                        </div>

                                        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all col-span-2 md:col-span-1">

                                            <div className="flex items-center gap-2 text-[#06BBCC] mb-3">
                                                <MapPin className="w-5 h-5" />
                                                <span className="font-bold text-xl">
                                                    24/7
                                                </span>
                                            </div>

                                            <p className="text-sm text-slate-500">
                                                Room Access
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                {/* RIGHT IMAGE */}
                                <div className="relative">

                                    {/* glow */}
                                    <div className="absolute -inset-5 bg-linear-to-r from-cyan-300/20 to-blue-300/20 rounded-[40px] blur-3xl" />

                                    {/* image card */}
                                    <div className="relative bg-white/80 backdrop-blur-xl p-3 rounded-[32px] border border-white shadow-[0_25px_80px_rgba(15,23,42,0.12)] overflow-hidden">

                                        <div className="relative aspect-4/4 overflow-hidden rounded-[26px]">

                                            <Image
                                                src={slide.image}
                                                alt="Study Room"
                                                fill
                                                priority
                                                className="object-cover hover:scale-105 transition-transform duration-700"
                                            />

                                            {/* overlay */}
                                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                                            {/* top badge */}
                                            <div className="absolute top-5 left-5 bg-white/80 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full shadow-md">

                                                <p className="text-sm font-semibold text-[#0F172A]">
                                                    LibraRoom Workspace
                                                </p>

                                            </div>

                                            {/* floating info card */}
                                            <div className="absolute bottom-5 left-5 right-5 bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl p-5 shadow-2xl">

                                                <div className="flex items-center justify-between gap-4">

                                                    <div>

                                                        <h3 className="text-lg font-bold text-[#0F172A]">
                                                            Premium Study Space
                                                        </h3>

                                                        <p className="text-sm text-slate-500 mt-1">
                                                            Quiet • Comfortable • Modern
                                                        </p>

                                                    </div>

                                                    <div className="bg-[#06BBCC] text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                                                        Available
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>

        </section>
    );
};

export default Banner;