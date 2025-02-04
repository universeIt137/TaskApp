"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className=' bg-purple-500 py-2 ' >
            <div className=' flex justify-between items-center w-11/12 mx-auto    ' >
                {/* logo */}
                <div>
                    <Link href={"/"}>LoGo</Link>
                </div>
                {/* menu */}
                <div>
                    <nav>
                        <ul className='flex text-white font-semibold ' >
                            <li> <Link className={pathname === "/" ? " font-bold underline px-3 bg-red-600 py-2 rounded-lg shadow-lg " : ""} href={"/"}>Home</Link> </li>
                        </ul>
                    </nav>
                </div>
                {/* loging button */}
                <div>
                    <button className=' px-4 py-1 border bg-green-400 font-semibold rounded-lg shadow-xl text-white ' >
                        <Link href={"/login"}>Login</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;