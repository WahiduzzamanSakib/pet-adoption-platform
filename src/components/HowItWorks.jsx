import Link from "next/link";
import {
    FiHeart,
    FiArrowRight,
    FiSearch,
    FiFileText,
    FiHome,
} from "react-icons/fi";
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



export default function HowItWorks() {
    return (
        <section className="!bg-slate-50 px-4 py-12 transition-colors duration-300 dark:!bg-[#0b1220] sm:py-16">
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
            </div>
        </section>
    );
}

