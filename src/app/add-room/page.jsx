"use client";

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
import { redirect } from "next/dist/server/api-utils";

import React from "react";
import { CgAdd } from "react-icons/cg";

const AddRoomPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const room = Object.fromEntries(formData.entries());

        // fix checkbox array (HeroUI returns comma string sometimes)
        room.amenities = formData.getAll("amenities");

        console.log("ROOM DATA:", room);

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
            console.log("SERVER RESPONSE:", data);

            alert("Room added successfully!");
            redirect('/')
        } catch (error) {
            console.log(error);
            alert("Something went wrong!");
        }
    };

    return (
        <div className="max-w-6xl mx-auto my-12 px-4">

            <Card className="bg-[#F8FAFC] border border-[#E2E8F0] shadow-xl rounded-3xl p-6 md:p-10">

                <Form onSubmit={onSubmit} className="w-full">

                    <Fieldset>

                        {/* HEADER */}
                        <div className="text-center mb-10">
                            <Fieldset.Legend className="text-3xl font-bold text-[#0F172A]">
                                Add New Room
                            </Fieldset.Legend>

                            <Description className="text-sm text-[#64748B] mt-2 max-w-xl mx-auto">
                                Create a new study room for LibraRoom booking system with full details and availability setup.
                            </Description>
                        </div>

                        <FieldGroup className="space-y-6">

                            {/* ROOM NAME */}
                            <TextField isRequired name="name">
                                <Label className="text-[#0F172A] font-medium">
                                    Room Name
                                </Label>
                                <Input
                                    placeholder="Enter room name"
                                    className="h-12 rounded-xl border border-[#E2E8F0] focus:border-[#14B8A6]"
                                />
                                <FieldError />
                            </TextField>

                            {/* IMAGE */}
                            <TextField isRequired name="image">
                                <Label className="text-[#0F172A] font-medium">
                                    Image URL
                                </Label>
                                <Input
                                    placeholder="https://..."
                                    className="h-12 rounded-xl border border-[#E2E8F0] focus:border-[#14B8A6]"
                                />
                                <FieldError />
                            </TextField>

                            {/* ROW */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                <TextField isRequired name="floor">
                                    <Label className="text-[#0F172A] font-medium">Floor</Label>
                                    <Input
                                        placeholder="Enter the floor number"
                                        type="number"
                                        className="h-12 rounded-xl border border-[#E2E8F0] focus:border-[#14B8A6]"
                                    />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired name="capacity">
                                    <Label className="text-[#0F172A] font-medium">Capacity</Label>
                                    <Input
                                        placeholder="Total seats"
                                        type="number"
                                        className="h-12 rounded-xl border border-[#E2E8F0] focus:border-[#14B8A6]"
                                    />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired name="hourlyRate">
                                    <Label className="text-[#0F172A] font-medium">Hourly Rate ($)</Label>
                                    <Input
                                        placeholder="Enter the price of room as per hours"
                                        type="number"
                                        className="h-12 rounded-xl border border-[#E2E8F0] focus:border-[#14B8A6]"
                                    />
                                    <FieldError />
                                </TextField>

                            </div>

                            {/* DESCRIPTION */}
                            <TextField isRequired name="description">
                                <Label className="text-[#0F172A] font-medium">
                                    Description
                                </Label>

                                <TextArea
                                    placeholder="Write room details..."
                                    className="min-h-36 rounded-xl border border-[#E2E8F0] focus:border-[#14B8A6]"
                                />

                                <Description className="text-xs text-[#64748B] mt-1">
                                    Minimum 10 characters required
                                </Description>

                                <FieldError />
                            </TextField>

                            {/* AMENITIES */}
                            <div>
                                <Label isRequired className="text-[#0F172A] font-medium mb-2 block">
                                    Amenities
                                </Label>

                                <CheckboxGroup
                                    name="amenities"
                                    className="flex flex-row flex-wrap gap-4"
                                >
                                    {[
                                        "Whiteboard",
                                        "Projector",
                                        "Wi-Fi",
                                        "Power Outlets",
                                        "Quiet Zone",
                                        "Air Conditioning",
                                    ].map((item) => (
                                        <Checkbox key={item} value={item}>
                                            <Checkbox.Control>
                                                <Checkbox.Indicator />
                                            </Checkbox.Control>
                                            <Label className="text-[#334155]">
                                                {item}
                                            </Label>
                                        </Checkbox>
                                    ))}
                                </CheckboxGroup>
                            </div>

                        </FieldGroup>

                        {/* BUTTONS */}
                        <Fieldset.Actions className="flex flex-col gap-3 mt-10">

                            <Button
                                type="reset"
                                variant="secondary"
                                className="w-full"
                            >
                                Cancel
                            </Button>

                            <Button
                                type="submit"
                                className="w-full bg-[#14B8A6] hover:bg-[#0F766E] text-white font-semibold shadow-md"
                            >
                                <CgAdd />
                                Add Room
                            </Button>

                        </Fieldset.Actions>

                    </Fieldset>
                </Form>
            </Card>
        </div>
    );
};

export default AddRoomPage;