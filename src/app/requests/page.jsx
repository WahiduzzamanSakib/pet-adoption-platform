"use client"

import { authClient } from "@/lib/auth-client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RequestPage = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { data: session } = authClient.useSession();
    const email = session?.user?.email;

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    `http://localhost:5000/adoption-requests/requester/${email}`
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch requests");
                }

                const data = await res.json();
                setRequests(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (email) fetchRequests();
    }, [email]);

    if (loading) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen flex items-center justify-center"
            >
                <div className="loader"></div>
            </motion.div>
        );
    }

    if (error) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen flex items-center justify-center text-red-500"
            >
                {error}
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen w-full bg-gray-100 dark:bg-gray-950 p-6"
        >
            <h1 className="text-2xl font-bold text-center text-blue-900  mb-6">
                Adoption Requests
            </h1>

            {requests.length === 0 ? (
                <p className="text-center text-gray-500">
                    No adoption requests found.
                </p>
            ) : (
                <div className="max-w-4xl mx-auto space-y-4">
                    <AnimatePresence>
                        {requests.map((req, index) => (
                            <motion.div
                                key={req._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ scale: 1.02 }}
                                className="p-4 rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-800 shadow-sm"
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                                            {req.petName}
                                        </h2>

                                        <p className="text-gray-600 dark:text-gray-400">
                                            Message: {req.message}
                                        </p>

                                        <p className="text-gray-600 dark:text-gray-400">
                                            Date: {req.date}
                                        </p>
                                    </div>
                                    <span
                                        className={`inline-block mt-2 px-3 py-1 text-md font-bold rounded-full ${req.status === "approved"
                                            ? "bg-green-100 text-green-700"
                                            : req.status === "pending"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {req.status}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </motion.div>
    );
};

export default RequestPage;