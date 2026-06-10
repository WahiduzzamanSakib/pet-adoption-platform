import React, { Suspense } from "react";
import HomeCards from "./HomeCards";

const HomeCard =async () => {

  const res = await fetch("http://localhost:5000/pets", {
    cache: "no-store",
  });

  const pets = await res.json();
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="loader"></div>
        </div>
      }
    >
      <HomeCards pets={pets}/>
    </Suspense>
  );
};

export default HomeCard;