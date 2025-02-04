"use client";
import { url } from "@/utility/url";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {

        e.preventDefault();
        if (!name || !email || !password) {
            alert("All fields are required!");
            return;
        }
        console.log("Form Data:", { name, email, password });
        const payload = {
            name, email, password
        }
        try {
            setLoading(true);
            const res = await axios.post(`${url()}/register`, payload);
            setLoading(false);
            if (res) {
                alert("User registration successfully");
                e.target.reset();
                return router.push("/login");
            }
        } catch (error) {
            alert("login fail")
            console.log(error)
        } finally {
            setLoading(false)
        }
        alert("Registration Successful!");
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <form onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4 relative">
                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700"
                    >
                        {
                            loading ? "submiting.." : "Submit"
                        }
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
