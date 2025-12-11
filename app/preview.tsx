import React, { useMemo } from "react";
import { marked } from "marked";

interface PreviewProps {
    markdown: string;
    isDark: boolean;
}

const Preview: React.FC<PreviewProps> = ({ markdown, isDark }) => {
    const htmlContent = useMemo(() => {
        marked.setOptions({
            breaks: true,
            gfm: true,
            // headerIds: true,
            // headerPrefix: 'heading-',
        });

        return marked(markdown);
    }, [markdown]);

    return (
        <div className="flex-1 flex flex-col h-full">
            <div className={`px-4 py-2 border-b shrink-0 ${isDark ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-gray-50"}`}>
                <h3 className={`text-sm font-medium text-gray-3`}>Preview</h3>
            </div>
            <div className={`flex-1 overflow-y-auto ${isDark ? "bg-gray-900" : "bg-white"} transition-colors duration-300`}>
                <div
                    className={`prose max-w-none p-6 ${
                        isDark
                            ? "prose-invert prose-blue prose-headings:text-blue-400 prose-links:text-blue-400 prose-code:text-purple-400 prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700"
                            : "prose-gray prose-headings:text-gray-900 prose-links:text-blue-600 prose-code:text-purple-600"
                    }`}
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                    style={{
                        lineHeight: "1.7",
                    }}
                />
            </div>
        </div>
    );
};

export default Preview;
