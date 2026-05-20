"use client";

import { deleteRoom } from "@/lib/actions";
import {
    AlertDialog,
    Button
} from "@heroui/react";



export default function DeleteRoomModal({ room, token }) {

    const handleDelete = async () => {
        await deleteRoom(room._id, token);
        
    };

    return (
        <AlertDialog>
            <Button variant="danger" size="sm">
                Delete
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">

                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Delete {room.name}?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>
                            This will permanently delete this room.
                        </AlertDialog.Body>

                        <AlertDialog.Footer>

                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>

                            <Button
                                slot="close"
                                onClick={handleDelete}
                                variant="danger"
                            >
                                Confirm Delete
                            </Button>

                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}