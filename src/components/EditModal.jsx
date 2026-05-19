"use client";

import React from "react";
import {
    Button,
    Checkbox,
    CheckboxGroup,
    Description,
    FieldError,
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

import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export function EditModal({ room }) {

    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const updatedRoom = Object.fromEntries(formData.entries());

        updatedRoom.amenities = formData.getAll("amenities");

        try {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${room._id}`,
                {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(updatedRoom),
                }
            );

            const data = await res.json();

            if (data.modifiedCount > 0) {
                toast.success("Room updated successfully!");

                router.refresh();
                router.push("/rooms");
            }
            else {
                toast.error("No changes detected!");
            }

        } catch (error) {

            console.log(error);

            toast.error("Something went wrong!");
        }
    };

    return (
        <Modal>

            {/* OPEN BUTTON */}
            <Button
                variant="outline"
                className="border border-slate-200 bg-slate-100 hover:bg-slate-200 text-[#3F4255]"
            >
                <BiEdit size={18} />
                Edit
            </Button>

            <Modal.Backdrop>

                <Modal.Container placement="center">

                    <Modal.Dialog className="sm:max-w-4xl rounded-3xl overflow-hidden border border-slate-200">

                        <Modal.CloseTrigger />

                        {/* HEADER */}
                        <Modal.Header className="border-b border-slate-200 bg-[#F8FAFC]">

                            <div>
                                <Modal.Heading className="text-2xl font-bold text-[#3F4255]">
                                    Edit Room
                                </Modal.Heading>

                                <p className="text-sm text-slate-500 mt-1">
                                    Update your study room information
                                </p>
                            </div>

                        </Modal.Header>

                        {/* BODY */}
                        <Modal.Body className="p-6 bg-[#F8FAFC]">

                            <Surface
                                variant="default"
                                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                            >

                                <Form
                                    onSubmit={onSubmit}
                                    className="h-full flex flex-col"
                                >

                                    <Fieldset className="h-full flex flex-col">

                                        <FieldGroup className="flex-1 space-y-5">

                                            {/* ROOM + IMAGE */}
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                                                {/* ROOM NAME */}
                                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

                                                    <TextField
                                                        isRequired
                                                        name="name"
                                                        defaultValue={room?.name}
                                                    >

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

                                                {/* IMAGE */}
                                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

                                                    <TextField
                                                        isRequired
                                                        name="image"
                                                        defaultValue={room?.image}
                                                    >

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

                                                {/* FLOOR */}
                                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

                                                    <TextField
                                                        isRequired
                                                        name="floor"
                                                        defaultValue={room?.floor}
                                                    >

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

                                                {/* CAPACITY */}
                                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

                                                    <TextField
                                                        isRequired
                                                        name="capacity"
                                                        defaultValue={room?.capacity}
                                                    >

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

                                                {/* RATE */}
                                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

                                                    <TextField
                                                        isRequired
                                                        name="hourlyRate"
                                                        defaultValue={room?.hourlyRate}
                                                    >

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
                                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

                                                <TextField
                                                    isRequired
                                                    name="description"
                                                    defaultValue={room?.description}
                                                >

                                                    <Label className="text-sm font-semibold text-slate-800 mb-2">
                                                        Description
                                                    </Label>

                                                    <TextArea
                                                        placeholder="Write room details..."
                                                        className="min-h-28 rounded-xl border border-slate-200 bg-white"
                                                    />

                                                    <Description className="text-xs text-slate-500 mt-2">
                                                        Minimum 10 characters required
                                                    </Description>

                                                    <FieldError />

                                                </TextField>

                                            </div>

                                            {/* AMENITIES */}
                                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                                                <Label className="text-base font-bold text-slate-900 mb-4 block">
                                                    Room Amenities
                                                </Label>

                                                <CheckboxGroup
                                                    name="amenities"
                                                    defaultValue={room?.amenities}
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

                                        {/* FOOTER BUTTONS */}
                                        <Fieldset.Actions className="flex justify-end gap-3 pt-5 mt-5 border-t border-slate-200">

                                            <Button
                                                slot="close"
                                                variant="secondary"
                                                className="rounded-xl"
                                            >
                                                Cancel
                                            </Button>

                                            <Button
                                                type="submit"
                                                className="rounded-xl bg-[#14B8A6] hover:bg-[#0F766E] text-white"
                                            >
                                                <BiEdit size={18} />
                                                Update Room
                                            </Button>

                                        </Fieldset.Actions>

                                    </Fieldset>

                                </Form>

                            </Surface>

                        </Modal.Body>

                    </Modal.Dialog>

                </Modal.Container>

            </Modal.Backdrop>

        </Modal>
    );
}