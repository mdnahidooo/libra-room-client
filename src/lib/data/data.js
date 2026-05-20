
export const fetchRooms = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`);
    const data = await res.json();

    return data || [];
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
