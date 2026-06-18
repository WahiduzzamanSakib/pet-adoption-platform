"use client";

import React from "react";

import {
    Button,
    Description,
    FieldError,
    Fieldset,
    Input,
    Label,
    Surface,
    TextArea,
   
    TextField,
} from "@heroui/react";
import { HiChevronDown } from "react-icons/hi";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { MdOutlineNoteAdd } from "react-icons/md";

const PetAddPage = () => {
const router = useRouter();
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        data.userId = user?.id;
        data.ownerEmail = user?.email;

        console.log("Submitting Pet Listing Data:", data);

        try {
            const res = await fetch("http://localhost:5000/pets", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await res.json();
            console.log(result);
            toast.success("Pet added successfully!");
              router.push("/my-listings");
        } catch (error) {
            console.error(error);
            toast.error("Failed to add pet");
        };
    };

    return (
        <div className="min-h-screen w-full bg-default-50/50 dark:bg-gray-950 flex items-center justify-center p-4 md:p-8">
            <Surface className="w-full max-w-4xl rounded-2xl border border-default-200 dark:border-gray-700 bg-background dark:bg-gray-900 p-6 shadow-sm md:p-10">

                <form onSubmit={handleSubmit} className="space-y-8">

                    <Fieldset className="w-full space-y-6">
                        <div>
                            <Fieldset.Legend className="text-2xl font-bold tracking-tight text-foreground dark:text-white md:text-3xl">
                                Create Pet Listing
                            </Fieldset.Legend>
                            <Description className="text-sm text-muted-foreground dark:text-gray-300 mt-1">
                                Provide accurate details about the pet to help them find their permanent home.
                            </Description>
                        </div>

                        <hr className="border-default-100 dark:border-gray-700" />

                        <Fieldset.Group className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">

                            <div className="space-y-5">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-default-400 dark:text-gray-400">
                                    Pet Characteristics
                                </h3>

                                <TextField name="petName">
                                    <Label>Pet Name</Label>
                                    <Input required placeholder="e.g., Buddy" variant="secondary" />
                                    <FieldError />
                                </TextField>

                                {/* species */}
                                <div className="w-full space-y-1">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Species
                                    </label>

                                    <div className="relative">
                                        <select
                                            name="Species"
                                            required
                                            defaultValue=""
                                            className="font-bold w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2.5 pr-10 text-sm text-gray-700 dark:text-gray-200 shadow-sm transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-gray-700 hover:border-gray-400 dark:hover:border-gray-500 outline-none"
                                        >
                                            <option value="" disabled>
                                                Select your Species
                                            </option>
                                            <option value="dog">Dog</option>
                                            <option value="cat">Cat</option>
                                            <option value="bird">Bird</option>
                                            <option value="rabbit">Rabbit</option>
                                            <option value="other">Other</option>
                                        </select>

                                        <HiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-lg" />
                                    </div>

                                    <p className="text-xs text-red-500">
                                        <FieldError />
                                    </p>
                                </div>

                                <TextField name="breed">
                                    <Label>Breed</Label>
                                    <Input required placeholder="e.g., Golden Retriever, Siamese" variant="secondary" />
                                    <FieldError />
                                </TextField>

                                <div className="grid grid-cols-2 gap-4">
                                    <TextField name="age">
                                        <Label>Age</Label>
                                        <Input required placeholder="e.g., 2 years" variant="secondary" />
                                        <FieldError />
                                    </TextField>

                                  
                                    <div className="w-full space-y-1">
                                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                            Gender
                                        </label>

                                        <div className="relative">
                                            <select
                                                name="gender"
                                                required
                                                defaultValue=""
                                                className="font-bold w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2.5 pr-10 text-sm text-gray-700 dark:text-gray-200 shadow-sm transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-gray-700 hover:border-gray-400 dark:hover:border-gray-500 outline-none"
                                            >
                                                <option value="" disabled>
                                                    Select Gender
                                                </option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>

                                            <HiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-lg" />
                                        </div>

                                        <p className="text-xs text-red-500">
                                            <FieldError />
                                        </p>
                                    </div>
                                </div>
                            </div>

                           
                            <div className="space-y-5">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-default-400 dark:text-gray-400">
                                    Health & Logistics
                                </h3>

                                <TextField name="healthStatus">
                                    <Label>Health Status</Label>
                                    <Input required placeholder="e.g., Healthy, Under Treatment" variant="secondary" />
                                    <FieldError />
                                </TextField>

                               
                                <div className="w-full space-y-1">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        Vaccination Status
                                    </label>

                                    <div className="relative">
                                        <select
                                            name="vaccinationStatus"
                                            required
                                            defaultValue=""
                                            className="font-bold w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2.5 pr-10 text-sm text-gray-700 dark:text-gray-200 shadow-sm transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-gray-700 hover:border-gray-400 dark:hover:border-gray-500 outline-none"
                                        >
                                            <option value="" disabled>
                                                Select your status
                                            </option>
                                            <option value="fully-vaccinated">Fully Vaccinated</option>
                                            <option value="partially-vaccinated">Partially Vaccinated</option>
                                            <option value="not-vaccinated">Not Vaccinated</option>
                                        </select>

                                        <HiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-lg" />
                                    </div>

                                    <p className="text-xs text-red-500">
                                        <FieldError />
                                    </p>
                                </div>

                                <TextField name="location">
                                    <Label>Location</Label>
                                    <Input required placeholder="e.g., New York, NY" variant="secondary" />
                                    <FieldError />
                                </TextField>

                                <TextField name="adoptionFee">
                                    <Label>Adoption Fee ($)</Label>
                                    <Input required type="number" min="0" placeholder="0 for free adoption" variant="secondary" />
                                    <FieldError />
                                </TextField>
                            </div>

                            <div>
                                <TextField name="imageUrl" type="url">
                                    <Label>Image URL</Label>
                                    <Input required placeholder="Pet Image url" variant="secondary" />
                                    <FieldError />
                                </TextField>
                            </div>

                            <div className="col-span-1 md:col-span-2 space-y-5 pt-4">
                                <hr className="border-default-100 dark:border-gray-700" />

                                <TextField name="description">
                                    <Label>Description</Label>
                                    <TextArea
                                        required
                                        placeholder="Tell potential adopters about the pet's personality, habits, and story..."
                                        variant="secondary"
                                        rows={4}
                                    />
                                    <FieldError />
                                </TextField>

                                <TextField name="ownerEmail" className="max-w-md">
                                    <Label>Listing Manager Email</Label>
                                    <Input
                                        value={user?.email || ""}
                                        readOnly
                                        disabled
                                        className="opacity-60 cursor-not-allowed bg-default-100 dark:bg-gray-800 dark:text-gray-300"
                                        variant="secondary"
                                    />
                                    <Description className="text-xs text-default-400 dark:text-gray-400">
                                        This verified email is tied to your account profile.
                                    </Description>
                                </TextField>
                            </div>
                        </Fieldset.Group>

                        <hr className="border-default-100 dark:border-gray-700 pt-2" />

                        <Fieldset.Actions className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">

                            <Button
                                type="submit"
                                variant="secondary"
                                className="w-full sm:w-auto justify-center gap-2 font-medium shadow-sm dark:bg-gray-800 dark:text-white"
                            >
                                <MdOutlineNoteAdd className="w-4 h-4" />
                                Add pet
                            </Button>
                        </Fieldset.Actions>
                    </Fieldset>
                </form>
            </Surface>
        </div>
    );
};

export default PetAddPage;