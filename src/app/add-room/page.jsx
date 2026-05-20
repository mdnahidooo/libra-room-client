"use client";

import React from "react";
import Image from "next/image";
import { CgAdd } from "react-icons/cg";

import {
    Button,
    Card,
    Checkbox,
    CheckboxGroup,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


const AddRoomPage = () => {
    const router = useRouter(); 

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const room = Object.fromEntries(formData.entries());

        room.amenities = formData.getAll("amenities");

        // console.log("ROOM DATA:", room);

        try {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`,
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(room),
                }
            );

            const data = await res.json();

            // console.log("SERVER RESPONSE:", data);

            if (data?._id || data?.insertedId) {
                toast.success("Room added successfully!");
                router.push("/rooms");  // ✅ redirect
            } else {
                toast.error("Failed to add room!");
            }
            

        } catch (error) {

            // console.log(error);

            toast.error("Something went wrong!");
        }
    };

    return (
        <div className="h-full overflow-hidden bg-linear-to-br from-slate-100 via-white to-teal-50">

            <div className="h-full max-w-7xl mx-auto p-4">

                <Card className="h-full overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

                    <div className="grid grid-cols-1 lg:grid-cols-12 h-full">

                        {/* LEFT SIDE */}
                        <div className="lg:col-span-4 p-3 h-full">

                            <div className="relative h-full rounded-[24px] overflow-hidden bg-linear-to-br from-[#020617] via-[#0F172A] to-[#115E59] p-5 flex flex-col justify-between">

                                {/* Glow */}
                                <div className="absolute top-0 right-0 w-60 h-60 bg-teal-400/20 blur-3xl rounded-full"></div>

                                {/* TOP */}
                                <div className="relative z-10">

                                    {/* IMAGE */}
                                    <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10">

                                        <Image
                                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
                                            alt="workspace"
                                            fill
                                            priority
                                            className="object-cover"
                                        />

                                    </div>

                                    {/* BADGE */}
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mt-5">

                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>

                                        <span className="text-sm font-medium tracking-wide text-white">
                                            LibraRoom Workspace
                                        </span>

                                    </div>

                                    {/* TEXT */}
                                    <div className="mt-5">

                                        <h1 className="text-3xl font-bold text-white leading-tight">
                                            Create Smart
                                            <span className="block text-teal-300">
                                                Study Rooms
                                            </span>
                                        </h1>

                                        <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                                            Add room details, facilities, pricing,
                                            and seating capacity for your booking platform.
                                        </p>

                                    </div>

                                    {/* FEATURES */}
                                    <div className="space-y-3 mt-6">

                                        {[
                                            "Smart booking system",
                                            "Flexible room management",
                                            "Modern workspace experience",
                                        ].map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-3"
                                            >

                                                <div className="w-2 h-2 rounded-full bg-teal-400"></div>

                                                <p className="text-sm text-slate-200">
                                                    {item}
                                                </p>

                                            </div>
                                        ))}

                                    </div>

                                </div>

                                {/* BOTTOM CARDS */}
                                <div className="relative z-10 grid grid-cols-2 gap-3 mt-5">

                                    <div className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">

                                        <h2 className="text-xl font-bold text-white">
                                            24/7
                                        </h2>

                                        <p className="text-xs text-slate-300 mt-1">
                                            Availability
                                        </p>

                                    </div>

                                    <div className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">

                                        <h2 className="text-xl font-bold text-white">
                                            100%
                                        </h2>

                                        <p className="text-xs text-slate-300 mt-1">
                                            Flexible Setup
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="lg:col-span-8 h-full overflow-y-auto p-6">

                            <Form
                                onSubmit={onSubmit}
                                className="h-full flex flex-col"
                            >

                                <Fieldset className="h-full flex flex-col">

                                    {/* HEADER */}
                                    <div className="mb-5">

                                        <Fieldset.Legend className="text-2xl font-bold text-slate-900">
                                            Add New Room
                                        </Fieldset.Legend>

                                        <Description className="text-sm text-slate-500 mt-1">
                                            Fill all room information carefully.
                                        </Description>

                                    </div>

                                    {/* FORM BODY */}
                                    <FieldGroup className="flex-1 space-y-5 pb-4">

                                        {/* ROOM + IMAGE */}
                                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

                                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                                                <TextField isRequired name="name">

                                                    <Label className="text-sm font-semibold text-slate-800 mb-2">
                                                        Room Name
                                                    </Label>

                                                    <Input
                                                        placeholder="Enter room name"
                                                        className="h-11 rounded-xl border border-slate-200 bg-white"
                                                    />

                                                    <FieldError />

                                                </TextField>

                                            </div>

                                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                                                <TextField isRequired name="image">

                                                    <Label className="text-sm font-semibold text-slate-800 mb-2">
                                                        Image URL
                                                    </Label>

                                                    <Input
                                                        placeholder="https://..."
                                                        className="h-11 rounded-xl border border-slate-200 bg-white"
                                                    />

                                                    <FieldError />

                                                </TextField>

                                            </div>

                                        </div>

                                        {/* STATS */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                                                <TextField isRequired name="floor">

                                                    <Label className="text-sm font-semibold text-slate-800 mb-2">
                                                        Floor
                                                    </Label>

                                                    <Input
                                                        type="number"
                                                        placeholder="Floor number"
                                                        className="h-11 rounded-xl border border-slate-200 bg-white"
                                                    />

                                                    <FieldError />

                                                </TextField>

                                            </div>

                                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                                                <TextField isRequired name="capacity">

                                                    <Label className="text-sm font-semibold text-slate-800 mb-2">
                                                        Capacity
                                                    </Label>

                                                    <Input
                                                        type="number"
                                                        placeholder="Total seats"
                                                        className="h-11 rounded-xl border border-slate-200 bg-white"
                                                    />

                                                    <FieldError />

                                                </TextField>

                                            </div>

                                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                                                <TextField isRequired name="hourlyRate">

                                                    <Label className="text-sm font-semibold text-slate-800 mb-2">
                                                        Hourly Rate ($)
                                                    </Label>

                                                    <Input
                                                        type="number"
                                                        placeholder="Price per hour"
                                                        className="h-11 rounded-xl border border-slate-200 bg-white"
                                                    />

                                                    <FieldError />

                                                </TextField>

                                            </div>

                                        </div>

                                        {/* DESCRIPTION */}
                                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                                            <TextField isRequired name="description">

                                                <Label className="text-sm font-semibold text-slate-800 mb-2">
                                                    Description
                                                </Label>

                                                <TextArea
                                                    placeholder="Write room details..."
                                                    className="min-h-20 rounded-xl border border-slate-200 bg-white"
                                                />

                                                <Description className="text-xs text-slate-500 mt-2">
                                                    Minimum 10 characters required
                                                </Description>

                                                <FieldError />

                                            </TextField>

                                        </div>

                                        {/* AMENITIES */}
                                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                                            <Label
                                                isRequired
                                                className="text-base font-bold text-slate-900 mb-4 block"
                                            >
                                                Room Amenities
                                            </Label>

                                            <CheckboxGroup
                                                name="amenities"
                                                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
                                            >

                                                {[
                                                    "Whiteboard",
                                                    "Projector",
                                                    "Wi-Fi",
                                                    "Power Outlets",
                                                    "Quiet Zone",
                                                    "Air Conditioning",
                                                ].map((item) => (
                                                    <Checkbox
                                                        key={item}
                                                        value={item}
                                                        className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                                                    >

                                                        <Checkbox.Control>
                                                            <Checkbox.Indicator />
                                                        </Checkbox.Control>

                                                        <Label className="text-sm font-medium text-slate-700">
                                                            {item}
                                                        </Label>

                                                    </Checkbox>
                                                ))}

                                            </CheckboxGroup>

                                        </div>

                                    </FieldGroup>

                                    {/* BUTTONS */}
                                    <Fieldset.Actions className="flex items-center justify-end gap-3 pt-4 mt-4 border-t border-slate-200">

                                        <Button
                                            type="reset"
                                            variant="secondary"
                                            className="h-10 px-5 rounded-xl border border-slate-300 font-semibold"
                                        >
                                            Cancel
                                        </Button>

                                        <Button
                                            type="submit"
                                            className="h-10 px-6 rounded-xl bg-[#14B8A6] hover:bg-[#0F766E] text-white font-semibold"
                                        >
                                            <CgAdd size={18} />
                                            Add Room
                                        </Button>

                                    </Fieldset.Actions>

                                </Fieldset>

                            </Form>

                        </div>

                    </div>

                </Card>

            </div>

        </div>
    );
};

export default AddRoomPage;