import React from "react";

const RequestPage = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 dark:bg-gray-950">
            <div className="text-center p-6 rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-800 shadow-sm">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Request Page
                </h1>

                <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Manage all adoption requests here 🐾
                </p>
            </div>
        </div>
    );
};

export default RequestPage;