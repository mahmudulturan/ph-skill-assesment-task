"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children, ...props }) => {
    const pathname = usePathname();
    return (
        <Link href={href} {...props}>
            <button
                className={`px-3 py-2 hover:bg-[#EFF6FF] hover:text-primaryCol ${pathname === href && "bg-[#EFF6FF] text-primaryCol"} rounded-md w-full flex items-center justify-start gap-2 duration-300`}>
                {children}
            </button>
        </Link>
    );
};

export default NavLink;