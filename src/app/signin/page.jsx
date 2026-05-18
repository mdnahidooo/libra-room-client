"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { RiResetRightFill } from "react-icons/ri";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignInPage() {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });

        if (!error) {
            toast.success("Signed in successfully!", {
                style: {
                    background: "rgba(240, 251, 252, 0.85)",
                    color: "#3F4255",
                    border: "1px solid rgba(6, 187, 204, 0.3)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                },
            });
        } else {
            toast.error("Invalid email or password!", {
                style: {
                    background: "rgba(240, 251, 252, 0.75)",
                    color: "#3F4255",
                    border: "1px solid rgba(6, 187, 204, 0.4)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
                },
            });
        }
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: 'google'
        });
    };

    return (
        <div className="flex items-center justify-center pb-12 pt-10 px-4 bg-[#F0FBFC]">

            {/* CARD */}
            <Card className="relative overflow-hidden border border-[#cfeaec] mx-auto w-125 py-10 mt-5 bg-white shadow-md rounded-2xl">

                {/* ✨ Decorative Top Right Shape */}
                <div className="absolute -top-10 -right-10 w-58 h-58 bg-[#06BBCC] opacity-10 rounded-full"></div>

                <h1 className="text-center text-2xl font-bold text-[#3F4255]">
                    Sign In
                </h1>

                <Form className="flex mx-auto flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-[#3F4255]">Email</Label>
                        <Input
                            placeholder="Enter you email"
                            className="border-[#cfeaec]"
                        />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type={isShowPassword ? "text" : "password"}
                        className="relative"
                        validate={(value) => {
                            if (value.length < 8) return "Password must be at least 8 characters";
                            if (!/[A-Z]/.test(value)) return "Must contain uppercase letter";
                            if (!/[0-9]/.test(value)) return "Must contain number";
                            return null;
                        }}
                    >
                        <span
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#06BBCC] z-20"
                            onClick={() => setIsShowPassword(!isShowPassword)}
                        >
                            {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>

                        <Label className="text-[#3F4255]">Password</Label>
                        <Input
                            placeholder="Enter your password"
                            className="border-[#cfeaec]"
                        />

                        <Description className="text-[#64748B]">
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>

                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button
                            type="submit"
                            className="bg-[#06BBCC] text-white font-medium"
                        >
                            <Check />
                            Submit
                        </Button>

                        <Button
                            type="reset"
                            variant="secondary"
                            className="text-[#3F4255] border border-[#cfeaec]"
                        >
                            <RiResetRightFill />
                            Reset
                        </Button>
                    </div>
                </Form>

                <p className="text-center text-[#64748B]">Or</p>

                <Button
                    onClick={handleGoogleSignIn}
                    variant="outline"
                    className="w-full border border-[#cfeaec] text-[#3F4255] hover:bg-[#F0FBFC]"
                >
                    <FcGoogle />
                    Sign In With Google
                </Button>

                <p className="mt-4 text-center">
                    <span className="text-[#64748B]">
                        Do not have an account?{" "}
                    </span>
                    <Link href={"/signup"} className="text-[#06BBCC] font-medium">
                        Register
                    </Link>
                </p>

            </Card>
        </div>
    );
}