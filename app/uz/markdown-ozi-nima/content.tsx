import React from "react";
import { FileText } from "lucide-react";
import { BookOpen } from "lucide-react";
import { CheckSquare } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Target } from "lucide-react";
import { Quote } from "lucide-react";
import { Clock } from "lucide-react";
import { Table } from "lucide-react";
import { Users } from "lucide-react";
import { Globe } from "lucide-react";
import { Image } from "lucide-react";
import { Link } from "lucide-react";
import { Bold } from "lucide-react";
import { Code } from "lucide-react";
import { Star } from "lucide-react";
import { List } from "lucide-react";
import { Hash } from "lucide-react";
import { Zap } from "lucide-react";

interface WhatIsMarkdownProps {
    isFullscreen: boolean;
}

const WhatIsMarkdownPage: React.FC<WhatIsMarkdownProps> = ({ isFullscreen }) => {
    const examples = [
        {
            title: "Headers",
            icon: Hash,
            markdown: "# Heading 1\n## Heading 2\n### Heading 3\n#### Heading 4\n##### Heading 5\n###### Heading 6",
            description: "Create hierarchical headers using # symbols (1-6 levels)",
        },
        {
            title: "Text Formatting",
            icon: Bold,
            markdown: "**Bold text**\n*Italic text*\n***Bold and italic***\n~~Strikethrough~~\n`Inline code`",
            description: "Format text with various emphasis styles",
        },
        {
            title: "Links & References",
            icon: Link,
            markdown:
                '[Inline link](https://example.com)\n[Link with title](https://example.com "Title")\n[Reference link][1]\n\n[1]: https://example.com "Reference title"',
            description: "Create clickable links with inline or reference style",
        },
        {
            title: "Lists & Tasks",
            icon: List,
            markdown:
                "- Unordered item 1\n- Unordered item 2\n  - Nested item\n\n1. Ordered item 1\n2. Ordered item 2\n\n- [x] Completed task\n- [ ] Incomplete task",
            description: "Create ordered, unordered, and task lists with nesting",
        },
        {
            title: "Images & Media",
            icon: Image,
            markdown: '![Alt text](image.jpg)\n![Alt text](image.jpg "Image title")\n\n[![Image link](thumb.jpg)](full-image.jpg)',
            description: "Embed images with alt text and optional titles",
        },
        {
            title: "Code Blocks",
            icon: Code,
            markdown:
                '`inline code`\n\n```javascript\nfunction greet(name) {\n  console.log(`Hello, ${name}!`);\n}\n\ngreet("World");\n```\n\n```python\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n```',
            description: "Display code inline or in syntax-highlighted blocks",
        },
        {
            title: "Quotes & Citations",
            icon: Quote,
            markdown:
                "> This is a simple blockquote\n> \n> Multiple paragraphs are supported\n> \n> > Nested blockquotes work too\n\n> **Note:** You can use *formatting* inside quotes",
            description: "Create blockquotes for emphasis and citations",
        },
        {
            title: "Tables & Data",
            icon: Table,
            markdown:
                "| Feature | Markdown | HTML |\n|---------|----------|------|\n| Simple | ✅ | ❌ |\n| Readable | ✅ | ❌ |\n| Powerful | ✅ | ✅ |\n\n| Left | Center | Right |\n|:-----|:------:|------:|\n| L1 | C1 | R1 |\n| L2 | C2 | R2 |",
            description: "Create structured tables with alignment options",
        },
    ];
    const useCases = [
        {
            icon: BookOpen,
            title: "Documentation",
            description: "Perfect for README files, API docs, and technical documentation",
            examples: ["GitHub README files", "API documentation", "Project wikis", "User manuals"],
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Ideal for team communication and knowledge sharing",
            examples: ["Team notes", "Meeting minutes", "Project proposals", "Code reviews"],
        },
        {
            icon: Globe,
            title: "Web Content",
            description: "Great for blogs, websites, and content management",
            examples: ["Blog posts", "Static site generators", "CMS content", "Email templates"],
        },
        {
            icon: Lightbulb,
            title: "Personal Use",
            description: "Excellent for personal notes and organization",
            examples: ["Personal notes", "To-do lists", "Journal entries", "Study materials"],
        },
    ];
    const advantages = [
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Write formatted content faster than traditional word processors",
        },
        {
            icon: Target,
            title: "Focus on Content",
            description: "Minimal syntax keeps you focused on what you're writing",
        },
        {
            icon: Globe,
            title: "Universal Support",
            description: "Supported by thousands of applications and platforms",
        },
        {
            icon: Clock,
            title: "Future-Proof",
            description: "Plain text format ensures longevity and accessibility",
        },
        {
            icon: Code,
            title: "Version Control Friendly",
            description: "Works perfectly with Git and other version control systems",
        },
        {
            icon: Star,
            title: "Easy to Learn",
            description: "Simple syntax that can be mastered in minutes",
        },
    ];
    const history = [
        {
            year: "2004",
            event: "John Gruber creates Markdown",
            description: "Developed as a way to write using an easy-to-read, easy-to-write plain text format",
        },
        {
            year: "2008",
            event: "GitHub adopts Markdown",
            description: "GitHub begins using Markdown for README files and documentation",
        },
        {
            year: "2012",
            event: "CommonMark specification",
            description: "Effort to standardize Markdown syntax begins",
        },
        {
            year: "2014",
            event: "GitHub Flavored Markdown",
            description: "GitHub releases their own extended version of Markdown",
        },
        {
            year: "Present",
            event: "Universal adoption",
            description: "Used by millions of developers, writers, and content creators worldwide",
        },
    ];

    return (
        <div className={`h-full overflow-y-auto ${isFullscreen ? "pt-0" : "pt-16"} transition-all duration-300`}>
            <article className={`max-w-4xl mx-auto p-8 text-gray-8`}>
                {/* Hero Section */}
                <header className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-linear-to-r from-blue-500 to-purple-500 mb-8 shadow-2xl">
                        <FileText className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-6xl font-bold mb-6 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                        What is Markdown?
                    </h1>
                    <p className={`text-xl leading-relaxed max-w-3xl mx-auto text-gray-1`}>
                        Discover the lightweight markup language that revolutionized how we write and format text. Learn why millions of developers, writers,
                        and content creators choose Markdown for their daily work.
                    </p>
                </header>

                {/* Introduction */}
                <section className="mb-16">
                    <div className={`p-8 rounded-2xl border special-1 mb-12`}>
                        <h2 className={`text-3xl font-bold mb-6 text-gray-7`}>The Story Behind Markdown</h2>
                        <div className={`prose prose-lg max-w-none text-gray-3`}>
                            <p className="mb-4">
                                Markdown was created in 2004 by <b>John Gruber</b> in collaboration with Aaron Swartz. The goal was simple yet revolutionary:
                                create a way to write using an easy-to-read, easy-to-write plain text format that could be converted to structurally valid HTML.
                            </p>
                            <p className="mb-4">
                                The name "Markdown" is a play on the word "markup," referencing how it allows you to mark up text with formatting in a way that
                                remains readable even in its raw form. Unlike HTML or other markup languages, Markdown prioritizes human readability.
                            </p>
                            <p>
                                Today, Markdown has become the de facto standard for documentation, README files, forum discussions, and content creation across
                                the web. From GitHub to Reddit, from technical documentation to personal blogs, Markdown powers text formatting everywhere.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Markdown Through the Years</h2>
                    <div className="space-y-6">
                        {history.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-start space-x-6 p-6 rounded-xl border bg-color-3 bor-col-1 hover:shadow-lg transition-all duration-300`}
                            >
                                <div className="shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                                        {item.year}
                                    </div>
                                </div>
                                <div>
                                    <h3 className={`text-xl font-semibold mb-2 text-gray-7`}>{item.event}</h3>
                                    <p className={"text-gray-1"}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Choose Markdown */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Why Choose Markdown?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {advantages.map((advantage, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl border bg-color-3 bor-col-1 hover:shadow-lg transition-all duration-300 hover:scale-105`}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 mr-4">
                                        <advantage.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className={`text-lg font-semibold text-gray-7`}>{advantage.title}</h3>
                                </div>
                                <p className={"text-gray-1"}>{advantage.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Use Cases */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Where Markdown Shines</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {useCases.map((useCase, index) => (
                            <div key={index} className={`p-8 rounded-xl border bg-color-3 bor-col-1 hover:shadow-lg transition-all duration-300`}>
                                <div className="flex items-center mb-6">
                                    <div className="p-4 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 mr-4">
                                        <useCase.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className={`text-2xl font-semibold text-gray-7`}>{useCase.title}</h3>
                                </div>
                                <p className={`text-lg mb-4 text-gray-1`}>{useCase.description}</p>
                                <ul className="space-y-2">
                                    {useCase.examples.map((example, exampleIndex) => (
                                        <li key={exampleIndex} className={`flex items-center text-gray-9`}>
                                            <CheckSquare className="w-4 h-4 mr-2 text-green-500" />
                                            {example}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Syntax Examples */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Master the Syntax</h2>
                    <p className={`text-center text-lg mb-12 text-gray-1`}>
                        Learn the essential Markdown syntax with practical examples you can use right away.
                    </p>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {examples.map((example, index) => (
                            <div key={index} className={`p-6 rounded-xl border bg-color-3 bor-col-1 hover:shadow-lg transition-all duration-300`}>
                                <div className="flex items-center mb-4">
                                    <div className="p-3 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 mr-4">
                                        <example.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className={`text-xl font-semibold text-gray-7`}>{example.title}</h3>
                                </div>
                                <p className={`text-sm mb-4 text-gray-1`}>{example.description}</p>
                                <div className={`p-4 rounded-lg font-mono text-sm overflow-x-auto text-gray-4 bg-color-6 border bor-col-1`}>
                                    <pre className="whitespace-pre-wrap">{example.markdown}</pre>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Best Practices */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Best Practices & Tips</h2>
                    <div className={`p-8 rounded-xl border bg-color-3 bor-col-1`}>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className={`text-xl font-semibold mb-4 text-green-500`}>✅ Do This</h3>
                                <ul className={`space-y-3 text-gray-3`}>
                                    <li>• Use consistent spacing and indentation</li>
                                    <li>• Add blank lines around headers and paragraphs</li>
                                    <li>• Use descriptive alt text for images</li>
                                    <li>• Keep lines under 80 characters when possible</li>
                                    <li>• Use reference-style links for cleaner text</li>
                                    <li>• Preview your content before publishing</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className={`text-xl font-semibold mb-4 text-red-500`}>❌ Avoid This</h3>
                                <ul className={`space-y-3 text-gray-3`}>
                                    <li>• Don't mix HTML unnecessarily</li>
                                    <li>• Avoid inconsistent header levels</li>
                                    <li>• Don't forget alt text for images</li>
                                    <li>• Avoid overly complex table structures</li>
                                    <li>• Don't use too many nested lists</li>
                                    <li>• Avoid mixing different list styles</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Popular Tools */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Popular Markdown Tools</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: "GitHub", description: "Code repositories and documentation", category: "Platform" },
                            { name: "Typora", description: "WYSIWYG markdown editor", category: "Editor" },
                            { name: "Obsidian", description: "Knowledge management and note-taking", category: "Notes" },
                            { name: "Jekyll", description: "Static site generator", category: "Generator" },
                            { name: "Notion", description: "All-in-one workspace", category: "Workspace" },
                            { name: "Discord", description: "Chat and communication", category: "Communication" },
                            { name: "Reddit", description: "Social news and discussion", category: "Social" },
                            { name: "GitBook", description: "Documentation platform", category: "Documentation" },
                            { name: "Hugo", description: "Fast static site generator", category: "Generator" },
                        ].map((tool, index) => (
                            <div key={index} className={`p-6 rounded-xl border bg-color-3 bor-col-1 hover:shadow-lg transition-all duration-300`}>
                                <div className={`text-xs font-semibold mb-2 px-2 py-1 rounded-full inline-block bg-color-9 text-blue-11`}>{tool.category}</div>
                                <h3 className={`text-lg font-semibold mb-2 text-gray-7`}>{tool.name}</h3>
                                <p className={`text-sm text-gray-1`}>{tool.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className={`p-8 rounded-2xl border special-1 text-center`}>
                    <h2 className={`text-3xl font-bold mb-6 text-gray-7`}>Ready to Start Your Markdown Journey?</h2>
                    <p className={`text-lg mb-8 max-w-2xl mx-auto text-gray-1`}>
                        Now that you understand the power and simplicity of Markdown, it's time to put it into practice. Head back to our editor and start
                        creating your first Markdown document with confidence!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className={`px-6 py-3 rounded-lg text-gray-3 bg-color-2 border bor-col-1 shadow-sm`}>
                            <span className="font-mono text-sm font-semibold">Ctrl/Cmd + B</span>
                            <span className="ml-2">Bold</span>
                        </div>
                        <div className={`px-6 py-3 rounded-lg text-gray-3 bg-color-2 border bor-col-1 shadow-sm`}>
                            <span className="font-mono text-sm font-semibold">Ctrl/Cmd + I</span>
                            <span className="ml-2">Italic</span>
                        </div>
                        <div className={`px-6 py-3 rounded-lg text-gray-3 bg-color-2 border bor-col-1 shadow-sm`}>
                            <span className="font-mono text-sm font-semibold">Ctrl/Cmd + K</span>
                            <span className="ml-2">Link</span>
                        </div>
                    </div>
                    <div className={`text-sm text-gray-9`}>💡 Pro tip: Use our formatting toolbar for quick access to all Markdown syntax options!</div>
                </section>
            </article>
        </div>
    );
};

export default WhatIsMarkdownPage;
