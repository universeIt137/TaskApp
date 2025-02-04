"use client";

import { url } from "@/utility/url";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ Use useRouter for navigation
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginForm() {
    const router = useRouter(); // ✅ Initialize router
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        setLoading(true);
        const payload = { email, password };

        try {
            const res = await axios.post(`${url()}/login`, payload);

            if (res?.data?.data?.token) {
                localStorage.setItem("token", res.data.data.token);
                alert("User logged in successfully!");

                // ✅ Redirect to home page after successful login
                router.push("/");
            }
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || "Login failed!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center lg:my-20">
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4 relative">
                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            className="absolute right-3 top-10 text-gray-500 hover:text-gray-700"
                        >
                            {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 ${loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                    <div className="my-3" >
                        <span className="" >You have not account please ? <Link href={"/registration"}>Registration</Link> </span>
                    </div>
                </div>
            </div>

        </>
    );
}
