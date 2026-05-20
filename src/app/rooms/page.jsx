"use client";

import { useEffect, useState } from "react";
import RoomCard from "@/components/RoomCard";
import { FaHome } from "react-icons/fa";
import { fetchRooms } from "@/lib/data/data";

export default function AllRoomPage() {
    const [rooms, setRooms] = useState([]);

    const [search, setSearch] = useState("");
    const [floor, setFloor] = useState("all");

    // pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const roomsPerPage = 6;

    // data fetching
    useEffect(() => {
        const delay = setTimeout(async () => {
            const data = await fetchRooms(search, floor);
            setRooms(data);
            setCurrentPage(1); // reset page when search/filter changes
        }, 400);

        return () => clearTimeout(delay);
    }, [search, floor]);

    // ---------------- main logic ----------------

    const indexOfLastRoom = currentPage * roomsPerPage;
    const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;

    const currentRooms = rooms?.slice(indexOfFirstRoom, indexOfLastRoom);

    const totalPages = Math.ceil((rooms?.length || 0) / roomsPerPage);

    const goToPage = (page) => {
        setCurrentPage(page);
    };


    return (
        <div className="min-h-screen bg-[#F0FBFC] px-6 py-10">

            {/* HEADER */}
            <div className="max-w-6xl mx-auto mb-8">
                <h1 className="text-3xl font-bold text-[#3F4255]">
                    Available Study Rooms
                </h1>
            </div>

            {/* SEARCH + FILTER */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 mb-8">

                <input
                    type="text"
                    placeholder="Search rooms..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border border-[#06BBCC] rounded-lg px-4 py-2 w-full md:w-1/2 bg-white"
                />

                <select
                    value={floor}
                    onChange={(e) => setFloor(e.target.value)}
                    className="border border-[#06BBCC] rounded-lg px-3 py-2 w-full md:w-48 bg-white"
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

                {currentRooms?.map((room) => (
                    <RoomCard key={room._id} room={room} />
                ))}

            </div>

            {/* EMPTY STATE */}
            {currentRooms?.length === 0 && (
                <div className="flex flex-col items-center justify-center mt-20 text-center">
                    <FaHome className="text-3xl text-[#014468] mb-4" />

                    <h3 className="text-xl font-semibold text-[#3F4255]">
                        No Rooms Found
                    </h3>
                </div>
            )}

            {/* pagination help from AI */}
            {totalPages > 1 && (
                <div className="max-w-6xl mx-auto flex justify-center mt-10 gap-2 flex-wrap">

                    {/* Prev */}
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg border border-[#06BBCC] disabled:opacity-50"
                    >
                        Prev
                    </button>

                    {/* Pages */}
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToPage(index + 1)}
                            className={`px-4 py-2 rounded-lg border ${currentPage === index + 1
                                    ? "bg-[#06BBCC] text-white"
                                    : "border-[#06BBCC] text-[#3F4255]"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    {/* Next */}
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg border border-[#06BBCC] disabled:opacity-50"
                    >
                        Next
                    </button>

                </div>
            )}

        </div>
    );
}