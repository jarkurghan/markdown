"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Quote, Code, Image, Heading1, Heading2, Table, Minus, HelpCircle, Home, Info, Globe } from "lucide-react";
import { Download, Upload, FileText, Moon, Sun, Menu, X, Bold, Italic, Link, List, ListOrdered } from "lucide-react";

interface HeaderProps {
    theme: "dark" | "light";
    onToggleTheme: () => void;
    currentPage: "editor" | "what-is-markdown" | "about";
}

const Header: React.FC<HeaderProps> = ({ onToggleTheme, currentPage, theme }) => {
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [isToolbarOpen, setIsToolbarOpen] = React.useState(false);
    const [isLangbarOpen, setIsLangbarOpen] = React.useState(false);

    const toolbarItems = [
        { icon: Heading1, action: () => insertMarkdown("# "), title: "Sarlavha 1", label: "Sarlavha 1" },
        { icon: Heading2, action: () => insertMarkdown("## "), title: "Sarlavha 2", label: "Sarlavha 2" },
        { icon: Bold, action: () => insertMarkdown("**", "**"), title: "Qalin matn", label: "Qalin" },
        { icon: Italic, action: () => insertMarkdown("*", "*"), title: "Kursiv matn", label: "Kursiv" },
        { icon: Link, action: () => insertMarkdown("[", "](url)"), title: "Havola", label: "Havola" },
        { icon: Image, action: () => insertMarkdown("![alt](", ")"), title: "Rasm", label: "Rasm" },
        { icon: Code, action: () => insertMarkdown("`", "`"), title: "Inline kod", label: "Kod" },
        { icon: Quote, action: () => insertMarkdown("> "), title: "Iqtibos", label: "Iqtibos" },
        { icon: List, action: () => insertMarkdown("- "), title: "Tartiblanmagan ro‘yxat", label: "Ro‘yxat" },
        { icon: ListOrdered, action: () => insertMarkdown("1. "), title: "Tartiblangan ro‘yxat", label: "Tartiblangan ro‘yxat" },
        {
            icon: Table,
            action: () => insertMarkdown("| Ustun 1 | Ustun 2 |\n|---------|---------|\n| Katakcha 1 | Katakcha 2 |"),
            title: "Jadval",
            label: "Jadval",
        },
        { icon: Minus, action: () => insertMarkdown("\n---\n"), title: "Gorizontal chiziq", label: "Chiziq" },
    ];

    const langbarItems = [
        { icon: "🇺🇿", action: () => router.push("/uz"), title: "O'zbek tili" },
        { icon: "🇬🇧", action: () => router.push("/en"), title: "English" },
    ];

    const insertMarkdown = (before: string, after?: string) => {
        if ((window as any).editorActions?.insertMarkdown) {
            (window as any).editorActions.insertMarkdown(before, after);
        }
    };

    const downloadMarkdown = () => {
        if ((window as any).editorActions?.downloadMarkdown) {
            (window as any).editorActions.downloadMarkdown();
        }
    };

    const uploadFile = () => {
        if ((window as any).editorActions?.uploadFile) {
            (window as any).editorActions.uploadFile();
        }
    };

    const handleToolbarToggle = () => {
        if (isSidebarOpen) {
            setIsSidebarOpen(false);
        }
        if (isLangbarOpen) {
            setIsLangbarOpen(false);
        }
        setIsToolbarOpen(!isToolbarOpen);
    };

    const handleLangToggle = () => {
        if (isSidebarOpen) {
            setIsSidebarOpen(false);
        }
        if (isToolbarOpen) {
            setIsToolbarOpen(false);
        }
        setIsLangbarOpen(!isLangbarOpen);
    };

    const handleSidebarToggle = () => {
        if (isToolbarOpen) {
            setIsToolbarOpen(false);
        }
        if (isLangbarOpen) {
            setIsLangbarOpen(false);
        }
        setIsSidebarOpen(!isSidebarOpen);
    };

    const navigateToWhatIsMarkdown = () => {
        router.push("/uz/markdown-ozi-nima");
        setIsSidebarOpen(false);
    };

    const navigateToAbout = () => {
        router.push("/uz/dastur-haqida");
        setIsSidebarOpen(false);
    };

    const navigateToEditor = () => {
        router.push("/uz");
        setIsSidebarOpen(false);
    };

    const navigateToHome = () => {
        router.push("/uz");
        setIsSidebarOpen(false);
        setIsLangbarOpen(false);
        setIsToolbarOpen(false);
    };

    const isEditorPage = currentPage === "editor";

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 bg-color-4 backdrop-blur-sm border-b bor-col-1 transition-all duration-300`}>
                <div className="flex items-center justify-between px-6 py-3">
                    <button onClick={navigateToHome} className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
                        <div className="p-2 rounded-xl bg-linear-to-r from-blue-500 to-purple-500">
                            <FileText className="w-5 h-5 text-white" />
                        </div>

                        <h1 className={`text-lg font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hidden sm:block`}>
                            Markdown muharriri
                        </h1>
                    </button>

                    <div className="flex items-center space-x-2">
                        {isEditorPage && (
                            <>
                                <button
                                    onClick={uploadFile}
                                    className={`p-2 rounded-lg text-gray-1 text-gray-6 bg-color-8 transition-all duration-200`}
                                    title="Fayl yuklash"
                                >
                                    <Upload className="w-5 h-5" />
                                </button>

                                <button
                                    onClick={downloadMarkdown}
                                    className={`p-2 rounded-lg text-gray-1 text-gray-6 bg-color-8 transition-all duration-200`}
                                    title="Markdownni yuklab olish"
                                >
                                    <Download className="w-5 h-5" />
                                </button>

                                <button
                                    onClick={handleToolbarToggle}
                                    className={`p-2 rounded-lg transition-all duration-200 ${
                                        isToolbarOpen ? "bg-blue-500 text-white" : "text-gray-1 text-gray-6 bg-color-8"
                                    }`}
                                    title="Formatlash vositalari"
                                >
                                    <Bold className="w-5 h-5" />
                                </button>

                                <button
                                    onClick={handleLangToggle}
                                    className={`p-2 rounded-lg transition-all duration-200 ${
                                        isLangbarOpen ? "bg-blue-500 text-white" : "text-gray-1 text-gray-6 bg-color-8"
                                    }`}
                                    title="Tilni o'zgartirish"
                                >
                                    <Globe className="w-5 h-5" />
                                </button>
                            </>
                        )}

                        <button
                            onClick={handleSidebarToggle}
                            className={`p-2 rounded-lg transition-all duration-200 ${
                                isSidebarOpen ? "bg-blue-500 text-white" : "text-gray-1 text-gray-6 bg-color-8"
                            }`}
                            title="Menyu"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </header>

            {isEditorPage && (
                <div
                    className={`fixed top-0 right-0 h-full w-80 z-50 transform transition-transform duration-300 ease-in-out ${
                        isToolbarOpen ? "translate-x-0" : "translate-x-full"
                    } bg-color-2 border-l bor-col-1 shadow-2xl flex flex-col`}
                >
                    <div className={`flex items-center justify-between p-4 border-b bor-col-1 shrink-0`}>
                        <h2 className={`text-base font-semibold text-gray-7`}>Formatlash vositalari</h2>
                        <button
                            onClick={() => setIsToolbarOpen(false)}
                            className={`p-1.5 rounded-lg text-gray-1 text-gray-6 bg-color-8 transition-all duration-200`}
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="p-3 space-y-1 overflow-y-auto flex-1">
                        {toolbarItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    item.action();
                                    setIsToolbarOpen(false);
                                }}
                                className={`w-full flex items-center space-x-2 p-2 rounded-lg text-gray-1 text-gray-6 bg-color-8 transition-all duration-200 text-left text-sm`}
                                title={item.title}
                            >
                                <item.icon className="w-4 h-4" />
                                <span>{item.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {isEditorPage && (
                <div
                    className={`fixed top-0 right-0 h-full w-80 z-50 transform transition-transform duration-300 ease-in-out ${
                        isLangbarOpen ? "translate-x-0" : "translate-x-full"
                    } bg-color-2 border-l bor-col-1 shadow-2xl flex flex-col`}
                >
                    <div className={`flex items-center justify-between p-4 border-b bor-col-1 shrink-0`}>
                        <h2 className={`text-base font-semibold text-gray-7`}>Tilni o'zgartirish</h2>
                        <button
                            onClick={() => setIsLangbarOpen(false)}
                            className={`p-1.5 rounded-lg text-gray-1 text-gray-6 bg-color-8 transition-all duration-200`}
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="p-3 space-y-1 overflow-y-auto flex-1">
                        {langbarItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    item.action();
                                    setIsLangbarOpen(false);
                                }}
                                className={`w-full flex items-center space-x-2 p-2 rounded-lg text-gray-1 text-gray-6 bg-color-8 transition-all duration-200 text-left text-sm`}
                                title={item.title}
                            >
                                <div className="w-4 h-4">{item.icon}</div>
                                <span>{item.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div
                className={`fixed top-0 right-0 h-full w-80 z-50 transform transition-transform duration-300 ease-in-out ${
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                } bg-color-2 border-l bor-col-1 shadow-2xl flex flex-col`}
            >
                <div className={`flex items-center justify-between p-4 border-b bor-col-1 shrink-0`}>
                    <h2 className={`text-base font-semibold text-gray-7`}>Menyu </h2>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className={`p-1.5 rounded-lg text-gray-1 text-gray-6 bg-color-8 transition-all duration-200`}
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                <div className="p-3 space-y-2 overflow-y-auto flex-1">
                    <div className="space-y-0.5">
                        {currentPage !== "editor" && (
                            <button
                                onClick={navigateToEditor}
                                className={`w-full flex items-center space-x-2 p-2 rounded-lg text-gray-1 text-gray-6 bg-color-8 transition-all duration-200 text-left text-sm`}
                            >
                                <Home className="w-4 h-4" />
                                <span>Muharrirga qaytish</span>
                            </button>
                        )}

                        {currentPage !== "what-is-markdown" && (
                            <button
                                onClick={navigateToWhatIsMarkdown}
                                className={`w-full flex items-center space-x-2 p-2 rounded-lg text-gray-1 text-gray-6 bg-color-8 transition-all duration-200 text-left text-sm`}
                            >
                                <HelpCircle className="w-4 h-4" />
                                <span>Markdown o'zi nima?</span>
                            </button>
                        )}

                        {currentPage !== "about" && (
                            <button
                                onClick={navigateToAbout}
                                className={`w-full flex items-center space-x-2 p-2 rounded-lg text-gray-1 text-gray-6 bg-color-8 transition-all duration-200 text-left text-sm`}
                            >
                                <Info className="w-4 h-4" />
                                <span>Dastur haqida</span>
                            </button>
                        )}
                    </div>

                    <div className={`border-t bor-col-1 my-2`}></div>
                    <div className="space-y-0.5">
                        <button
                            onClick={() => {
                                onToggleTheme();
                                setIsSidebarOpen(false);
                            }}
                            className={`w-full flex items-center space-x-2 p-2 rounded-lg text-gray-1 text-gray-6 bg-color-8 transition-all duration-200 text-left text-sm`}
                        >
                            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                            <span>{theme === "dark" ? "Kunduzgi rejim" : "Tungi rejim"}</span>
                        </button>
                    </div>
                </div>
            </div>

            {(isSidebarOpen || isToolbarOpen || isLangbarOpen) && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => {
                        setIsSidebarOpen(false);
                        setIsLangbarOpen(false);
                        setIsToolbarOpen(false);
                    }}
                />
            )}
        </>
    );
};

export default Header;
