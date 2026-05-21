"use client";

import React, { useState } from "react";
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
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BookingModal = ({ room }) => {
    const router = useRouter();
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [total, setTotal] = useState(room?.hourlyRate || 0);

    const handleRedirectToSignin = () => {
        if (!user) {
            router.push("/signin");
            return;
        }
    };

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

    // total count
    const calculateTotal = (startTime, endTime) => {
        if (!startTime || !endTime) return;

        const start = parseInt(startTime.split(":")[0]);
        const end = parseInt(endTime.split(":")[0]);

        if (isNaN(start) || isNaN(end)) return;

        if (end > start) {
            setTotal((end - start) * Number(hourlyRate));
        } else {
            setTotal(0);
        }
    };

    const handleBooking = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const date = formData.get("date");
        const startTime = formData.get("startTime");
        const endTime = formData.get("endTime");
        const specialNote = formData.get("specialNote");

        // BASIC VALIDATION (prevents backend conflict errors)
        const start = Number(startTime?.split(":")[0]);
        const end = Number(endTime?.split(":")[0]);

        if (start >= end) {
            alert("Invalid time range");
            return;
        }

        

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

            date,
            startTime,
            endTime,
            specialNote,

            hourlyRate: Number(hourlyRate), 
            totalCost: total,
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
            // console.log(data);

            if (!res.ok) {
                console.log("Booking failed:", data);
                toast.error(data?.message || "Booking failed");
                return;
            }

            router.push("/my-bookings");

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal>

            
            <Button
                onClick={handleRedirectToSignin}
                className="w-full bg-[#06BBCC] hover:bg-[#059aad] text-white py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-cyan-200 transition-all active:scale-[0.98]"
            >
                Book Now
            </Button>

            <Modal.Backdrop>

                <Modal.Container placement="center">

                    <Modal.Dialog className="sm:max-w-4xl rounded-3xl overflow-hidden border border-slate-200">

                        <Modal.CloseTrigger />

                        {/* HEADER  */}
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

                        {/* BODY (UNCHANGED UI) */}
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
                                                        onChange={(e) => {
                                                            const end = document.querySelector('input[name="endTime"]')?.value;
                                                            calculateTotal(e.target.value, end);
                                                        }}
                                                    />

                                                </div>

                                                <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-5">

                                                    <Label className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                                                        <Clock3 size={17} />
                                                        End Time
                                                    </Label>

                                                    <Input
                                                        type="time"
                                                        name="endTime"
                                                        step="3600"
                                                        defaultValue="10:00"
                                                        className="rounded-2xl"
                                                        required
                                                        onChange={(e) => {
                                                            const start = document.querySelector('input[name="startTime"]')?.value;
                                                            calculateTotal(start, e.target.value);
                                                        }}
                                                    />

                                                </div>

                                            </div>

                                            {/* TOTAL  */}
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
                                                        <h2 className="text-5xl font-black text-[#14B8A6]">
                                                            ${total}
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

                                        {/* FOOTER (UNCHANGED UI) */}
                                        <div className="flex items-center justify-end gap-3 mt-9">

                                            <Button
                                                variant="secondary"
                                                className="rounded-2xl px-7 py-3 font-medium"
                                                type="button"
                                            >
                                                Cancel
                                            </Button>

                                            <Button
                                                type="submit"
                                                className="rounded-2xl bg-[#14B8A6] hover:bg-[#0F766E] text-white px-8 py-3 font-semibold shadow-lg shadow-teal-200/50"
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