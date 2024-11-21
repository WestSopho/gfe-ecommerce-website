import React from "react";

type ButtonProps = {
    text: string;
    eventHandler?: () => void;
    isDisabled: boolean;
};

export default function Button({
    text,
    eventHandler,
    isDisabled,
}: ButtonProps) {
    return (
        <button
            className="flex items-center justify-center rounded bg-indigo-700 px-3.5 py-2.5 text-sm font-medium text-white hover:bg-indigo-800 focus:shadow-button disabled:bg-neutral-100 disabled:text-neutral-400"
            disabled={isDisabled}
            onClick={eventHandler}
        >
            {text}
        </button>
    );
}
