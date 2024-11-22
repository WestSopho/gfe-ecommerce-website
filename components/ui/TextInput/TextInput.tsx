"use client";

import React, { useState } from "react";

type TextInputProps = {
    placeholder: string;
    requiredMessage: string;
    errorMessage: string;
    isDisabled?: boolean;
};

export default function TextInput({
    placeholder,
    requiredMessage,
    errorMessage,
    isDisabled,
}: TextInputProps) {
    const [isTouched, setIsTouched] = useState(false);
    const [isRequired, setIsRequired] = useState(false);

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsTouched(true);
        setIsRequired(event.target.value === "");
    };

    return (
        <div className="flex w-full flex-col gap-1.5">
            <input
                type="email"
                placeholder={placeholder}
                className={` ${isTouched && "focus:invalid:shadow-textinput-error"} peer inline-block w-full rounded border border-solid border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-900 outline-none placeholder:text-neutral-500 focus:shadow-textinput disabled:bg-neutral-50 disabled:text-neutral-400 disabled:placeholder:text-neutral-400`}
                disabled={isDisabled}
                required
                onBlur={handleBlur}
                onInvalid={(event) => event.preventDefault()}
            />
            <p
                className={`invisible text-sm text-red-600 ${isTouched && "peer-invalid:visible"}`}
            >
                {isRequired ? requiredMessage : errorMessage}
            </p>
        </div>
    );
}
