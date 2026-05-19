"use client";

import React from "react";
import { Card } from "@heroui/react";
import {
    ShieldCheck,
    Clock3,
    Wifi,
    BookOpenCheck,
} from "lucide-react";

const features = [
    {
        icon: <BookOpenCheck className="w-7 h-7 text-[#14B8A6]" />,
        title: "Focused Study Environment",
        description:
            "Book distraction-free rooms designed for deep focus, teamwork, and productive learning.",
    },
    {
        icon: <Clock3 className="w-7 h-7 text-[#14B8A6]" />,
        title: "Instant Room Booking",
        description:
            "Reserve study spaces quickly with real-time availability and smooth booking experience.",
    },
    {
        icon: <Wifi className="w-7 h-7 text-[#14B8A6]" />,
        title: "Modern Facilities",
        description:
            "Access Wi-Fi, whiteboards, projectors, power outlets, and quiet study zones.",
    },
    {
        icon: <ShieldCheck className="w-7 h-7 text-[#14B8A6]" />,
        title: "Reliable & Secure",
        description:
            "Enjoy a secure platform with organized room management and trusted booking flow.",
    },
];

const WhyChooseLibraRoom = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <p className="text-[#14B8A6] font-semibold tracking-wide uppercase text-sm">
                        Why Choose Us
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 leading-tight">
                        Designed For Modern
                        <span className="text-[#14B8A6]"> Learning Spaces</span>
                    </h2>

                    <p className="text-slate-500 mt-5 text-lg leading-relaxed">
                        LibraRoom helps students and libraries manage study
                        spaces smarter with a clean and seamless booking
                        experience.
                    </p>
                </div>

                {/* FEATURES */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="border border-slate-200 bg-white rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#14B8A6]/10 flex items-center justify-center mb-5">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-slate-500 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </Card>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default WhyChooseLibraRoom;