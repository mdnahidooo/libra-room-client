"use client";

import React from "react";
import { Card } from "@heroui/react";
import {
    Search,
    CalendarCheck2,
    DoorOpen,
} from "lucide-react";

const steps = [
    {
        icon: <Search className="w-8 h-8 text-white" />,
        title: "Explore Rooms",
        description:
            "Browse available study rooms with detailed information, amenities, and pricing.",
    },
    {
        icon: <CalendarCheck2 className="w-8 h-8 text-white" />,
        title: "Book Instantly",
        description:
            "Reserve your preferred room easily with a smooth and secure booking process.",
    },
    {
        icon: <DoorOpen className="w-8 h-8 text-white" />,
        title: "Start Studying",
        description:
            "Enjoy a quiet, organized, and productive workspace tailored for learning.",
    },
];

const HowItWorks = () => {
    return (
        <section className="py-20 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-16">

                    <p className="text-[#14B8A6] font-semibold tracking-wide uppercase text-sm">
                        Simple Process
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
                        How LibraRoom Works
                    </h2>

                    <p className="text-slate-500 mt-5 text-lg leading-relaxed">
                        Find and reserve your ideal study room in just a few
                        simple steps.
                    </p>
                </div>

                {/* STEPS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {steps.map((step, index) => (
                        <Card
                            key={index}
                            className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl transition-all duration-300"
                        >

                            {/* STEP NUMBER */}
                            <div className="absolute top-5 right-5 text-6xl font-black text-slate-100">
                                0{index + 1}
                            </div>

                            {/* ICON */}
                            <div className="w-16 h-16 rounded-2xl bg-[#14B8A6] flex items-center justify-center shadow-lg shadow-teal-500/20 mb-6">
                                {step.icon}
                            </div>

                            {/* CONTENT */}
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                {step.title}
                            </h3>

                            <p className="text-slate-500 leading-relaxed">
                                {step.description}
                            </p>

                        </Card>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;