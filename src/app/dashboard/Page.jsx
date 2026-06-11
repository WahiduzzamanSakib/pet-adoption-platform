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

export default function Dashboard() {
  const [active, setActive] = useState("home");

  const menu = [
    { key: "home", label: "Home", icon: FaHome },
    { key: "requests", label: "Requests", icon: FaClipboardList },
    { key: "listings", label: "My Listing", icon: FaListUl },
    { key: "add", label: "Add Pet", icon: FaPlusCircle },
  ];

  const renderContent = () => {
    switch (active) {
      case "home":
        return <h1 className="text-xl font-semibold">🏠 Dashboard Home Data</h1>;
      case "requests":
        return <RequestPage/>;
      case "listings":
        return <MyListing />;
      case "add":
        return <PetAddPage />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">

      {/* Desktop Sidebar (HeroUI Button) */}
      <div className="hidden md:flex w-64 bg-gray-900 text-white p-4 flex-col gap-2">
        <h2 className="text-lg font-bold mb-4">Dashboard</h2>

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Button
              key={item.key}
              onPress={() => setActive(item.key)}
              className={`justify-start gap-3 w-full transition font-medium
                ${
                  active === item.key
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
      <div className="flex-1 p-4 md:p-6 overflow-y-auto pb-20 md:pb-6">
        {renderContent()}
      </div>

      {/* Mobile Bottom Navbar (HeroUI Buttons) */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-gray-900 border-t border-gray-700 flex justify-around py-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Button
              key={item.key}
              variant="light"
              onPress={() => setActive(item.key)}
              className={`flex flex-col items-center gap-1 min-w-0 text-xs
                ${
                  active === item.key
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