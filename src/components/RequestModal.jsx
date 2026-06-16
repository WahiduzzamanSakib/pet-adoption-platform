"use client";

import { useEffect, useState } from "react";
import { Button, Modal } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function RequestModalPage() {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    const { data: session } = authClient.useSession();
    const email = session?.user?.email;


    useEffect(() => {
        if (!session?.user?.email) return;

        const email = session.user.email;

        const fetchRequests = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    `http://localhost:5000/adoption-requests/requester/${email}`,
                 {
                        cache: "no-store",
                    }
                );

                const data = await res.json();
                setRequests(data);

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchRequests();
    }, [session?.user?.email]);




    const getStatusColor = (status) => {
        switch (status) {
            case "approved":
                return "bg-green-100 text-green-700";

            case "rejected":
                return "bg-red-100 text-red-700";

            default:
                return "bg-yellow-100 text-yellow-700";
        }
    };

    return (
        <Modal>
            <Modal.Trigger>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
                    Requests
                </button>
            </Modal.Trigger>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl">
                        <Modal.CloseTrigger />

                        <Modal.Header className="flex justify-between">
                            <p>Adoption Requests</p>
                            <p>{requests.length}</p>
                        </Modal.Header>

                        <Modal.Body className="p-4 max-h-[70vh] overflow-y-auto">
                            {loading ? (
                                <p className="text-center py-5">Loading...</p>
                            ) : requests.length === 0 ? (
                                <p className="text-gray-500 text-center">
                                    No requests found
                                </p>
                            ) : (
                                requests.map((req) => (
                                    <div
                                        key={req._id}
                                        className="border p-4 rounded-lg mb-3"
                                    >
                                        <div className="flex justify-between items-center">
                                            <p className="font-bold text-white">{req.petName}</p>

                                            <span
                                                className={`px-3 py-1 rounded-full text-xs ${getStatusColor(
                                                    req.status
                                                )}`}
                                            >
                                                {req.status}
                                            </span>
                                        </div>

                                        <p className="mt-2 text-sm bg-gray-50 p-2 rounded">
                                            {req.message}
                                        </p>



                                        {req.status === "pending" && (
                                            <div className="flex gap-2 mt-3">
                                                <Button
                                                    color="success"

                                                >
                                                    Approve
                                                </Button>

                                                <Button
                                                    color="danger"

                                                >
                                                    Reject
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                ))
                            )}
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}