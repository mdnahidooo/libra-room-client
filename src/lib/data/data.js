
// export const fetchRooms = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`);
//     const data = await res.json();

//     return data || [];
// };



export const fetchRooms = async (search = "", floor = "all", amenities = "") => {
    const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (floor && floor !== "all") params.append("floor", floor);
    if (amenities) params.append("amenities", amenities);

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms?${params.toString()}`,
        { cache: "no-store" }
    );

    return await res.json();
};



export const fetchSingleRoom = async (roomId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${roomId}`);
    const data = await res.json();

    return data || [];
};

export const fetchFeaturedRoom = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
    const data = await res.json();

    return data || [];
};


export const fetchBookings = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`);
    const data = await res.json();

    return data || [];
};


// export const fetchBookings = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
//         headers: {
//             // authorization: token ? `Bearer ${token}` : ""
//         },
//         cache: "no-store",
//     });

//     const data = await res.json();

//     console.log("BOOKING API RAW:", data);

//     if (!res.ok) return [];

//     return data?.bookings || data?.data || data || [];
// };


export const cancelBooking = async (bookingId) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`,
        {
            method: "PATCH",
            headers: {
                // authorization: `Bearer ${token}`,
                "content-type": "application/json"
            }
        }
    );

    const data = await res.json();
    return { ok: res.ok, data };
};
