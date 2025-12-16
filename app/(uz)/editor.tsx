import { forwardRef } from "react";

interface EditorProps {
    value: string;
    onChange: (value: string) => void;
}

const Editor = forwardRef<HTMLTextAreaElement, EditorProps>(({ value, onChange }, ref) => {
    return (
        <div className="flex-1 flex flex-col h-full">
            <div className={`px-4 py-2 border-b shrink-0 bg-color-1 bor-col-1`}>
                <h3 className={`text-sm font-medium text-gray-3`}>Tahrir</h3>
            </div>
            <textarea
                ref={ref}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`flex-1 p-6 resize-none focus:outline-none font-mono text-sm leading-relaxed overflow-y-auto text-gray-8 bg-color-5 ph-color-1 transition-colors duration-300`}
                placeholder="Markdownni shu yerga yozing..."
                spellCheck={false}
                style={{ tabSize: 2, lineHeight: "1.6" }}
            />
        </div>
    );
});

Editor.displayName = "Editor";

export default Editor;
