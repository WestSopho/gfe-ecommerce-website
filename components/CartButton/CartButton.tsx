import React from "react";

import clsx from "clsx";

import { RiShoppingBag3Line } from "react-icons/ri";

type CartButtonProps = {
    count: number;
};

export default function CartButton({ count }: CartButtonProps) {
    return (
        <button className="group relative focus:rounded-[4px] focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)]">
            {/* Badge */}
            <div
                className={clsx(
                    "absolute bottom-1/2 left-1/2 flex size-[18px] items-center justify-center rounded-full bg-indigo-700 py-px text-center text-xs font-semibold text-white group-disabled:bg-neutral-100 group-disabled:text-neutral-400",
                    count === 0 && "hidden",
                )}
            >
                {count >= 10 ? "9+" : count}
            </div>
            {/* Icon */}
            <RiShoppingBag3Line
                size={24}
                className="group-disabled:fill-neutral-400"
            />
        </button>
    );
}
