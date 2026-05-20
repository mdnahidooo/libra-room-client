
export const fetchRooms = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`);
    const data = await res.json();

    return data || [];
};

export const fetchSingleRoom = async (roomId, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${roomId}`, {
        headers: {
            authorization: `Bearer ${token}` || ""
        }
    });
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
