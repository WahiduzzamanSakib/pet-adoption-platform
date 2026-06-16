"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import {
  FaHome,
  FaClipboardList,
  FaListUl,
  FaPlusCircle,
} from "react-icons/fa";

import PetAddPage from "../add-pet/page";
import MyListing from "../my-listings/page";
import RequestPage from "../requests/page";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";


export default function Dashboard() {
  const [active, setActive] = useState("home");
  const { data: session } = authClient.useSession();
  const user = session?.user;
  

  const menu = [
    { key: "profile", label: "Profile", icon: FaHome },
    { key: "requests", label: "Requests", icon: FaClipboardList },
    { key: "listings", label: "My Listing", icon: FaListUl },
    { key: "add", label: "Add Pet", icon: FaPlusCircle },
  ];

  const renderContent = () => {


    switch (active) {
      case "profile":
        return (
          <div className="flex items-center justify-center min-h-[80vh]">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md">
              <div className="flex flex-col items-center text-center">
                <Image
                  src={user?.image}
                  alt={user?.name || "Profile"}
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-blue-500"
                />

                <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                  {user?.name}
                </h2>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>
        );
      case "requests":
        return <RequestPage />;
      case "listings":
        return <MyListing />;
      case "add":
        return <PetAddPage />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 dark:bg-gray-950">

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 bg-gray-900 dark:bg-gray-900 text-white p-4 flex-col gap-2 border-r border-gray-800">

        <h2 className="text-lg font-bold mb-4 text-white">
          Dashboard
        </h2>

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Button
              key={item.key}
              onPress={() => setActive(item.key)}
              className={`justify-start gap-3 w-full transition font-medium
                ${active === item.key
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-800 text-gray-200 hover:bg-gray-700"
                }`}
            >
              <Icon />
              {item.label}
            </Button>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 overflow-y-auto pb-20 md:pb-6 bg-white dark:bg-gray-950">
        {renderContent()}
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-gray-900 dark:bg-gray-900 border-t border-gray-700 flex justify-around py-2">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Button
              key={item.key}
              variant="light"
              onPress={() => setActive(item.key)}
              className={`flex flex-col items-center gap-1 min-w-0 text-xs
                ${active === item.key
                  ? "text-indigo-400"
                  : "text-gray-300"
                }`}
            >
              <Icon className="text-lg" />
              {item.label}
            </Button>
          );
        })}

      </div>

    </div>
  );
}