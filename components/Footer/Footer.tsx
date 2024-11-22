import React from "react";
import Image from "next/image";

import NewsletterForm from "./NewsletterForm";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center gap-y-12 bg-white py-12 md:gap-y-16 md:py-16 lg:py-24">
            {/* Newsletter Form */}
            <NewsletterForm />

            {/* Links */}
            <section className="w-full">
                {/* Logo, Supporting and Links Container */}

                <div className="container">
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
                                Craft stunning style journeys that weave more
                                joy into every thread.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}
