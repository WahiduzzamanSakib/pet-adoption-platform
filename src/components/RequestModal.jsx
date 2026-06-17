"use client";


import { Button, Input, Label, Modal, Separator, Surface, TextField } from "@heroui/react";

export function RequestModalPage() {
    return (
        <Modal>
            <Button

                className="bg-yellow-500 text-white"
            >
                Requests
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>

                            <Modal.Heading>Requests</Modal.Heading>

                        </Modal.Header>

                         <Separator className="my-4" />
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4">
                                    <div className="flex justify-between gap-3">
                                        <TextField className="w-full" name="name" type="text" variant="secondary">
                                            <Label>Name</Label>
                                            <Input placeholder="Enter your name" />
                                        </TextField>

                                        <TextField className="w-full" name="status" type="text" variant="secondary">
                                            <Label>Status</Label>
                                            <Input placeholder="Enter status" />
                                        </TextField>
                                    </div>
                                    <TextField className="w-full" name="message" variant="secondary">
                                        <Label>Message</Label>
                                        <Input placeholder="Enter your message" />
                                    </TextField>
                                    <div className="flex justify-between gap-3">
                                        <button
                                            type="button"
                                            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
                                        >
                                            Approve
                                        </button>

                                        <button
                                            type="button"
                                            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                                        >
                                            Reject
                                        </button>
                                    </div>
                                </form>
                            </Surface>
                        </Modal.Body>
                        <Modal.Footer>

                         
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}