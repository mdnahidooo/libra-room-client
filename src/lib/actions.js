"use server";

import { revalidatePath } from "next/cache";

export const deleteRoom = async (roomId, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${roomId}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token}` || ""
        }
    });

    const data = await res.json();

    if (data.deletedCount > 0) {
        revalidatePath("/my-listings");
        revalidatePath("/rooms");
    }

    return data;
};