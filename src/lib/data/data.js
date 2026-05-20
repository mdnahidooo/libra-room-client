
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


export const fetchBookings = async (token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
        headers: {
            authorization: `Bearer ${token}` || ""
        }
    });
    const data = await res.json();

    return data || [];
};
