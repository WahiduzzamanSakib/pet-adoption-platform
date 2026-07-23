
import { Chip } from "@heroui/react";
import Image from "next/image";
import { AdoptModalPage } from "@/components/AdoptModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const DetailsPage = async ({ params }) => {
  const { id } = await params;

const {token} = await auth.api.getToken({
  headers : await headers()
})

// console.log(token)

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${id}`,{
    headers: {
      authorization : `Bearer ${token}`
    }
  });
  const pet = await res.json();


  if (!pet) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-950">
        <h1 className="text-red-500 text-xl">No Data Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border dark:border-gray-800">
        <div className="grid md:grid-cols-2">


          <div className="bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-6">
            <div className="hover:scale-105 transition-transform duration-300">
              {pet.imageUrl ? (
  <Image
    src={pet.imageUrl}
    alt={pet.petName || "Pet image"}
    width={520}
    height={520}
  />
) : (
  <div className="text-gray-500">No image available</div>
)}
            </div>
          </div>

          
          <div className="p-6 md:p-10 flex flex-col gap-6">

            <h1 className="text-3xl font-bold text-blue-900 ">
              {pet.petName}
            </h1>

            <div className="flex gap-2 flex-wrap">
              <Chip color="primary">{pet.Species}</Chip>
              <Chip color="success">{pet.healthStatus}</Chip>
              <Chip color="warning">{pet.vaccinationStatus}</Chip>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-gray-800 dark:text-gray-200">
              <p><b>Breed:</b> {pet.breed}</p>
              <p><b>Age:</b> {pet.age}</p>
              <p><b>Gender:</b> {pet.gender}</p>
              <p><b>Location:</b> {pet.location}</p>

              <p className="col-span-2">
                <b>Adoption Fee:</b>{" "}
                <span className="text-green-600 dark:text-green-400 font-semibold">
                  ${pet.adoptionFee}
                </span>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                About
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {pet.description}
              </p>
            </div>

            <AdoptModalPage pet={pet} />

          </div>

        </div>
      </div>
    </div>
  );
}

export default DetailsPage;