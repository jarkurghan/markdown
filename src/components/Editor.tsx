import React, { forwardRef } from 'react';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  isDark: boolean;
}

const Editor = forwardRef<HTMLTextAreaElement, EditorProps>(({ value, onChange, isDark }, ref) => {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className={`px-4 py-2 border-b flex-shrink-0 ${
        isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
      }`}>
        <h3 className={`text-sm font-medium ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Editor
        </h3>
      </div>
      <textarea
        ref={ref}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`flex-1 p-6 resize-none focus:outline-none font-mono text-sm leading-relaxed overflow-y-auto ${
          isDark 
            ? 'bg-gray-900 text-gray-100 placeholder-gray-500' 
            : 'bg-white text-gray-900 placeholder-gray-400'
        } transition-colors duration-300`}
        placeholder="Start typing your markdown here..."
        spellCheck={false}
        style={{
          tabSize: 2,
          lineHeight: '1.6',
        }}
      />
    </div>
  );
});

Editor.displayName = 'Editor';

export default Editor;