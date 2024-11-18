import React from "react";

import Link from "next/link";

type CustomLinkProps = {
    text: string;
    href: string;
};

export default function CustomLink({ text, href }: CustomLinkProps) {
    return (
        <Link
            href={href}
            className="desktop:text-base desktop:font-[500] py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 focus:rounded-[4px] focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)] disabled:text-neutral-400 lg:py-0"
        >
            {text}
        </Link>
    );
}
