"use client";

import { useEffect, useState } from "react";
import RoomCard from "@/components/RoomCard";
import { FaHome } from "react-icons/fa";
import { fetchRooms } from "@/lib/data/data";

export default function AllRoomPage({ initialRooms }) {
    const [rooms, setRooms] = useState(initialRooms || []);

    const [search, setSearch] = useState("");
    const [floor, setFloor] = useState("all");

    // FETCH DATA WHEN SEARCH/FILTER CHANGES
    useEffect(() => {
        const delay = setTimeout(async () => {
            const data = await fetchRooms(search, floor);
            setRooms(data);
        }, 400);

        return () => clearTimeout(delay);
    }, [search, floor]);

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

            {/* SEARCH + FILTER */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 mb-8">

                {/* SEARCH */}
                <input
                    type="text"
                    placeholder="Search rooms..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border border-[#06BBCC] rounded-lg px-4 py-2 w-full md:w-1/2 outline-none bg-white"
                />

                {/* FILTER */}
                <select
                    value={floor}
                    onChange={(e) => setFloor(e.target.value)}
                    className="border border-[#06BBCC] rounded-lg px-3 py-2 w-full md:w-48 text-[#3F4255] bg-white"
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

                {rooms?.map((room) => (
                    <RoomCard key={room._id} room={room} />
                ))}

            </div>

            {/* EMPTY STATE */}
            {rooms?.length === 0 && (
                <div className="flex flex-col items-center justify-center mt-20 text-center">
                    <FaHome className="text-3xl text-[#014468] mb-4" />

                    <h3 className="text-xl font-semibold text-[#3F4255]">
                        No Rooms Found
                    </h3>

                    <p className="text-sm text-[#667085] mt-2">
                        Try changing search or filter
                    </p>
                </div>
            )}

        </div>
    );
}