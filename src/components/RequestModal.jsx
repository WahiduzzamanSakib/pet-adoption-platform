"use client";

import { useEffect, useState } from "react";
import {
    Button,
    Label,
    Modal,
    Separator,
    Surface,
    TextField,
    Input,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export function RequestModalPage() {
    const { data: session } = authClient.useSession();
    const email = session?.user?.email;

    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);


    const refetchRequests = async () => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/adoption-requests/owner/${email}`
            );

            const data = await res.json();
            setRequests(Array.isArray(data) ? data : []);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        if (!email) return;
        refetchRequests();
    }, [email]);


    const handleApprove = async (petId, requestId) => {
        try {
            await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/adoption-requests/approve/${petId}/${requestId}`,
                {
                    method: "PATCH",
                }
            );

            await refetchRequests();
        } catch (error) {
            console.log(error);
        }
    };


    const handleReject = async (id) => {
        try {
            await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/adoption-requests/reject/${id}`,
                {
                    method: "PATCH",
                }
            );

            await refetchRequests();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal>
            <Button variant="secondary">
                Requests
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-2xl">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Heading>
                                <div className="flex justify-between  text-2xl font-bold">
                                    <p>Adoption Requests</p>
                                    <p className="text-blue-500 border px-3 py-1 rounded-full">
                                        {requests.length}
                                    </p>
                                </div>
                            </Modal.Heading>
                        </Modal.Header>

                        <Separator className="my-2" />

                        <Modal.Body className="p-6">
                            {loading ? (
                                <p className="text-center text-gray-500">
                                  <div className="loader"></div>
                                </p>
                            ) : requests.length === 0 ? (
                                <p className="text-center text-gray-500">
                                    No requests yet
                                </p>
                            ) : (
                                <div className="space-y-4">
                                    {requests.map((request) => (
                                        <Surface
                                            key={request._id}
                                            className="p-4 border rounded-lg"
                                        >

                                            <div className="space-y-2">
                                                <div className="flex gap-3">
                                                    <TextField className="w-full">
                                                        <Label>Pet Name</Label>
                                                        <Input
                                                            value={request.petName}
                                                            readOnly
                                                        />
                                                    </TextField>

                                                    <TextField className="w-full">
                                                        <Label>Status</Label>
                                                        <Input
                                                            value={request.status}
                                                            readOnly
                                                            className={
                                                                request.status === "approved"
                                                                    ? "text-green-500"
                                                                    : request.status === "rejected"
                                                                        ? "text-red-500"
                                                                        : "text-yellow-500"
                                                            }
                                                        />
                                                    </TextField>
                                                </div>

                                                <TextField>
                                                    <Label>Requester Email</Label>
                                                    <Input
                                                        value={request.requesterEmail}
                                                        readOnly
                                                    />
                                                </TextField>

                                                <TextField>
                                                    <Label>Message</Label>
                                                    <Input
                                                        value={request.message}
                                                        readOnly
                                                    />
                                                </TextField>
                                            </div>


                                            {request.status === "pending" && (
                                                <div className="flex gap-3 mt-4">
                                                    <Button
                                                        onClick={() =>
                                                            handleApprove(
                                                                request.petId,
                                                                request._id
                                                            )
                                                        }
                                                        className="flex-1 bg-green-500 text-white"
                                                    >
                                                        Approve
                                                    </Button>

                                                    <Button
                                                        onClick={() =>
                                                            handleReject(request._id)
                                                        }
                                                        className="flex-1 bg-red-500 text-white"
                                                    >
                                                        Reject
                                                    </Button>
                                                </div>
                                            )}
                                        </Surface>
                                    ))}
                                </div>
                            )}
                        </Modal.Body>

                        <Modal.Footer />
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}