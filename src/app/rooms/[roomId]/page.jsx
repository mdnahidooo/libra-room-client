import Image from "next/image";
import { Card, Chip } from "@heroui/react";
import { FaUsers } from "react-icons/fa";
import { MdMeetingRoom, MdOutlineAttachMoney } from "react-icons/md";
import { fetchRooms, fetchSingleRoom } from "@/lib/data/data";
import BookingModal from "@/components/BookingModal";

export async function generateMetadata({ params }) {
    const rooms = await fetchRooms();

    const { roomId } = await params;

    const room = rooms.find((room) => room._id === roomId);

    if (!room) {
        return {
            title: "Room Not Found - LibraRoom",
            description: "The study room you are looking for does not exist.",
        };
    }

    return {
        title: `${room.name} | LibraRoom`,
        description: room.description,
        keywords: [
            "library room booking",
            "study room",
            "university room",
            ...room.amenities,
        ].join(", "),
    };
}

const RoomDetailPage = async ({ params }) => {
    const { roomId } = await params;

    const room = await fetchSingleRoom(roomId);

    if (!room) {
        return (
            <div className="min-h-screen flex items-center justify-center text-[#3F4255]">
                Room not found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F0FBFC] flex items-center justify-center px-4 py-10">

            <Card className="w-full max-w-6xl overflow-hidden border border-[#d8edf0] rounded-3xl shadow-xl">

                <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* LEFT IMAGE SECTION */}
                    <div className="relative h-80 md:h-full">
                        <Image
                            src={room.image}
                            alt={room.name}
                            fill
                            className="object-cover rounded-2xl"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />

                        <div className="absolute top-5 left-5">
                            <Chip className="bg-white/90 text-[#3F4255] border border-[#d8edf0]">
                                Floor {room.floor}
                            </Chip>
                        </div>

                        <div className="absolute bottom-5 left-5">
                            <Chip className="bg-[#06BBCC] text-white shadow-lg flex items-center gap-1">
                                <FaUsers className="text-sm" />
                                {room.capacity} Seats
                            </Chip>
                        </div>
                    </div>

                    {/* RIGHT INFO SECTION */}
                    <div className="p-8 flex flex-col justify-between">

                        <div className="space-y-5">

                            <h1 className="text-3xl font-bold text-[#3F4255] leading-snug">
                                {room.name}
                            </h1>

                            <div>
                                <p className="text-xs text-gray-500">Hourly Rate</p>
                                <p className="text-3xl font-semibold text-[#06BBCC]">
                                    ${room.hourlyRate}
                                    <span className="text-xs text-gray-500 font-normal">
                                        /hr
                                    </span>
                                </p>
                            </div>

                            {/* META CHIPS */}
                            <div className="flex flex-wrap gap-2">
                                <Chip className="bg-[#F0FBFC] border border-[#d8edf0] text-[#3F4255]">
                                    <MdMeetingRoom className="mr-1 text-[#06BBCC]" />
                                    Floor {room.floor}
                                </Chip>

                                <Chip className="bg-[#F0FBFC] border border-[#d8edf0] text-[#3F4255]">
                                    <FaUsers className="mr-1 text-[#06BBCC]" />
                                    {room.capacity} People
                                </Chip>
                            </div>

                            <p className="text-[#3F4255] leading-relaxed text-sm md:text-base">
                                {room.description}
                            </p>

                            <div>
                                <p className="font-semibold text-[#3F4255] mb-2">
                                    Amenities
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {room.amenities.map((item, i) => (
                                        <Chip
                                            key={i}
                                            className="bg-white border border-[#d8edf0] text-[#3F4255] hover:bg-[#06BBCC] hover:text-white"
                                        >
                                            {item}
                                        </Chip>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM CTA */}
                        <div className="mt-8">

                            {/* ONLY ADDITION (BOOKING COUNT UI) */}
                            <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FBFC] border border-[#d8edf0] hover:bg-[#E6FAFB] transition">
                                <span className="w-2 h-2 rounded-full bg-[#06BBCC] animate-pulse"></span>

                                <p className="text-sm text-[#3F4255] font-medium">
                                    {room.bookingCount || 0} bookings completed
                                </p>
                            </div>

                            <BookingModal room={room}></BookingModal>

                            <p className="text-xs text-center text-gray-500 mt-3">
                                Instant booking • No conflicts • Secure system
                            </p>
                        </div>

                    </div>
                </div>
            </Card>
        </div>
    );
};

export default RoomDetailPage;