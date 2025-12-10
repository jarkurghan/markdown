"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "./header";
import { useTheme } from "@/contexts/theme-context";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const { theme, toggleTheme } = useTheme();
    const [isDark, setIsDark] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        const savedTheme = localStorage.getItem("markedit-theme");
        if (savedTheme) {
            const isDarkTheme = savedTheme === "dark";
            setIsDark(isDarkTheme);
            document.documentElement.classList.toggle("dark", isDarkTheme);
        } else {
            document.documentElement.classList.toggle("dark", isDark);
        }
    }, []);

    const toggleTheme2 = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);

        document.documentElement.classList.toggle("dark", newTheme);
        localStorage.setItem("markedit-theme", newTheme ? "dark" : "light");
    };

    const getCurrentPage = () => {
        if (pathname === "/what-is-markdown") return "what-is-markdown";
        if (pathname === "/about") return "about";

        return "editor";
    };

    const currentPage = getCurrentPage();

    return (
        <div className={`h-screen overflow-hidden ${isDark ? "dark bg-gray-900" : "bg-gray-50"} transition-colors duration-300`}>
            <Header isDark={isDark} onToggleTheme={toggleTheme} currentPage={currentPage} />

            <main className="h-full pt-16 transition-all duration-300">{children}</main>
        </div>
    );
};

export default MainLayout;
