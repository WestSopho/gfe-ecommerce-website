"use client";

import React from "react";

import Image from "next/image";

import CustomLink from "../ui/CustomLink/CustomLink";
import CartButton from "../CartButton/CartButton";

import { RiMenuFill } from "react-icons/ri";

import { useContext } from "react";
import { MenuNavContext } from "@/context/MenuNavContext";

export default function Navbar() {
    const context = useContext(MenuNavContext);
    return (
        <header className="pt-4">
            <nav className="container h-[68px] items-center">
                {/* Logo */}
                <Image
                    src="stylenest.svg"
                    width={0}
                    height={0}
                    alt="stylenest logo"
                    className="col-span-2 h-[32px] w-[105px]"
                />
                {/* Links */}
                <div className="hidden lg:col-span-8 lg:flex lg:gap-8">
                    <CustomLink text="Shop All" href="/shop" />
                    <CustomLink text="Latest Arrivals" href="/latest" />
                </div>

                {/* Menu Icon and Shopping Card */}
                <div className="col-span-2 flex items-center justify-end gap-4 md:col-span-4 lg:col-span-2">
                    <CartButton count={1} />
                    <button
                        onClick={() => context?.setMenuNavOpen(true)}
                        className="lg:hidden"
                        aria-expanded={context?.menuNavOpen}
                        aria-controls="slideout-menu"
                    >
                        <RiMenuFill size={24} />
                    </button>
                </div>
            </nav>
        </header>
    );
}
