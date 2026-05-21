// export const dynamic = 
import React from "react";
import { Chip, Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import CancelBooking from "@/components/CancelBooking";
import { Eye } from "@gravity-ui/icons";
import { fetchBookings } from "@/lib/data/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const MyBookingsPage = async () => {

    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    const bookings = await fetchBookings(token);

    console.log(bookings);

    const isFutureBooking = (date, startTime) => {
        const now = new Date();
        const bookingDateTime = new Date(`${date}T${startTime}`);
        return bookingDateTime > now;
    };

    return (
        <div className="min-h-screen bg-[#F4FCFD] px-4 py-10">
            <div className="max-w-5xl mx-auto">

                {/* HEADER */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-5xl font-black text-[#3F4255]">
                        My Bookings
                    </h1>
                    <p className="text-sm text-[#667085] mt-2">
                        Manage your booked study room
                    </p>
                </div>

                {/* LIST */}
                <ul className="list bg-white rounded-[32px] border border-[#d8edf0] shadow-sm overflow-hidden">

                    <li className="p-5 pb-3 text-xs uppercase tracking-[0.25em] text-[#14B8A6] font-black">
                        Your Recent Room Bookings
                    </li>

                    {bookings.map((booking, index) => {

                        const status = booking.status || "confirmed";

                        return (
                            <li
                                key={booking._id}
                                className="list-row px-5 py-5 border-t border-[#eef7f8] hover:bg-[#F8FEFF] transition-all duration-300"
                            >

                                {/* NUMBER */}
                                <div className="text-3xl font-thin opacity-30 tabular-nums text-[#3F4255] w-10">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                {/* IMAGE */}
                                <div>
                                    <Image
                                        src={booking.image || "https://via.placeholder.com/70"}
                                        alt={booking.name || "room"}
                                        width={70}
                                        height={70}
                                        className="size-16 rounded-2xl object-cover border border-[#d8edf0]"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="list-col-grow">

                                    <div className="flex flex-wrap items-center gap-2">

                                        <h2 className="font-black text-[#3F4255] text-lg">
                                            {booking.name}
                                        </h2>

                                        <Chip
                                            size="sm"
                                            className={
                                                status === "confirmed"
                                                    ? "bg-green-100 text-green-700 border border-green-200 capitalize"
                                                    : "bg-red-100 text-red-600 border border-red-200 capitalize"
                                            }
                                        >
                                            {status}
                                        </Chip>

                                    </div>

                                    <div className="text-xs uppercase font-bold tracking-wide text-[#667085] mt-1">
                                        {new Date(booking.date).toDateString()}
                                    </div>

                                    <div className="flex flex-wrap items-center gap-2 mt-3">

                                        <div className="px-3 py-1 rounded-full bg-[#F0FBFC] border border-[#d8edf0] text-xs font-semibold text-[#3F4255]">
                                            Floor {booking.floor}
                                        </div>

                                        <div className="px-3 py-1 rounded-full bg-[#F0FBFC] border border-[#d8edf0] text-xs font-semibold text-[#3F4255]">
                                            Capacity {booking.capacity}
                                        </div>

                                        <div className="px-3 py-1 rounded-full bg-[#ECFEFF] border border-[#99F6E4] text-xs font-bold text-[#0F766E]">
                                            {booking.startTime} - {booking.endTime}
                                        </div>

                                        <div className="px-3 py-1 rounded-full bg-[#ECFEFF] border border-[#99F6E4] text-xs font-bold text-[#0F766E]">
                                            $ {booking.totalPrice || 0}
                                        </div>

                                    </div>

                                </div>

                                {/* PRICE */}
                                <div className="hidden md:flex flex-col items-end mr-2">
                                    <span className="text-[11px] uppercase tracking-wider text-[#14B8A6] font-bold">
                                        Total
                                    </span>
                                    <h2 className="text-2xl font-black text-[#14B8A6]">
                                        ${booking.totalPrice || 0}
                                    </h2>
                                </div>

                                {/* ACTIONS */}
                                <div className="flex items-center gap-2">

                                    <Link href={`/rooms/${booking.roomId}`}>
                                        <Button className="rounded-2xl bg-[#14B8A6] hover:bg-[#0F766E] text-white text-sm font-semibold transition-all">
                                            <Eye /> View
                                        </Button>
                                    </Link>

                                    {/* ALWAYS SHOW CANCEL */}
                                    <CancelBooking bookingId={booking._id} token={token} />

                                </div>

                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default MyBookingsPage;