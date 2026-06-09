"use client";

import React from "react";
import {
    Card,
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";

import { Check } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { toast } from "react-toastify";

const SignUpPage = () => {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData);

        const { name, email, photo, password, confirmPassword } = user;


        const errors = [];

        // Name validation
        if (!name || name.trim().length < 2) {
            errors.push("Name must be at least 2 characters long");
        }

        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.push("Please enter a valid email address");
        }

        // Photo URL validation
        if (!photo || !photo.startsWith("http")) {
            errors.push("Please enter a valid photo URL");
        }

        // Password validation
        if (password.length < 6) {
            errors.push("Password must be at least 6 characters");
        }

        if (!/[A-Z]/.test(password)) {
            errors.push("Password must contain at least one uppercase letter");
        }

        if (!/[a-z]/.test(password)) {
            errors.push("Password must contain at least one lowercase letter");
        }

        // Confirm password validation
        if (password !== confirmPassword) {
            errors.push("Passwords do not match");
        }

        if (errors.length > 0) {
            errors.forEach((error) => toast.error(error));
            return;
        }

        toast.success("Registration successful!");

        // TODO: Add Firebase/Auth registration here

        setTimeout(() => {
            router.push("/");
        }, 1000);
    };

    const handleGoogleLogin = () => {
        console.log("Google login clicked");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-6">
            <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-5 sm:p-6 md:p-8 shadow-xl rounded-2xl bg-white">
                {/* Header */}
                <div className="text-center mb-6">
                    <div className="flex justify-center mb-2">
                        <Image
                            src="https://i.ibb.co/ns6LHjvF/Untitled-design.png"
                            alt="Pet Adoption Logo"
                            width={80}
                            height={80}
                            priority
                            className="rounded-full"
                        />
                    </div>

                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                        Join Our Pet Adoption Family
                    </h1>

                    <p className="text-xs sm:text-sm text-gray-500 mt-2">
                        Create an account to adopt lovable pets like dogs,
                        cats, birds & more 🐶🐱
                    </p>
                </div>

                {/* Form */}
                <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <TextField name="name" isRequired>
                        <Label>Name</Label>
                        <Input placeholder="John Doe" />
                        <FieldError />
                    </TextField>

                    <TextField name="email" type="email" isRequired>
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField name="photo" isRequired>
                        <Label>Photo URL</Label>
                        <Input placeholder="https://your-image.com/photo.jpg" />
                        <FieldError />
                    </TextField>

                    <TextField name="password" type="password" isRequired>
                        <Label>Password</Label>
                        <Input placeholder="Enter password" />
                        <Description>
                            At least 6 characters, 1 uppercase, 1 lowercase
                        </Description>
                        <FieldError />
                    </TextField>

                    <TextField
                        name="confirmPassword"
                        type="password"
                        isRequired
                    >
                        <Label>Confirm Password</Label>
                        <Input placeholder="Re-enter password" />
                        <FieldError />
                    </TextField>

                    <Button
                        type="submit"
                        className="w-full bg-black text-white hover:bg-gray-800"
                    >
                        <Check />
                        Create Account
                    </Button>
                </Form>

                {/* Divider */}
                <div className="flex items-center my-5">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="px-3 text-xs text-gray-400">OR</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
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

                {/* Login Link */}
                <p className="text-center text-xs sm:text-sm text-gray-500 mt-6">
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="text-black font-medium hover:underline"
                    >
                        Login
                    </a>
                </p>
            </Card>
        </div>
    );
};

export default SignUpPage;