import React from "react";

import TextInput from "../ui/TextInput/TextInput";
import Button from "../ui/Button/Button";

export default function NewsletterForm() {
    return (
        <section className="w-full">
            <div className="container !gap-y-8 md:!gap-y-5 lg:!gap-y-0">
                {/* Text and Supporting Text */}
                <div className="col-span-full flex flex-col gap-2 lg:col-span-6">
                    {/* Text */}
                    <p className="text-neural-900 text-xl font-semibold">
                        Join our newsletter
                    </p>
                    {/* Supporting Text */}
                    <p className="text-neutral-600">
                        We&rsquo;ll send you a nice letter once per week. No
                        spam.
                    </p>
                </div>

                {/* Email Capture */}
                <form className="col-span-full flex flex-col gap-y-4 md:flex-row md:items-start md:gap-5 lg:col-span-6">
                    <TextInput
                        placeholder="Enter your email"
                        requiredMessage="Email address is required"
                        errorMessage="Please enter a valid email address."
                        isDisabled={false}
                    />
                    <Button text="Subscribe" isDisabled={false} />
                </form>
            </div>
        </section>
    );
}
