"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { toast } from "react-toastify";

const DeleteBooking = ({bookingId}) => {

    // const handleCancelBooking = async () => {


    //     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`, {
    //         method: "DELETE",
    //         headers: {
    //             "content-type": "application/json",
    //         }
    //     })

    //     const data = await res.json();

    //     // window.location.reload();

    // };
    

    const handleCancelBooking = async () => {

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            }
        });

        const data = await res.json();

        if (res.ok) {
            toast.success("Booking cancelled successfully!");

            // better than window reload (soft refresh)
            window.location.reload();

        } else {
            toast.error(data?.message || "Failed to cancel booking");
        }
    };


    return (
        <div>
            <AlertDialog>
                <Button
                    className={"rounded-2xl border-red-500 text-red-500 text-sm font-semibold transition-all"}
                    variant="outline"
                >
                    <TrashBin /> Cancel
                </Button>

                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>
                                    Cancel booking permanently?
                                </AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleCancelBooking} slot="close" variant="danger">
                                    Delete
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog> 
        </div>
    );
};

export default DeleteBooking;