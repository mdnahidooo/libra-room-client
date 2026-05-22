"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaUsers, FaArrowRight } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { Chip, Button } from "@heroui/react";

export default function RoomCard({ room }) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(1,68,104,0.08)] transition-all duration-300 flex flex-col h-full"
        >
            {/* IMAGE SECTION WITH GRADIENT OVERLAY */}
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={room?.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle dark gradient overlay to make top badges and text pop */}
                <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-transparent" />

                {/* BADGES CONTAINER */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    {/* FLOOR */}
                    <div className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-2xl text-xs font-medium text-[#3F4255] flex items-center gap-1.5 shadow-sm">
                        <MdMeetingRoom className="text-[#06BBCC] text-sm" />
                        <span>Fl {room.floor}</span>
                    </div>

                    {/* CAPACITY */}
                    <div className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-2xl text-xs font-semibold text-[#014468] flex items-center gap-1.5 shadow-sm">
                        <FaUsers className="text-[#06BBCC]" />
                        <span>{room.capacity} Max</span>
                    </div>
                </div>
            </div>

            {/* CONTENT CAPACITY */}
            <div className="p-6 flex flex-col flex-1 justify-between bg-linear-to-b from-white to-[#FAFCFD]">
                <div>
                    {/* TITLE */}
                    <h2 className="text-xl font-bold text-[#3F4255] tracking-tight group-hover:text-[#014468] transition-colors duration-200 line-clamp-1">
                        {room.name}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="mt-2.5 text-sm text-gray-500/90 leading-relaxed line-clamp-2">
                        {room.description}
                    </p>

                    {/* AMENITIES */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                        {room.amenities.slice(0, 3).map((item, index) => (
                            <Chip
                                key={index}
                                size="sm"
                                variant="flat"
                                className="bg-[#06BBCC]/5 text-[#014468] font-medium border border-[#06BBCC]/10 px-1"
                            >
                                {item}
                            </Chip>
                        ))}

                        {room.amenities.length > 3 && (
                            <Chip
                                size="sm"
                                variant="flat"
                                className="bg-gray-100 text-gray-600 font-medium px-1"
                            >
                                +{room.amenities.length - 3} more
                            </Chip>
                        )}
                    </div>
                </div>

                {/* FOOTER */}
                <div className="mt-6 pt-4 border-t border-gray-100/80 flex items-center justify-between">
                    <div>
                        <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Hourly Rate</p>
                        <p className="text-2xl font-bold text-[#014468] flex items-baseline">
                            ${room.hourlyRate}
                            <span className="text-xs text-gray-400 font-normal ml-0.5">/hr</span>
                        </p>
                    </div>

                    <Link href={`/rooms/${room._id}`}>
                        <Button
                            size="md"
                            className="bg-[#014468] text-white font-medium hover:bg-[#06BBCC] rounded-xl px-4 min-w-0 transition-all duration-300 group-hover:gap-3 gap-2 flex items-center shadow-md shadow-[#014468]/10"
                        >
                            <span>Details</span>
                            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}