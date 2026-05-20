

import Image from "next/image";

export const metadata = {
    title: "About | LibraRoom",
    description:
        "Learn more about LibraRoom, a modern platform for booking quiet and productive study rooms in libraries.",
};

export default function AboutSection() {
    return (
        <section className="bg-[#F0FBFC] py-20 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* IMAGE SIDE */}
                <div className="relative">
                    <div className="rounded-[32px] overflow-hidden shadow-xl border border-[#d8edf0]">
                        <Image
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                            alt="About us"
                            width={600}
                            height={600}
                            className="object-cover w-full h-105"
                        />
                    </div>

                    {/* floating card */}
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-5 border border-[#d8edf0]">
                        <p className="text-3xl font-black text-[#14B8A6]">10+</p>
                        <p className="text-sm text-[#3F4255]">Years Experience</p>
                    </div>
                </div>

                {/* CONTENT SIDE */}
                <div className="space-y-6">

                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#3F4255] leading-tight">
                            We Build Smart Study Spaces for Modern Minds
                        </h2>

                        <p className="text-[#667085] mt-4 text-sm md:text-base leading-relaxed">
                            Our platform is designed to make room booking simple,
                            fast, and reliable. Whether you are studying alone or
                            collaborating with your team, we provide a seamless
                            experience with real-time availability and instant booking.
                        </p>
                    </div>

                    {/* FEATURES */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <div className="p-4 rounded-2xl bg-white border border-[#d8edf0]">
                            <h4 className="font-bold text-[#3F4255]">Smart Booking</h4>
                            <p className="text-xs text-[#667085] mt-1">
                                Real-time availability with zero conflict system
                            </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-[#d8edf0]">
                            <h4 className="font-bold text-[#3F4255]">Secure System</h4>
                            <p className="text-xs text-[#667085] mt-1">
                                Safe authentication and protected bookings
                            </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-[#d8edf0]">
                            <h4 className="font-bold text-[#3F4255]">Modern UI</h4>
                            <p className="text-xs text-[#667085] mt-1">
                                Clean and smooth user experience
                            </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-[#d8edf0]">
                            <h4 className="font-bold text-[#3F4255]">Fast Access</h4>
                            <p className="text-xs text-[#667085] mt-1">
                                Book rooms in just a few clicks
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}