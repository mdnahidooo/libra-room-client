"use client";

import React from "react";
import { Button } from "@heroui/react";
import { ArrowRight, Sparkles, Flame, Shield, CalendarRange } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slidesData = [
    {
        tag: "Premium Spaces",
        icon: <Sparkles className="w-4 h-4 text-[#06BBCC]" />,
        title: "Find Your Perfect Study Room",
        desc: "Browse and book quiet, private study rooms in your library. List your own room and earn with LibraRoom.",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
    },
    {
        tag: "Smart Learning",
        icon: <Flame className="w-4 h-4 text-orange-500" />,
        title: "Smart Spaces for Better Learning",
        desc: "Discover modern study environments with Wi-Fi, projectors, quiet zones, and comfortable seating.",
        img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop"
    },
    {
        tag: "Instant Access",
        icon: <Shield className="w-4 h-4 text-emerald-500" />,
        title: "Book Rooms Anytime, Anywhere",
        desc: "Reserve your favorite study room instantly and enjoy a seamless booking experience with LibraRoom.",
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
    }
];

const Banner = () => {
    return (
        <section className="relative min-h-[75vh] flex items-center bg-slate-950 py-12 md:py-30 overflow-hidden">

           
            <div className="absolute top-0 left-0 w-75 h-75 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-75 h-75 bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 w-full relative z-10">

                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        bulletActiveClass: "swiper-pagination-bullet-active !bg-[#06BBCC] !w-6 !rounded-full transition-all duration-300",
                    }}
                    modules={[Autoplay, Pagination]}
                    className="w-full pb-12"
                >
                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[55vh]">

                                
                                <div className="lg:col-span-6 space-y-5 text-left order-2 lg:order-1">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-slate-800 bg-slate-900/80 text-cyan-400 font-semibold text-xs tracking-wider">
                                        {slide.icon}
                                        {slide.tag}
                                    </div>

                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                                        {slide.title}
                                    </h1>

                                    <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-xl">
                                        {slide.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-4 pt-2 mb-12">
                                        <Link href="/rooms" className="w-full sm:w-auto">
                                            <Button className="w-full sm:w-auto h-11 px-6 rounded-xl bg-[#06BBCC] hover:bg-[#05a4b3] text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all">
                                                Explore Rooms
                                                <ArrowRight className="w-4 h-4 ml-1" />
                                            </Button>
                                        </Link>

                                        <Link href="/my-bookings" className="w-full sm:w-auto">
                                            <Button variant="flat" className="w-full sm:w-auto h-11 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 font-semibold text-sm transition-all flex items-center gap-2 border border-slate-800">
                                                See Your Bookings
                                                <CalendarRange className="w-4 h-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                                
                                <div className="lg:col-span-6 w-full flex justify-center order-1 lg:order-2">
                                    <div className="relative w-full max-w-125 aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                                        <Image
                                            src={slide.img}
                                            alt={slide.title}
                                            fill
                                            priority
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent" />
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