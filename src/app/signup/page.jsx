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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiResetRightFill } from "react-icons/ri";
import { toast } from "react-toastify";

export default function SignUpPage() {

    const router = useRouter()
    const [isShowPassword, setIsShowPassword] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        })

        if (!error) {
            toast.success("Account created successfully!", {
                style: {
                    background: "rgba(240, 251, 252, 0.85)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(6, 187, 204, 0.25)",
                    color: "#3F4255",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.10)",
                },
                progressStyle: {
                    background: "#06BBCC",
                },
            });

            setTimeout(() => {
                router.push('/');
            }, 30);
        }
        else {
            toast.error("Registration failed. Email may already exist", {
                style: {
                    background: "rgba(240, 251, 252, 0.85)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(6, 187, 204, 0.25)",
                    color: "#3F4255",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.10)",
                },
                progressStyle: {
                    background: "#06BBCC",
                },
            });
        }
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: 'google'
        })
    }

    return (
        <div className="flex items-center justify-center pb-20 pt-5 px-4 bg-[#F0FBFC]">

            <Card className="relative overflow-hidden border border-[#cfeaec] mx-auto w-125 py-10 mt-5 bg-white shadow-md">

                {/* ✨ Decorative Shape */}
                <div className="absolute -top-10 -right-10 w-58 h-58 bg-[#06BBCC] opacity-10 rounded-full"></div>

                <h1 className="text-center text-2xl font-bold text-[#3F4255]">
                    Sign Up
                </h1>

                <Form className="flex mx-auto flex-col gap-4 mt-4" onSubmit={onSubmit}>

                    <TextField isRequired name="name" type="text">
                        <Label className="text-[#3F4255]">Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>

                    <TextField isRequired name="image" type="text">
                        <Label className="text-[#3F4255]">Image URL</Label>
                        <Input placeholder="Image URL" />
                        <FieldError />
                    </TextField>

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
                        <Input placeholder="Enter your email" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type={isShowPassword ? "text" : "password"}
                        className="relative"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
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
                        <Input placeholder="Enter your password" />
                        <Description className="text-[#64748B]">
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit" className="bg-[#06BBCC] text-white">
                            <Check />
                            Submit
                        </Button>

                        <Button type="reset" variant="secondary" className="text-[#3F4255] border border-[#cfeaec]">
                            <RiResetRightFill />
                            Reset
                        </Button>
                    </div>

                </Form>

                <p className="text-center text-[#64748B]">Or</p>

                <Button onClick={handleGoogleSignIn} variant="outline" className={'w-full border border-[#cfeaec] text-[#3F4255]'}>
                    <FcGoogle />
                    Sign In With Google
                </Button>

                <p className="mt-4 text-center">
                    <span className="text-[#64748B]">Already have an account?{" "}</span>
                    <Link href={"/signin"} className="text-[#06BBCC]">
                        Login
                    </Link>
                </p>
            </Card>
        </div>
    );
}