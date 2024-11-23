import React from "react";
import Image from "next/image";

import clsx from "clsx";

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
                lgColStart && `lg:col-start-${lgColStart}`,
            )}
        >
            {/* Flex Wrapper */}
            <div className="flex flex-col gap-y-4">
                <p className="text-sm text-neutral-500">{header}</p>
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
            <section>
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
            </section>
        </footer>
    );
}
