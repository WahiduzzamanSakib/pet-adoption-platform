import React, { Suspense } from "react";
import AllPets from "./AllPets";

const AllPetsData =async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets`, {
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
      <AllPets pets={pets}/>
    </Suspense>
  );
};

export default AllPetsData;