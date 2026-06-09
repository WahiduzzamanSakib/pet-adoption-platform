"use client";

import React from "react";
import {
    Card,
    Button,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const SignInPage = () => {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { email, password } = Object.fromEntries(formData);

       
        if (!email || !password) {
            toast.error("Email and Password are required");
            return;
        }

        try {
            const { data, error } = await authClient.signIn.email({
                email,
                password,
            });



            if (error) {
                toast.error(error.message || "Invalid email or password");
                return;
            }

            toast.success("Login successful!");

            setTimeout(() => {
                router.push("/");
            }, 1000);

        } catch (err) {
            console.error(err);
            toast.error("Something went wrong");
        }
    };

    const handleGoogleLogin = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: "google",
        });

        if (error) {
            toast.error("Google login failed");
            return;
        }

        if (data) {
            toast.success("Login successful!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-6">
            <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-5 sm:p-6 md:p-8 shadow-xl rounded-2xl bg-white">
                {/* Logo */}
                <div className="flex flex-col items-center mb-6">
                    <Image
                        src="https://i.ibb.co/ns6LHjvF/Untitled-design.png"
                        alt="Logo"
                        width={80}
                        height={80}
                        className="rounded-full"
                    />

                    <h1 className="text-2xl font-bold mt-4">
                        Welcome Back
                    </h1>

                    <p className="text-sm text-gray-500 text-center mt-2">
                        Sign in to continue your pet adoption journey 🐾
                    </p>
                </div>

                {/* Login Form */}
                <Form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <TextField name="email" type="email" isRequired>
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                    </TextField>

                    <TextField
                        name="password"
                        type="password"
                        isRequired
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                    </TextField>

                    <Button
                        type="submit"
                        className="w-full bg-black text-white hover:bg-gray-800"
                    >
                        Login
                    </Button>
                </Form>

                {/* Divider */}
                <div className="flex items-center my-3">
                    <div className="flex-1 border-t"></div>
                    <span className="px-3 text-gray-400 text-sm">OR</span>
                    <div className="flex-1 border-t"></div>
                </div>

                {/* Google Login */}
                <Button
                    onClick={handleGoogleLogin}
                    variant="secondary"
                    className="w-full flex items-center justify-center gap-2 border hover:bg-gray-50"
                >
                    <FcGoogle size={20} />
                    Continue with Google
                </Button>

                {/* Register Link */}
                <p className="text-center text-sm text-gray-500 mt-3">
                    Don't have an account? {" "}
                    <Link
                        href="/signup"
                        className="font-medium text-black hover:underline ml-2"
                    >
                        Register
                    </Link>
                </p>
            </Card>
        </div>
    );
};

export default SignInPage;