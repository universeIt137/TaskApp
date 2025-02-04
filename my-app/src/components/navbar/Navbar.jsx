"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();


    // ✅ Fix hydration issue: Get token after component mounts
    const token = localStorage.getItem("token")

    const handleLogout = () => {
        localStorage.clear();
        router.push("/");
        window.location.href = "/"
    };

    return (
        <div className="bg-purple-500 py-2">
            <div className="flex justify-between items-center w-11/12 mx-auto">
                {/* Logo */}
                <div>
                    <Link href="/">LoGo</Link>
                </div>

                {/* Menu */}
                <div>
                    <nav>
                        <ul className="flex text-white font-semibold gap-3 ">
                            <li>
                                <Link
                                    className={`px-3 py-2 rounded-lg  ${pathname === "/"
                                        ? "font-bold underline bg-red-600"
                                        : ""
                                        }`}
                                    href="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                {
                                    token && <Link
                                        className={`px-3 py-2 rounded-lg  ${pathname === "/add-task"
                                            ? "font-bold underline bg-red-600"
                                            : ""
                                            }`}
                                        href="/add-task"
                                    >
                                        Add Task
                                    </Link>
                                }
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Login/Logout Button */}
                <div>
                    {token ? (
                        <button
                            onClick={handleLogout}
                            className="px-4 py-1 border bg-green-400 font-semibold rounded-lg shadow-xl text-white"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link href="/login">
                            <button className="px-4 py-1 border bg-green-400 font-semibold rounded-lg shadow-xl text-white">
                                Login
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
