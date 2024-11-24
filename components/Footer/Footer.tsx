import React from "react";
import Image from "next/image";

import clsx from "clsx";

import {
    RiYoutubeLine,
    RiInstagramLine,
    RiFacebookBoxLine,
    RiGithubLine,
    RiTwitterXLine,
} from "react-icons/ri";

import NewsletterForm from "./NewsletterForm";
import CustomLink from "../ui/CustomLink/CustomLink";

const shopCategories = [
    {
        name: "Unisex",
        href: "/",
    },
    {
        name: "Women",
        href: "/",
    },
    {
        name: "Men",
        href: "/",
    },
];

const shopCollections = [
    {
        name: "Latest Arrivals",
        href: "/",
    },
    {
        name: "Urban Oasis",
        href: "/",
    },
    {
        name: "Cozy Comfort",
        href: "/",
    },
];

type LinksProps = {
    header: string;
    links: { name: string; href: string }[];
    lgColStart?: number;
};

function Links({ header, links, lgColStart }: LinksProps) {
    return (
        <div
            className={clsx(
                "col-span-full md:col-span-3",
                lgColStart && `lg:col-start-${String(lgColStart)}`,
            )}
        >
            {/* Flex Wrapper */}
            <div className="flex flex-col gap-y-4">
                <p className="text-sm text-neutral-500 uppercase">{header}</p>
                {/* Links Wrapper */}
                <div className="flex flex-col gap-y-3">
                    {links.map((category, index) => {
                        return (
                            <CustomLink
                                key={index}
                                href={category.href}
                                text={category.name}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center gap-y-12 bg-white py-12 md:gap-y-16 md:py-16 lg:py-24">
            {/* Newsletter Form */}
            <NewsletterForm />

            {/* Links */}
            <section className="flex flex-col gap-12 md:gap-16">
                {/* Logo, Supporting and Links Container */}
                <div className="container">
                    {/* Content */}
                    <div className="col-span-full grid grid-cols-subgrid gap-y-8 md:gap-y-16">
                        {/* Logo and Supporting Text */}
                        <div className="col-span-full md:col-span-3 lg:col-span-4">
                            {/* Wrapper */}
                            <div className="flex flex-col gap-y-6 md:gap-y-8">
                                {/* Logo */}
                                <Image
                                    src="/stylenest.svg"
                                    alt="Stylenest Logo"
                                    width={105}
                                    height={32}
                                />
                                {/* Supporting Text */}
                                <p className="text-neutral-600">
                                    Craft stunning style journeys that weave
                                    more joy into every thread.
                                </p>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="col-span-full grid grid-cols-subgrid gap-y-8 lg:col-span-8">
                            {/* Shop Categories Links */}
                            <Links
                                links={shopCategories}
                                header="Shop Categories"
                                lgColStart={3}
                            />

                            {/* Shop Collections */}
                            <Links
                                links={shopCollections}
                                header="Shop Collections"
                            />
                        </div>
                    </div>
                </div>

                {/* Copyright and Social Icons Container */}
                <div className="container">
                    {/* Content */}
                    <div className="col-span-full grid grid-cols-subgrid border-t border-solid border-neutral-200 pt-8">
                        <div className="col-span-full flex flex-col gap-y-8 md:flex-row md:gap-x-8">
                            {/* Footer Text */}
                            <p className="text-neutral-500 lg:grow">
                                &copy; 2024 StyleNest, Inc. All rights reserved.
                            </p>

                            {/* Social Icons */}
                            <div className="flex flex-row gap-x-6">
                                <RiYoutubeLine
                                    size={24}
                                    className="fill-neutral-400"
                                />
                                <RiInstagramLine
                                    size={24}
                                    className="fill-neutral-400"
                                />
                                <RiFacebookBoxLine
                                    size={24}
                                    className="fill-neutral-400"
                                />
                                <RiGithubLine
                                    size={24}
                                    className="fill-neutral-400"
                                />
                                <RiTwitterXLine
                                    size={24}
                                    className="fill-neutral-400"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}
