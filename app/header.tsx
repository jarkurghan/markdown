"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Quote, Code, Image, Heading1, Heading2, Table, Minus, HelpCircle, Home, Info } from "lucide-react";
import { Download, Upload, FileText, Moon, Sun, Menu, X, Bold, Italic, Link, List, ListOrdered } from "lucide-react";

interface HeaderProps {
    isDark: boolean;
    onToggleTheme: () => void;
    currentPage: "editor" | "what-is-markdown" | "about";
}

const Header: React.FC<HeaderProps> = ({ isDark, onToggleTheme, currentPage }) => {
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [isToolbarOpen, setIsToolbarOpen] = React.useState(false);

    const toolbarItems = [
        { icon: Heading1, action: () => insertMarkdown("# "), title: "Heading 1", label: "Heading 1" },
        { icon: Heading2, action: () => insertMarkdown("## "), title: "Heading 2", label: "Heading 2" },
        { icon: Bold, action: () => insertMarkdown("**", "**"), title: "Bold", label: "Bold" },
        { icon: Italic, action: () => insertMarkdown("*", "*"), title: "Italic", label: "Italic" },
        { icon: Link, action: () => insertMarkdown("[", "](url)"), title: "Link", label: "Link" },
        { icon: Image, action: () => insertMarkdown("![alt](", ")"), title: "Image", label: "Image" },
        { icon: Code, action: () => insertMarkdown("`", "`"), title: "Inline Code", label: "Code" },
        { icon: Quote, action: () => insertMarkdown("> "), title: "Quote", label: "Quote" },
        { icon: List, action: () => insertMarkdown("- "), title: "Bullet List", label: "Bullet List" },
        { icon: ListOrdered, action: () => insertMarkdown("1. "), title: "Numbered List", label: "Numbered List" },
        {
            icon: Table,
            action: () => insertMarkdown("| Column 1 | Column 2 |\n|----------|----------|\n| Cell 1 | Cell 2 |"),
            title: "Table",
            label: "Table",
        },
        { icon: Minus, action: () => insertMarkdown("\n---\n"), title: "Horizontal Rule", label: "Horizontal Rule" },
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
        setIsToolbarOpen(!isToolbarOpen);
    };

    const handleSidebarToggle = () => {
        if (isToolbarOpen) {
            setIsToolbarOpen(false);
        }
        setIsSidebarOpen(!isSidebarOpen);
    };

    const navigateToWhatIsMarkdown = () => {
        router.push("/what-is-markdown");
        setIsSidebarOpen(false);
    };

    const navigateToAbout = () => {
        router.push("/about");
        setIsSidebarOpen(false);
    };

    const navigateToEditor = () => {
        router.push("/");
        setIsSidebarOpen(false);
    };

    const navigateToHome = () => {
        router.push("/");
        setIsSidebarOpen(false);
        setIsToolbarOpen(false);
    };

    const isEditorPage = currentPage === "editor";

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 ${isDark ? "bg-gray-800/95" : "bg-white/95"} backdrop-blur-sm border-b ${
                    isDark ? "border-gray-700" : "border-gray-200"
                } transition-all duration-300`}
            >
                <div className="flex items-center justify-between px-6 py-3">
                    <button onClick={navigateToHome} className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
                        <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
                            <FileText className="w-5 h-5 text-white" />
                        </div>

                        <h1 className={`text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hidden sm:block`}>
                            Markdown editor
                        </h1>
                    </button>

                    <div className="flex items-center space-x-2">
                        {isEditorPage && (
                            <>
                                <button
                                    onClick={uploadFile}
                                    className={`p-2 rounded-lg ${
                                        isDark ? "hover:bg-gray-700 text-gray-300 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                                    } transition-all duration-200`}
                                    title="Upload file"
                                >
                                    <Upload className="w-5 h-5" />
                                </button>

                                <button
                                    onClick={downloadMarkdown}
                                    className={`p-2 rounded-lg ${
                                        isDark ? "hover:bg-gray-700 text-gray-300 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                                    } transition-all duration-200`}
                                    title="Download markdown"
                                >
                                    <Download className="w-5 h-5" />
                                </button>

                                <button
                                    onClick={handleToolbarToggle}
                                    className={`p-2 rounded-lg transition-all duration-200 ${
                                        isToolbarOpen
                                            ? "bg-blue-500 text-white"
                                            : isDark
                                            ? "hover:bg-gray-700 text-gray-300 hover:text-white"
                                            : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                                    }`}
                                    title="Formatting Tools"
                                >
                                    <Bold className="w-5 h-5" />
                                </button>
                            </>
                        )}

                        <button
                            onClick={handleSidebarToggle}
                            className={`p-2 rounded-lg transition-all duration-200 ${
                                isSidebarOpen
                                    ? "bg-blue-500 text-white"
                                    : isDark
                                    ? "hover:bg-gray-700 text-gray-300 hover:text-white"
                                    : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                            }`}
                            title="Menu"
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
                    } ${isDark ? "bg-gray-800" : "bg-white"} border-l ${isDark ? "border-gray-700" : "border-gray-200"} shadow-2xl flex flex-col`}
                >
                    <div className={`flex items-center justify-between p-4 border-b ${isDark ? "border-gray-700" : "border-gray-200"} flex-shrink-0`}>
                          <h2 className={`text-base font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Formatting Tools </h2> 
                        <button
                            onClick={() => setIsToolbarOpen(false)}
                            className={`p-1.5 rounded-lg ${
                                isDark ? "hover:bg-gray-700 text-gray-300 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                            } transition-all duration-200`}
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
                                className={`w-full flex items-center space-x-2 p-2 rounded-lg ${
                                    isDark ? "hover:bg-gray-700 text-gray-300 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                                } transition-all duration-200 text-left text-sm`}
                                title={item.title}
                            >
                                <item.icon className="w-4 h-4" />
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div
                className={`fixed top-0 right-0 h-full w-80 z-50 transform transition-transform duration-300 ease-in-out ${
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                } ${isDark ? "bg-gray-800" : "bg-white"} border-l ${isDark ? "border-gray-700" : "border-gray-200"} shadow-2xl flex flex-col`}
            >
                <div className={`flex items-center justify-between p-4 border-b ${isDark ? "border-gray-700" : "border-gray-200"} flex-shrink-0`}>
                    <h2 className={`text-base font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Menu </h2>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className={`p-1.5 rounded-lg ${
                            isDark ? "hover:bg-gray-700 text-gray-300 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                        } transition-all duration-200`}
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                <div className="p-3 space-y-2 overflow-y-auto flex-1">
                    <div className="space-y-0.5">
                        {currentPage !== "editor" && (
                            <button
                                onClick={navigateToEditor}
                                className={`w-full flex items-center space-x-2 p-2 rounded-lg ${
                                    isDark ? "hover:bg-gray-700 text-gray-300 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                                } transition-all duration-200 text-left text-sm`}
                            >
                                <Home className="w-4 h-4" />
                                <span>Back to Editor</span>
                            </button>
                        )}

                        {currentPage !== "what-is-markdown" && (
                            <button
                                onClick={navigateToWhatIsMarkdown}
                                className={`w-full flex items-center space-x-2 p-2 rounded-lg ${
                                    isDark ? "hover:bg-gray-700 text-gray-300 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                                } transition-all duration-200 text-left text-sm`}
                            >
                                <HelpCircle className="w-4 h-4" />
                                <span>What is Markdown?</span>
                            </button>
                        )}

                        {currentPage !== "about" && (
                            <button
                                onClick={navigateToAbout}
                                className={`w-full flex items-center space-x-2 p-2 rounded-lg ${
                                    isDark ? "hover:bg-gray-700 text-gray-300 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                                } transition-all duration-200 text-left text-sm`}
                            >
                                <Info className="w-4 h-4" />
                                <span>About</span>
                            </button>
                        )}
                    </div>

                    <div className={`border-t ${isDark ? "border-gray-700" : "border-gray-200"} my-2`}></div>
                    <div className="space-y-0.5">
                        <button
                            onClick={() => {
                                onToggleTheme();
                                setIsSidebarOpen(false);
                            }}
                            className={`w-full flex items-center space-x-2 p-2 rounded-lg ${
                                isDark ? "hover:bg-gray-700 text-gray-300 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                            } transition-all duration-200 text-left text-sm`}
                        >
                            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}  <span>{isDark ? "Light Theme" : "Dark Theme"}</span>
                        </button>
                    </div>
                </div>
            </div>

            {(isSidebarOpen || isToolbarOpen) && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => {
                        setIsSidebarOpen(false);
                        setIsToolbarOpen(false);
                    }}
                />
            )}
        </>
    );
};

export default Header;
