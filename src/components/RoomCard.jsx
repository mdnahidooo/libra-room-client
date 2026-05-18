"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { Chip, Button } from "@heroui/react";

export default function RoomCard({ room }) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group bg-white border border-[#E6EEF0] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
        >

            {/* IMAGE SECTION */}
            <div className="relative h-52 overflow-hidden">

                <Image
                    src={room?.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />

                {/* TOP LEFT: FLOOR */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs text-[#3F4255] flex items-center gap-1 border border-[#E6EEF0]">
                    <MdMeetingRoom className="text-[#06BBCC]" />
                    Floor {room.floor}
                </div>

                {/* TOP RIGHT: CAPACITY */}
                <div className="absolute top-3 right-3 bg-[#06BBCC] text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-sm">
                    <FaUsers />
                    {room.capacity}
                </div>
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col flex-1">

                {/* TITLE */}
                <h2 className="text-lg font-semibold text-[#3F4255] leading-snug line-clamp-1">
                    {room.name}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-2 text-sm text-[#6B7280] line-clamp-2">
                    {room.description}
                </p>

                {/* AMENITIES */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {room.amenities.slice(0, 3).map((item, index) => (
                        <Chip
                            key={index}
                            size="sm"
                            variant="flat"
                            className="bg-[#F0FBFC] text-[#06BBCC] border border-[#D9F2F5]"
                        >
                            {item}
                        </Chip>
                    ))}

                    {room.amenities.length > 3 && (
                        <Chip
                            size="sm"
                            variant="flat"
                            className="bg-[#F3F4F6] text-[#3F4255]"
                        >
                            +{room.amenities.length - 3} more
                        </Chip>
                    )}
                </div>

                {/* FOOTER */}
                <div className="mt-5 flex items-center justify-between">

                    <div>
                        <p className="text-xs text-gray-500">Hourly Rate</p>
                        <p className="text-lg font-semibold text-[#06BBCC]">
                            ${room.hourlyRate}
                            <span className="text-xs text-gray-500 font-normal">
                                /hr
                            </span>
                        </p>
                    </div>

                    <Link href={`/rooms/${room._id}`}>
                        <Button
                            size="sm"
                            className="bg-[#06BBCC] text-white hover:bg-[#0499aa] rounded-lg"
                        >
                            View Details
                        </Button>
                    </Link>

                </div>

            </div>
        </motion.div>
    );
}