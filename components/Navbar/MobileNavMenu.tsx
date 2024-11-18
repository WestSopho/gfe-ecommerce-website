"use client";
import React from "react";

import Image from "next/image";
import CustomLink from "../ui/CustomLink/CustomLink";

import { RiCloseFill } from "react-icons/ri";

import { useContext } from "react";
import { MenuNavContext } from "@/context/MenuNavContext";
import clsx from "clsx";

export default function MobileNavMenu() {
    const context = useContext(MenuNavContext);

    return (
        <nav
            className={clsx(
                "fixed bottom-0 top-0 z-10 flex w-[300px] flex-col gap-6 bg-white pb-4 pt-8 transition-[left] duration-[0.3s] ease-in-out lg:hidden",
                {
                    "-left-full": !context?.menuNavOpen,
                    "left-0": context?.menuNavOpen,
                },
            )}
            id="slideout-menu"
        >
            <div className="container">
                {/* Image */}
                <Image
                    src="stylenest.svg"
                    width={0}
                    height={0}
                    alt="stylenest logo"
                    className="col-span-3 h-[32px] w-[105px] shrink-0"
                />
                {/* Close button */}
                <div className="col-span-1 flex items-center justify-end md:col-span-3 lg:col-span-9">
                    <button onClick={() => context?.setMenuNavOpen(false)}>
                        <RiCloseFill size={24} />
                    </button>
                </div>
            </div>

            <div className="container">
                <div className="col-span-full flex flex-col gap-2">
                    <CustomLink text="Shop All" href="/shop" />
                    <CustomLink text="Latest Arrivals" href="/latest" />
                </div>
            </div>
        </nav>
    );
}
