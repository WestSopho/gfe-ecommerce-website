"use client";

import React from "react";

import { createContext, useState } from "react";

interface MenuNavContextType {
    menuNavOpen: boolean;
    setMenuNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuNavContext = createContext<MenuNavContextType | undefined>(
    undefined,
);

export default function MenuNavProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [menuNavOpen, setMenuNavOpen] = useState(false);

    return (
        <MenuNavContext.Provider value={{ menuNavOpen, setMenuNavOpen }}>
            {children}
        </MenuNavContext.Provider>
    );
}
