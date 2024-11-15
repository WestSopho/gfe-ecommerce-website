import React from 'react'

import Link from 'next/link'

type CustomLinkProps = {
    text: string;
    href: string;
};

export default function CustomLink({text, href}: CustomLinkProps) {
  return (
    <Link href={href} className="text-sm desktop:text-base desktop:font-[500]">
        {text}
    </Link>
  )
}
