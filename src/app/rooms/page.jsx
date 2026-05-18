"use client";

import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";
import RoomCard from "@/components/RoomCard";

export default function RoomsPage() {
    const [rooms, setRooms] = useState([]);
    const [search, setSearch] = useState("");
    const [floor, setFloor] = useState("all");
    const [page, setPage] = useState(1);

    const ITEMS_PER_PAGE = 6;

    // FETCH ROOMS
    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`);
                const data = await res.json();
                setRooms(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchRooms();
    }, []);

    // FILTER ROOMS
    const filteredRooms = useMemo(() => {
        return rooms
            .filter((room) =>
                room.name.toLowerCase().includes(search.toLowerCase())
            )
            .filter((room) =>
                floor === "all" ? true : String(room.floor) === floor
            );
    }, [rooms, search, floor]);

    // PAGINATION
    const totalPages = Math.ceil(filteredRooms.length / ITEMS_PER_PAGE);

    const paginatedRooms = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;
        return filteredRooms.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredRooms, page]);

    return (
        <div className="min-h-screen bg-[#F0FBFC] px-6 py-10">

            {/* HEADER */}
            <div className="max-w-6xl mx-auto mb-8">
                <h1 className="text-3xl font-bold text-[#3F4255]">
                    Available Study Rooms
                </h1>
                <p className="text-sm text-gray-500 mt-2">
                    Book your perfect study space in LibraRoom
                </p>
            </div>

            {/* FILTERS */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 mb-8">

                {/* SEARCH */}
                <input
                    type="text"
                    placeholder="Search rooms..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                    }}
                    className="border border-[#06BBCC] rounded-lg px-4 py-2 w-full md:w-1/2 outline-none"
                />

                
                <select
                    value={floor}
                    onChange={(e) => {
                        setFloor(e.target.value);
                        setPage(1);
                    }}
                    className="border border-[#06BBCC] rounded-lg px-3 py-2 w-full md:w-48 text-[#3F4255]"
                >
                    <option value="all">All Floors</option>
                    <option value="0">Ground Floor</option>
                    <option value="1">Floor 1</option>
                    <option value="2">Floor 2</option>
                    <option value="3">Floor 3</option>
                    <option value="4">Floor 4</option>
                    <option value="5">Floor 5</option>
                </select>
            </div>

            {/* GRID */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {paginatedRooms.map((room, index) => (
                    <motion.div
                        key={room._id || index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <RoomCard room={room} />
                    </motion.div>
                ))}

            </div>

            {/* EMPTY STATE */}
            {paginatedRooms.length === 0 && (
                <div className="text-center mt-20 text-[#3F4255]">
                    No rooms found.
                </div>
            )}

            {/* PAGINATION */}
            <div className="flex justify-center mt-10 gap-2">

                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage(i + 1)}
                        className={`px-4 py-2 rounded-lg border transition
                        ${page === i + 1
                                ? "bg-[#06BBCC] text-white"
                                : "border-[#06BBCC] text-[#3F4255] hover:bg-[#06BBCC]/10"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}

            </div>

        </div>
    );
}