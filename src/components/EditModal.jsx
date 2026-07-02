"use client";

import {
    Button,
    Description,
    FieldError,
    Fieldset,
    Input,
    Label,
    Modal,
    Surface,
    TextArea,
    TextField,
} from "@heroui/react";

import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { LuSave } from "react-icons/lu";

import { authClient } from "@/lib/auth-client";
import { MdOutlineNoteAdd } from "react-icons/md";
import { toast } from "react-toastify";

export default function EditModal({ petData, onUpdated }) {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        _id,
        Species,
        gender,
    } = petData;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const rawData = Object.fromEntries(formData.entries());

        const data = Object.fromEntries(
            Object.entries(rawData).filter(
                ([_, value]) => value !== "" && value !== null
            )
        );

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok) {
                toast.success("Pet updated successfully!");
                window.location.reload();
                setOpen(false);
                onUpdated?.(result);
            } else {
                toast.error(result.message || "Update failed");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

   
    const inputClass = 
        "w-full rounded-lg border px-3 py-2 bg-white text-gray-900 border-gray-300 " +
        "dark:bg-gray-800 dark:text-white dark:border-gray-600 outline-none transition";

    const selectClass =
        "w-full appearance-none rounded-lg border px-3 py-2.5 pr-10 text-sm font-bold shadow-sm transition outline-none " +
        "bg-white text-white-700 border-gray-300 hover:border-gray-400 " +
        "dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:border-gray-500";

    const labelClass = "text-sm font-semibold text-white dark:text-gray-200 block mb-1";

    return (
        <Modal isOpen={open} onOpenChange={setOpen}>
            <Button
                variant="secondary"
                className="rounded-lg"
                onPress={() => setOpen(true)}
            >
                <FaRegEdit />
                Edit
            </Button>

            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-lg w-full max-h-[90vh] flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
                        <Modal.CloseTrigger />

                        <Modal.Body className="p-0 flex-1 overflow-hidden">
                            <div className="p-6 max-h-[80vh] overflow-y-auto">
                                <Surface className="bg-white dark:bg-gray-900 p-2">
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <Fieldset className="w-full space-y-2">
                                            <div>
                                                <Fieldset.Legend className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
                                                    Update Pet Data
                                                </Fieldset.Legend>
                                            </div>

                                            <hr className="border-gray-200 dark:border-gray-700" />

                                            <Fieldset.Group className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                                                
                                                <div className="space-y-4">
                                                    <div>
                                                        <label className={labelClass}>Pet Name</label>
                                                        <Input name="petName" placeholder="e.g., Buddy" className={inputClass} />
                                                    </div>

                                                    <div>
                                                        <label className={labelClass}>Species</label>
                                                        <div className="relative">
                                                            <select
                                                                name="Species"
                                                                defaultValue={Species}
                                                                className={selectClass}
                                                            >
                                                                <option value="" disabled>Select your Species</option>
                                                                <option value="dog">Dog</option>
                                                                <option value="cat">Cat</option>
                                                                <option value="bird">Bird</option>
                                                                <option value="rabbit">Rabbit</option>
                                                                <option value="other">Other</option>
                                                            </select>
                                                            <HiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-lg" />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className={labelClass}>Breed</label>
                                                        <Input name="breed" placeholder="e.g., Golden Retriever" className={inputClass} />
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <label className={labelClass}>Age</label>
                                                            <Input name="age" placeholder="e.g., 2 years" className={inputClass} />
                                                        </div>
                                                        <div>
                                                            <label className={labelClass}>Gender</label>
                                                            <div className="relative">
                                                                <select
                                                                    name="gender"
                                                                    defaultValue={gender}
                                                                    className={selectClass}
                                                                >
                                                                    <option value="" disabled>Select Gender</option>
                                                                    <option value="male">Male</option>
                                                                    <option value="female">Female</option>
                                                                </select>
                                                                <HiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-lg" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className={labelClass}>Image URL</label>
                                                        <Input name="imageUrl" type="url" placeholder="Pet Image url" className={inputClass} />
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <div>
                                                        <label className={labelClass}>Health Status</label>
                                                        <Input name="healthStatus" placeholder="e.g., Healthy" className={inputClass} />
                                                    </div>

                                                    <div>
                                                        <label className={labelClass}>Vaccination Status</label>
                                                        <div className="relative">
                                                            <select
                                                                name="vaccinationStatus"
                                                                defaultValue=""
                                                                className={selectClass}
                                                            >
                                                                <option value="" disabled>Select status</option>
                                                                <option value="fully-vaccinated">Fully Vaccinated</option>
                                                                <option value="partially-vaccinated">Partially Vaccinated</option>
                                                                <option value="not-vaccinated">Not Vaccinated</option>
                                                            </select>
                                                            <HiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-lg" />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className={labelClass}>Location</label>
                                                        <Input name="location" placeholder="e.g., New York, NY" className={inputClass} />
                                                    </div>

                                                    <div>
                                                        <label className={labelClass}>Adoption Fee ($)</label>
                                                        <Input name="adoptionFee" type="number" min="0" placeholder="0 for free" className={inputClass} />
                                                    </div>
                                                </div>

                                                <div className="col-span-1 md:col-span-2 space-y-4 pt-2">
                                                    <hr className="border-gray-200 dark:border-gray-700" />
                                                    <div>
                                                        <label className={labelClass}>Description</label>
                                                        <TextArea
                                                            name="description"
                                                            className={inputClass}
                                                            placeholder="Tell potential adopters about the pet..."
                                                            rows={4}
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className={labelClass}>Listing Manager Email</label>
                                                        <Input
                                                            name="ownerEmail"
                                                            value={user?.email || ""}
                                                            readOnly
                                                            disabled
                                                            className="w-full rounded-lg border px-3 py-2 opacity-60 cursor-not-allowed bg-gray-100 text-gray-500 border-gray-300 dark:bg-black dark:text-gray-400 dark:border-gray-700"
                                                        />
                                                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                                            This verified email is tied to your account profile.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Fieldset.Group>

                                            <Fieldset.Actions className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4">
                                                <Button
                                                    type="submit"
                                                    className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                                                >
                                                    Update Data
                                                </Button>
                                            </Fieldset.Actions>
                                        </Fieldset>
                                    </form>
                                </Surface>
                            </div>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}