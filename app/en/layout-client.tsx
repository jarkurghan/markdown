"use client";

import React from "react";
import { useTheme } from "@/contexts/theme-context";
import { usePathname } from "next/navigation";
import Header from "./header";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();

    const getCurrentPage = () => {
        if (pathname === "/en/what-is-markdown") return "what-is-markdown";
        if (pathname === "/en/about") return "about";

        return "editor";
    };

    const currentPage = getCurrentPage();

    return (
        <div className={`h-screen overflow-hidden bg-color-6 transition-colors duration-300`}>
            <Header onToggleTheme={toggleTheme} currentPage={currentPage} theme={theme} />
            <main className="h-full pt-16 transition-all duration-300">{children}</main>
        </div>
    );
};

export default MainLayout;
