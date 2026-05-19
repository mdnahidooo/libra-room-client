import { fetchRooms } from "@/lib/data/data";
import React from "react";
import Link from "next/link";
import {
    Button,
    Table,
    Card,
} from "@heroui/react";
import { Trash2, Eye, Pencil } from "lucide-react";
import DeleteRoomModal from "@/components/DeleteRoomModal";

const MyListingsPage = async () => {
    const rooms = await fetchRooms();
    const myRooms = rooms;

    return (
        <div className="min-h-screen bg-[#F0FBFC] py-10 px-4">

            {/* HEADER */}
            <div className="max-w-7xl mx-auto mb-8">
                <h1 className="text-3xl font-bold text-[#3F4255]">
                    My Listings
                </h1>
                <p className="text-sm text-[#667085] mt-1">
                    Manage your created study rooms
                </p>
            </div>

            {/* TABLE CARD */}
            <Card className="max-w-7xl mx-auto border border-[#d8edf0] shadow-xl rounded-3xl overflow-hidden">

                <Table>
                    <Table.ScrollContainer>
                        <Table.Content aria-label="My Study Rooms">

                            {/* HEADER */}
                            <Table.Header>
                                <Table.Column isRowHeader className="bg-[#F8FAFC] text-[#3F4255] text-center">
                                    Room Name
                                </Table.Column>
                                <Table.Column className="bg-[#F8FAFC] text-[#3F4255] text-center">
                                    Floor
                                </Table.Column>
                                <Table.Column className="bg-[#F8FAFC] text-[#3F4255] text-center">
                                    Capacity
                                </Table.Column>
                                <Table.Column className="bg-[#F8FAFC] text-[#3F4255] text-center">
                                    Rate
                                </Table.Column>
                                <Table.Column className="bg-[#F8FAFC] text-[#3F4255] text-center">
                                    Actions
                                </Table.Column>
                            </Table.Header>

                            {/* BODY */}
                            <Table.Body>
                                {myRooms?.length > 0 ? (
                                    myRooms.map((room) => (
                                        <Table.Row
                                            key={room._id}
                                            className="hover:bg-[#F0FBFC] transition"
                                        >

                                            <Table.Cell className="font-medium text-[#3F4255]">
                                                {room.name}
                                            </Table.Cell>

                                            <Table.Cell className="text-[#667085]">
                                                {room.floor}
                                            </Table.Cell>

                                            <Table.Cell className="text-[#667085]">
                                                {room.capacity} people
                                            </Table.Cell>

                                            <Table.Cell className="text-[#14B8A6] font-semibold">
                                                ${room.hourlyRate}/hr
                                            </Table.Cell>

                                            {/* ACTIONS */}
                                            <Table.Cell>
                                                <div className="flex gap-5 flex-wrap justify-center">

                                                    <Link href={`/rooms/${room._id}`}>
                                                        <Button
                                                            size="sm"
                                                            className="bg-[#14B8A6] text-white hover:bg-[#0F766E]"
                                                        >
                                                            <Eye size={16} />
                                                            View
                                                        </Button>
                                                    </Link>

                                                    <Link href={`/rooms/${room._id}/edit`}>
                                                        <Button
                                                            size="sm"
                                                            className="bg-slate-100 text-[#3F4255] hover:bg-slate-200"
                                                        >
                                                            <Pencil size={16} />
                                                            Edit
                                                        </Button>
                                                    </Link>


                                                    <DeleteRoomModal room={room}></DeleteRoomModal>



                                                </div>
                                            </Table.Cell>

                                        </Table.Row>
                                    ))
                                ) : (
                                    <Table.Row>
                                        <Table.Cell colSpan={5}>
                                            <div className="flex flex-col items-center justify-center py-14 text-center">

                                                <div className="w-14 h-14 rounded-2xl bg-[#F0FBFC] border border-[#d8edf0] flex items-center justify-center mb-4">
                                                    🏠
                                                </div>

                                                <h3 className="text-lg font-semibold text-[#3F4255]">
                                                    No Rooms Found
                                                </h3>

                                                <p className="text-sm text-[#667085] mt-1">
                                                    You haven’t created any study rooms yet.
                                                </p>

                                                <Link href="/add-room" className="mt-5">
                                                    <Button className="bg-[#14B8A6] text-white hover:bg-[#0F766E] px-6">
                                                        Create Room
                                                    </Button>
                                                </Link>

                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                )}
                            </Table.Body>

                        </Table.Content>
                    </Table.ScrollContainer>
                </Table>

            </Card>
        </div>
    );
};

export default MyListingsPage;