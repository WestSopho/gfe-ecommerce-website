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
            className="desktop:text-base desktop:font-[500] focus:shadow-link py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 focus:rounded-[4px] disabled:text-neutral-400 lg:py-0"
        >
            {text}
        </Link>
    );
}
