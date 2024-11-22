import React from "react";

import NewsletterForm from "./NewsletterForm";

export default function Footer() {
    return (
        <footer className="flex items-center justify-center gap-y-12 bg-white py-12 md:gap-y-16 md:py-16 lg:py-24">
            <NewsletterForm />
        </footer>
    );
}
