"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

import Editor from "./editor";
import Preview from "./preview";
import { Edit3, Eye } from "lucide-react";

const getInitialTheme = (): boolean => {
    if (typeof window !== "undefined") {
        return localStorage.getItem("markedit-theme") === "dark";
    }
    return true;
};

const INITIAL_MARKDOWN = `# Welcome to Markdown editor

A **beautiful** and *powerful* markdown editor built with React and TypeScript.

## Features

- ✨ Live preview
- 🎨 Beautiful syntax highlighting
- 💾 Auto-save functionality
- 📱 Responsive design
- ⌨️ Keyboard shortcuts
- 🌙 Dark theme

## Getting Started

Start typing your markdown in the editor panel. The preview will update in real-time!

### Code Example

\`\`\`javascript
function hello() {
  console.log("Hello, Markdown editor!");
}
\`\`\`

### Links and Images

[Visit GitHub](https://github.com)

> This is a blockquote. Perfect for highlighting important information.

### Lists

1. First item
2. Second item
   - Nested item
   - Another nested item

---

**Happy writing!** 🚀
`;

const EditorContent: React.FC = () => {
    const [isDark, setIsDark] = useState(getInitialTheme);

    useEffect(() => {
        const handleThemeChange = () => {
            setIsDark(getInitialTheme());
        };

        window.addEventListener("markedit-theme-change", handleThemeChange);

        return () => {
            window.removeEventListener("markedit-theme-change", handleThemeChange);
        };
    }, []);

    const [markdown, setMarkdown] = useState(INITIAL_MARKDOWN);
    const [splitRatio, setSplitRatio] = useState(50);
    const [isResizing, setIsResizing] = useState(false);
    const [activeTab, setActiveTab] = useState<"editor" | "preview">("editor");
    const editorRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const saved = localStorage.getItem("markedit-content");
        if (saved) {
            setMarkdown(saved);
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            localStorage.setItem("markedit-content", markdown);
        }, 500);
        return () => clearTimeout(timer);
    }, [markdown]);

    const insertMarkdown = useCallback(
        (before: string, after: string = "") => {
            const editor = editorRef.current;
            if (!editor) return;

            const start = editor.selectionStart;
            const end = editor.selectionEnd;
            const selectedText = markdown.substring(start, end);
            const newText = before + selectedText + after;
            const newMarkdown = markdown.substring(0, start) + newText + markdown.substring(end);
            setMarkdown(newMarkdown);

            setTimeout(() => {
                editor.focus();
                editor.setSelectionRange(start + before.length, start + before.length + selectedText.length);
            }, 0);
        },
        [markdown]
    );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey || e.metaKey) {
                switch (e.key) {
                    case "b":
                        e.preventDefault();
                        insertMarkdown("**", "**");
                        break;
                    case "i":
                        e.preventDefault();
                        insertMarkdown("*", "*");
                        break;
                    case "k":
                        e.preventDefault();
                        insertMarkdown("[", "](url)");
                        break;
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [insertMarkdown]);

    const downloadMarkdown = () => {
        const blob = new Blob([markdown], { type: "text/markdown" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "document.md";
        a.click();
        URL.revokeObjectURL(url);
    };

    const uploadFile = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".md,.txt";
        input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const content = e.target?.result as string;
                    setMarkdown(content);
                };
                reader.readAsText(file);
            }
        };
        input.click();
    };

    React.useEffect(() => {
        (window as any).editorActions = {
            insertMarkdown,
            downloadMarkdown,
            uploadFile,
        };
    }, [insertMarkdown]);

    return (
        <div className={`flex flex-col h-full border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}>
            <div className={`md:hidden flex border-b flex-shrink-0 ${isDark ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-gray-50"}`}>
                <button
                    onClick={() => setActiveTab("editor")}
                    className={`flex-1 flex items-center justify-center py-3 px-4 text-sm font-medium transition-all duration-200 ${
                        activeTab === "editor"
                            ? isDark
                                ? "bg-gray-900 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white text-blue-600 border-b-2 border-blue-600"
                            : isDark
                            ? "text-gray-400 hover:text-gray-300"
                            : "text-gray-600 hover:text-gray-900"
                    }`}
                    
                >
                    <Edit3 className="w-4 h-4 mr-2"  /> 
                    Editor
                </button>
                <button
                    onClick={() => setActiveTab("preview")}
                    className={`flex-1 flex items-center justify-center py-3 px-4 text-sm font-medium transition-all duration-200 ${
                        activeTab === "preview"
                            ? isDark
                                ? "bg-gray-900 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white text-blue-600 border-b-2 border-blue-600"
                            : isDark
                            ? "text-gray-400 hover:text-gray-300"
                            : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                    <Eye className="w-4 h-4 mr-2" /> Preview
                </button>
            </div>
            <div className="md:hidden flex-1 min-h-0 overflow-hidden">
                <div className="h-full">
                    {activeTab === "editor" ? (
                        <Editor ref={editorRef} value={markdown} onChange={setMarkdown} isDark={isDark} />
                    ) : (
                        <Preview markdown={markdown} isDark={isDark} />
                    )}
                </div>
            </div>
            <div className="hidden md:flex flex-1 min-h-0">
                <div className="flex-1 flex min-w-0" style={{ flexBasis: `${splitRatio}%` }}>
                    <Editor ref={editorRef} value={markdown} onChange={setMarkdown} isDark={isDark} />
                </div>
                {/* Resize handle */}
                <div
                    className={`w-1 bg-gradient-to-b from-blue-500 to-purple-500 cursor-col-resize hover:w-2 transition-all duration-200 flex-shrink-0 ${
                        isResizing ? "w-2" : ""
                    }`}
                    onMouseDown={(e) => {
                        setIsResizing(true);
                        const startX = e.clientX;
                        const startRatio = splitRatio;
                        const handleMouseMove = (e: MouseEvent) => {
                            const diff = e.clientX - startX;
                            const containerWidth = window.innerWidth;
                            const newRatio = Math.max(20, Math.min(80, startRatio + (diff / containerWidth) * 100));
                            setSplitRatio(newRatio);
                        };
                        const handleMouseUp = () => {
                            setIsResizing(false);
                            document.removeEventListener("mousemove", handleMouseMove);
                            document.removeEventListener("mouseup", handleMouseUp);
                        };
                        document.addEventListener("mousemove", handleMouseMove);
                        document.addEventListener("mouseup", handleMouseUp);
                    }}
                />
                <div className="flex-1 min-w-0" style={{ flexBasis: `${100 - splitRatio}%` }}>
                    <Preview markdown={markdown} isDark={isDark} />
                </div>
            </div>
        </div>
    );
};

export default EditorContent;
