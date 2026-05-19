import { fetchFeaturedRoom } from "@/lib/data/data";
import React from "react";
import RoomCard from "@/components/RoomCard"; // adjust path if needed
import Link from "next/link";

const Featured = async () => {
    const featuredRooms = await fetchFeaturedRoom();

    return (
        <section className="py-20 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <p className="text-[#14B8A6] font-semibold uppercase tracking-wide text-sm">
                        Top Picks
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
                        Featured Study Rooms
                    </h2>

                    <p className="text-slate-500 mt-4 text-lg">
                        Handpicked rooms with the best facilities, comfort,
                        and availability for focused learning.
                    </p>
                </div>

                {/* CONTENT */}
                {featuredRooms?.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredRooms.map((room) => (
                            <div
                                key={room._id}
                                className="hover:-translate-y-1 transition-transform duration-300"
                            >
                                <RoomCard room={room} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
                        <h3 className="text-xl font-semibold text-slate-800">
                            No Featured Rooms Found
                        </h3>
                        <p className="text-slate-500 mt-2">
                            Please check back later for updated listings.
                        </p>
                    </div>
                )}

                {/* CTA */}
                <div className="text-center mt-14">
                    <Link
                        href="/rooms"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#14B8A6] text-white font-semibold shadow-lg hover:bg-[#0F766E] transition"
                    >
                        View All Rooms
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Featured;