"use client";

import { authClient } from "@/lib/auth-client";
import {
    Button,
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

export function EditModal({ petData }) {

    const { data: session } = authClient.useSession();
    const email = session?.user?.email || "";
    const name = session?.user?.name || "";

    const [open, setOpen] = useState(false);


    const handleSubmit = async (e) => {
            e.preventDefault();
    
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());
    
          
            console.log("Submitting Pet Listing Data:", data);
    
            // try {
            //     const res = await fetch("http://localhost:5000/pets", {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //         body: JSON.stringify(data),
            //     });
            //     const result = await res.json();
            //     console.log(result);
            //     toast.success("Pet added successfully!");
            //       router.push("/my-listings");
            // } catch (error) {
            //     console.error(error);
            //     toast.error("Failed to add pet");
            // };
        };

    return (
        <Modal isOpen={open} onOpenChange={setOpen}>
            {/* Trigger Button */}
            <button
                onClick={() => setOpen(true)}
                className="flex gap-1 justify-center items-center bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 rounded-lg font-semibold transition"
            >
               <FaRegEdit /> Edit
            </button>

            <Modal.Backdrop>
                <Modal.Container placement="center">
                    <Modal.Dialog className="sm:max-w-md w-full max-h-[90vh] flex flex-col">

                        <Modal.CloseTrigger />

                        {/* BODY (FIXED SCROLL ISSUE) */}
                        <Modal.Body className="p-0 flex-1 overflow-hidden">
                            <div className="p-6 max-h-[80vh] overflow-y-auto">
                                <Surface variant="default">
                                    <form onSubmit={handleSubmit} className="space-y-2">

                                        <Fieldset className="w-full space-y-2">

                                            <Fieldset.Legend className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                                                Update Pet Details
                                            </Fieldset.Legend>

                                            <hr className="border-default-100" />

                                            <Fieldset.Group className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">

                                                {/* LEFT SIDE */}
                                                <div className="space-y-2">

                                                    <TextField name="petName">
                                                        <Label>Pet Name</Label>
                                                        <Input  placeholder="e.g., Buddy" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>

                                                    <TextField name="breed">
                                                        <Label>Breed</Label>
                                                        <Input  placeholder="e.g., Golden Retriever, Siamese" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>

                                                    <TextField name="age">
                                                        <Label>Age</Label>
                                                        <Input  placeholder="e.g., 2 years" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>

                                                    <TextField name="imageUrl" type="url">
                                                        <Label>Image URL</Label>
                                                        <Input  placeholder="Pet Image url" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>
                                                </div>

                                                {/* RIGHT SIDE */}
                                                <div className="space-y-2">

                                                    <TextField name="healthStatus">
                                                        <Label>Health Status</Label>
                                                        <Input  placeholder="e.g., Healthy, Under Treatment" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>

                                                    {/* Select */}
                                                    <div className="w-full space-y-1">
                                                        <label className="text-sm font-semibold text-gray-700">
                                                            Vaccination Status
                                                        </label>

                                                        <div className="relative">
                                                            <select
                                                                name="vaccinationStatus"
                                                                
                                                                defaultValue=""
                                                                className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-10 text-sm text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                                                            >
                                                                <option value="" disabled>
                                                                    Select your status
                                                                </option>
                                                                <option value="fully-vaccinated">Fully Vaccinated</option>
                                                                <option value="partially-vaccinated">Partially Vaccinated</option>
                                                                <option value="not-vaccinated">Not Vaccinated</option>
                                                            </select>

                                                            <HiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                                                        </div>

                                                        <p className="text-xs text-red-500">
                                                            <FieldError />
                                                        </p>
                                                    </div>

                                                    <TextField name="location">
                                                        <Label>Location</Label>
                                                        <Input  placeholder="e.g., New York, NY" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>

                                                    <TextField name="adoptionFee">
                                                        <Label>Adoption Fee ($)</Label>
                                                        <Input type="number" min="0"  placeholder="0 for free adoption" variant="secondary" />
                                                        <FieldError />
                                                    </TextField>
                                                </div>

                                                {/* FULL WIDTH */}
                                                <div className="col-span-1 md:col-span-2 space-y-2 mb-2">

                                                    <hr className="border-default-100" />

                                                    <TextField name="description">
                                                        <Label>Description</Label>
                                                        <TextArea
                                                           
                                                            rows={4}
                                                            placeholder="Tell potential adopters about the pet's personality..."
                                                            variant="secondary"
                                                        />
                                                        <FieldError />
                                                    </TextField>
                                                </div>
                                            </Fieldset.Group>
                                        </Fieldset>

                                    </form>
                                </Surface>
                            </div>
                        </Modal.Body>

                        {/* FOOTER */}
                        <Modal.Footer className="border-t border-default-100">
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>
                            <Button slot="close">
                                Save Changes
                            </Button>
                        </Modal.Footer>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}