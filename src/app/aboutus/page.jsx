
import Image from "next/image";
import Link from "next/link";
import {
    FiHeart,
    FiShield,
    FiUsers,
    FiCheckCircle,
    FiArrowRight,
    FiSearch,
    FiFileText,
    FiHome,
} from "react-icons/fi";

const benefits = [
    {
        icon: FiShield,
        title: "Trusted Pet Information",
        description:
            "Explore pet listings with owner information, health details, and vaccination status to make informed adoption decisions.",
    },
    {
        icon: FiHeart,
        title: "Simple Adoption Process",
        description:
            "Discover your ideal companion and submit adoption requests through a convenient and easy-to-use platform.",
    },
    {
        icon: FiUsers,
        title: "Connect with Pet Owners",
        description:
            "Bring prospective adopters and pet owners together to help animals find caring and responsible families.",
    },
];

const steps = [
    {
        number: "01",
        icon: FiSearch,
        title: "Find Your Pet",
        description:
            "Browse available dogs, cats, birds, rabbits, and other pets. Search by name or filter by species to find your ideal companion.",
    },
    {
        number: "02",
        icon: FiHeart,
        title: "Explore Pet Details",
        description:
            "Review the pet's breed, age, health, vaccination status, location, and adoption fee before submitting a request.",
    },
    {
        number: "03",
        icon: FiFileText,
        title: "Send an Adoption Request",
        description:
            "Log in to your account, select a pickup date, add a message, and submit your adoption request to the pet owner.",
    },
    {
        number: "04",
        icon: FiHome,
        title: "Welcome Your Companion",
        description:
            "Track your request status in My Requests. If approved, coordinate the next steps with the pet owner.",
    },
];

const commitments = [
    "Encouraging responsible pet ownership",
    "Providing useful pet health and care information",
    "Making adoption requests easier to manage",
    "Helping pets connect with caring families",
];

export default function About() {
    return (
        <main className="min-h-screen overflow-hidden bg-white text-slate-900 transition-colors duration-300 dark:bg-[#0b1220] dark:text-white">

            {/* Hero Section */}
            <section className="px-4 py-16 sm:py-20 lg:py-24">
                <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-600 dark:text-orange-400">
                            <FiHeart />
                            About Our Platform
                        </span>

                        <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                            Every Pet Deserves a{" "}
                            <span className="text-orange-600 dark:text-orange-500">
                                Loving Home
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl leading-8 text-slate-600 dark:text-slate-300">
                            We connect pets with caring families across Bangladesh.
                            Our platform makes it easier to discover available pets,
                            explore their information, and take the first step toward
                            responsible pet adoption.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/all-pets"
                                className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                            >
                                Explore Pets
                                <FiArrowRight />
                            </Link>

                            <Link
                                href="/"
                                className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-600 dark:border-slate-600 dark:text-slate-200 dark:hover:text-orange-400"
                            >
                                Back to Home
                            </Link>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
                            <span className="flex items-center gap-2">
                                <FiCheckCircle className="text-orange-500 dark:text-orange-400" />
                                Easy Pet Discovery
                            </span>
                            <span className="flex items-center gap-2">
                                <FiCheckCircle className="text-orange-500 dark:text-orange-400" />
                                Adoption Request Tracking
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-3xl bg-orange-500/10 blur-2xl" />

                        <Image
                            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1000"
                            alt="A person caring for a rescued dog"
                            width={1000}
                            height={750}
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="relative h-72 w-full rounded-2xl border border-slate-200 object-cover shadow-2xl dark:border-white/10 sm:h-96"
                        />

                        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-[#0b1220]/90 sm:bottom-6 sm:left-6 sm:right-6">
                            <p className="flex items-center gap-2 font-bold !text-slate-900 dark:!text-white">
                                <FiHeart className="text-xl text-orange-500" />
                                Find a Friend. Change a Life.
                            </p>
                            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                Every adoption is an opportunity to build a lifelong bond.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 dark:border-white/5 dark:bg-[#101a2b] sm:py-20">
                <div className="mx-auto max-w-4xl text-center">
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
                        Our Mission
                    </span>

                    <h2 className="mt-4 text-3xl font-bold !text-slate-900 dark:!text-white sm:text-4xl">
                        Making Pet Adoption Easier and More Responsible
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">
                        We believe every animal deserves care, safety, and a loving home.
                        Our mission is to bring prospective adopters and pet owners
                        together through a user-friendly platform where people can
                        discover pets, learn about their needs, and manage adoption
                        requests in one place.
                    </p>
                </div>
            </section>

            {/* How It Works */}

            <section className="!bg-slate-50 px-4 py-16 transition-colors duration-300 dark:!bg-[#0b1220] sm:py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
                            How It Works
                        </span>

                        <h2 className="mt-4 text-3xl font-bold !text-slate-900 dark:!text-white sm:text-4xl">
                            Adopt Your Perfect Companion in 4 Easy Steps
                        </h2>

                        <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
                            Finding your new best friend is simple. Follow these steps
                            to start your adoption journey.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <article
                                    key={step.number}
                                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/10 dark:border-slate-700 dark:bg-[#101a2b] dark:shadow-none dark:hover:border-orange-500 dark:hover:shadow-lg dark:hover:shadow-orange-500/5"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-extrabold text-orange-600 dark:text-orange-400">
                                            {step.number}
                                        </span>

                                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl text-orange-700 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white dark:bg-orange-500/15 dark:text-orange-400 dark:group-hover:bg-orange-500 dark:group-hover:text-white">
                                            <Icon />
                                        </span>
                                    </div>

                                    <h3 className="mt-6 text-lg font-bold !text-slate-900 dark:!text-white">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                                        {step.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>

                    <div className="mt-10 text-center">
                        <Link
                            href="/all-pets"
                            className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-7 py-3 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-orange-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus-visible:ring-offset-[#0b1220]"
                        >
                            Start Your Adoption Journey
                            <FiArrowRight />
                        </Link>

                        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                            Every adoption request is subject to the pet owner's approval.
                        </p>
                    </div>
                </div>
            </section>


            {/* Why Choose Us */}
            <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 dark:border-white/5 dark:bg-[#101a2b] sm:py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
                            Why Choose Us
                        </span>

                        <h2 className="mt-4 text-3xl font-bold !text-slate-900 dark:!text-white sm:text-4xl">
                            A Better Way to Find Your Companion
                        </h2>

                        <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                            We focus on convenience, useful pet information, and a
                            straightforward adoption experience for users and pet owners.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {benefits.map((benefit) => {
                            const Icon = benefit.icon;

                            return (
                                <article
                                    key={benefit.title}
                                    className="rounded-2xl border border-slate-200 !bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-400 dark:border-slate-700/70 dark:!bg-[#0b1220] dark:hover:border-orange-500/50"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 text-2xl text-orange-600 dark:text-orange-400">
                                        <Icon />
                                    </div>

                                    <h3 className="mt-5 text-xl font-bold !text-slate-900 dark:!text-white">
                                        {benefit.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                                        {benefit.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Commitment */}
            <section className="!bg-white px-4 py-16 dark:!bg-[#0b1220] sm:py-20">
                <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700/70 dark:bg-[#101a2b] sm:p-10 md:grid-cols-2">
                    <div>
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
                            Our Commitment
                        </span>

                        <h2 className="mt-4 text-3xl font-bold !text-slate-900 dark:!text-white sm:text-4xl">
                            Adoption with Care and Responsibility
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                            Adopting a pet is a meaningful, long-term commitment.
                            We encourage every adopter to consider an animal's health,
                            individual needs, and ongoing care before submitting a request.
                        </p>

                        <Link
                            href="/all-pets"
                            className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
                        >
                            Meet the Pets
                            <FiArrowRight />
                        </Link>
                    </div>


                    <div
                        className="rounded-xl border border-slate-200 p-6 sm:p-8 dark:border-slate-700"
                        style={{
                            backgroundColor: "var(--commitments-bg)",
                        }}
                    >
                        <h3 className="text-xl font-bold !text-slate-900 dark:!text-white">
                            What We Stand For
                        </h3>

                        <ul className="mt-6 space-y-5">
                            {commitments.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <FiCheckCircle className="mt-1 shrink-0 text-xl text-orange-500 dark:text-orange-400" />
                                    <span className="leading-7 text-slate-700 dark:text-slate-300">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            {/* Final Call to Action */}
            <section className="!bg-white px-4 pb-10 dark:!bg-[#0b1220]">
                <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-12 text-center shadow-xl sm:px-12 sm:py-16">
                    <FiHeart className="mx-auto text-4xl text-white" />

                    <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
                        Ready to Meet Your New Best Friend?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-orange-50">
                        Explore available pets and discover a companion who could
                        become a special part of your family.
                    </p>

                    <Link
                        href="/all-pets"
                        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 font-bold text-orange-600 transition hover:bg-orange-50"
                    >
                        Browse All Pets
                        <FiArrowRight />
                    </Link>
                </div>
            </section>
        </main>
    );
}
