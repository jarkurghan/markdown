import React, { useMemo } from "react";
import { marked } from "marked";

interface PreviewProps {
    markdown: string;
}

const Preview: React.FC<PreviewProps> = ({ markdown }) => {
    const htmlContent = useMemo(() => {
        marked.setOptions({ breaks: true, gfm: true });
        return marked(markdown);
    }, [markdown]);

    return (
        <div className="flex-1 flex flex-col h-full">
            <div className={`px-4 py-2 border-b shrink-0 bg-color-1 bor-col-1`}>
                <h3 className={`text-sm font-medium text-gray-3`}>Ko‘rinish</h3>
            </div>
            <div className={`flex-1 overflow-y-auto bg-color-5 transition-colors duration-300`}>
                <div className={`prose max-w-none p-6 special-3 text-gray-8`} dangerouslySetInnerHTML={{ __html: htmlContent }} style={{ lineHeight: "1.7" }} />
            </div>
        </div>
    );
};

export default Preview;
