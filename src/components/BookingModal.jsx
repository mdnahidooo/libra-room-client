"use client";

import React from "react";
import {
    Button,
    Description,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    Modal,
    Surface,
    TextArea,
    TextField,
} from "@heroui/react";

import { CalendarDays, Clock3, NotebookPen } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const BookingModal = ({ room }) => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const {
        _id,
        name,
        floor,
        capacity,
        hourlyRate,
        image,
        bookingCount,
        ownerId,
        isAvailable,
        createdAt
    } = room;

    const handleBooking = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const date = formData.get("date");
        const startTime = formData.get("startTime");
        const endTime = formData.get("endTime");
        const specialNote = formData.get("specialNote");

        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            roomId: _id,
            name,
            floor,
            capacity,
            image,
            bookingCount,
            ownerId,
            isAvailable,
            createdAt,
            date: new Date(date),
            startTime,
            endTime,
            specialNote,
        };

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(bookingData),
                }
            );

            const data = await res.json();
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal>

            {/* OPEN BUTTON */}
            <Button className="w-full bg-[#06BBCC] hover:bg-[#059aad] text-white py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-cyan-200 transition-all active:scale-[0.98]">
                Book Now
            </Button>

            <Modal.Backdrop>

                <Modal.Container placement="center">

                    <Modal.Dialog className="sm:max-w-4xl rounded-3xl overflow-hidden border border-slate-200">

                        <Modal.CloseTrigger />

                        {/* HEADER */}
                        <Modal.Header className="border-b border-slate-200 bg-[#F8FAFC]">

                            <div>
                                <Modal.Heading className="text-2xl font-bold text-[#3F4255]">
                                    Room Booking
                                </Modal.Heading>

                                <p className="text-sm text-slate-500 mt-1">
                                    Hey! Book your room and enjoy.
                                </p>
                            </div>

                        </Modal.Header>

                        {/* BODY */}
                        <Modal.Body className="p-6 bg-[#F8FAFC]">

                            <Surface className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                                <Form onSubmit={handleBooking}>

                                    <Fieldset>

                                        <FieldGroup className="space-y-6">

                                            {/* DATE */}
                                            <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-5">

                                                <TextField isRequired>

                                                    <Label className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                                                        <CalendarDays size={17} />
                                                        Booking Date
                                                    </Label>

                                                    <Input
                                                        type="date"
                                                        name="date"
                                                        className="rounded-2xl"
                                                        required
                                                    />

                                                </TextField>

                                            </div>

                                            {/* TIME */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                                {/* START TIME */}
                                                <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-5">

                                                    <Label className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                                                        <Clock3 size={17} />
                                                        Start Time
                                                    </Label>

                                                    <Input
                                                        type="time"
                                                        name="startTime"
                                                        step="3600"
                                                        defaultValue="09:00"
                                                        className="rounded-2xl"
                                                        required
                                                    />

                                                    <Description className="mt-2 text-xs text-slate-500">
                                                        24-hour format
                                                    </Description>

                                                </div>

                                                {/* END TIME */}
                                                <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-5">

                                                    <Label className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                                                        <Clock3 size={17} />
                                                        End Time
                                                    </Label>

                                                    <Input
                                                        type="time"
                                                        name="endTime"
                                                        step="3600"
                                                        defaultValue="11:00"
                                                        className="rounded-2xl"
                                                        required
                                                    />

                                                    <Description className="mt-2 text-xs text-slate-500">
                                                        Minimum booking time is 1 hour
                                                    </Description>

                                                </div>

                                            </div>

                                            {/* TOTAL COST (STATIC UI - unchanged logic removed) */}
                                            <div className="rounded-[28px] border border-[#14B8A6]/20 bg-linear-to-r from-[#F0FDFA] via-white to-[#ECFEFF] p-6">

                                                <div className="flex items-center justify-between gap-4 flex-wrap">

                                                    <div>

                                                        <h3 className="text-sm font-semibold text-slate-700">
                                                            Total Booking Cost
                                                        </h3>

                                                        <Description className="mt-1 text-xs text-slate-500">
                                                            Automatically calculated based on selected hours
                                                        </Description>

                                                    </div>

                                                    <div className="text-right">

                                                        <h2 className="text-5xl font-black tracking-tight text-[#14B8A6]">
                                                            ${hourlyRate}
                                                        </h2>

                                                    </div>

                                                </div>

                                            </div>

                                            {/* NOTE */}
                                            <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-5">

                                                <TextField>

                                                    <Label className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                                                        <NotebookPen size={17} />
                                                        Special Note
                                                    </Label>

                                                    <TextArea
                                                        name="specialNote"
                                                        placeholder="Any special requirements..."
                                                        className="min-h-32 rounded-2xl"
                                                    />

                                                </TextField>

                                            </div>

                                        </FieldGroup>

                                        {/* FOOTER */}
                                        <div className="flex items-center justify-end gap-3 mt-9">

                                            <Button
                                                variant="secondary"
                                                className="rounded-2xl px-7 py-3 font-medium"
                                            >
                                                Cancel
                                            </Button>

                                            <Button
                                                type="submit"
                                                className="rounded-2xl bg-[#14B8A6] hover:bg-[#0F766E] text-white px-8 py-3 font-semibold shadow-lg shadow-teal-200/50 transition-all duration-300"
                                            >
                                                Confirm Booking
                                            </Button>

                                        </div>

                                    </Fieldset>

                                </Form>

                            </Surface>

                        </Modal.Body>

                    </Modal.Dialog>

                </Modal.Container>

            </Modal.Backdrop>

        </Modal>
    );
};

export default BookingModal;