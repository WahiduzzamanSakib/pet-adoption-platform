
import Link from "next/link";
import { FiArrowRight, FiHeart, FiUserPlus } from "react-icons/fi";

export default function CtaPage() {
    return (
        <section className="!bg-white px-4 py-10 dark:!bg-[#0b1220]">
            <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-12 text-center shadow-xl sm:px-12 sm:py-16">
                <FiHeart className="mx-auto text-4xl text-white" />

                <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
                    Ready to Meet Your New Best Friend?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl leading-7 text-orange-50">
                    Explore available pets and discover a companion who could
                    become a special part of your family.
                </p>

                <div className="flex justify-center gap-8">
                    <Link
                        href="/pets"
                        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 font-bold text-orange-600 transition hover:bg-orange-50"
                    >
                        Browse All Pets
                        <FiArrowRight />
                    </Link>
                    <Link
                        href="/signup"
                        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 font-bold text-orange-600 transition hover:bg-orange-50"
                    >
                        <FiUserPlus />
                        Create an Account
                        
                    </Link>
                </div>
            </div>
        </section>
    );
}
