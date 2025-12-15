import React from "react";
import { Users } from "lucide-react";
import { Target } from "lucide-react";
import { FileText } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Download } from "lucide-react";
import { Settings } from "lucide-react";
import { Palette } from "lucide-react";
import { Shield } from "lucide-react";
import { Rocket } from "lucide-react";
import { Coffee } from "lucide-react";
import { Github } from "lucide-react";
import { Globe } from "lucide-react";
import { Code } from "lucide-react";
import { Star } from "lucide-react";
import { Zap } from "lucide-react";

interface AboutProps {
    isFullscreen: boolean;
}

const About: React.FC<AboutProps> = ({ isFullscreen }) => {
    const features = [
        {
            icon: Shield,
            title: "Privacy First",
            description: "All your content stays local - no data sent to external servers",
        },
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Real-time preview with optimized rendering for smooth editing experience",
        },
        {
            icon: Palette,
            title: "Beautiful Design",
            description: "Modern, clean interface with carefully crafted dark and light themes",
        },
        {
            icon: Smartphone,
            title: "Fully Responsive",
            description: "Works perfectly on desktop, tablet, and mobile devices",
        },
        {
            icon: Download,
            title: "Import & Export",
            description: "Easily import existing markdown files and export your work",
        },
        {
            icon: Settings,
            title: "Customizable",
            description: "Adjustable split view, themes, and formatting toolbar",
        },
    ];

    const technologies = [
        {
            name: "Next.js",
            description: "A modern React framework that runs on both server and client",
            icon: "▲",
        },
        {
            name: "TypeScript",
            description: "Type-safe development for better code quality",
            icon: "📘",
        },
        {
            name: "Tailwind CSS",
            description: "Utility-first CSS framework for rapid styling",
            icon: "🎨",
        },
        {
            name: "Marked.js",
            description: "Fast markdown parser and compiler",
            icon: "📝",
        },
        {
            name: "Lucide React",
            description: "Beautiful, customizable icon library",
            icon: "🎯",
        },
        {
            name: "Node.js / Bun",
            description: "High-performance JavaScript runtime with a fast package manager",
            icon: "⚡",
        },
    ];

    const stats = [
        { number: "100%", label: "Open Source", icon: Github },
        { number: "0ms", label: "Server Latency", icon: Zap },
        { number: "∞", label: "File Size Limit", icon: FileText },
        { number: "24/7", label: "Offline Access", icon: Globe },
    ];

    const roadmap = [
        {
            status: "completed",
            title: "Core Editor",
            description: "Basic markdown editing with live preview",
        },
        {
            status: "completed",
            title: "Theme System",
            description: "Dark and light theme support",
        },
        {
            status: "completed",
            title: "File Operations",
            description: "Import and export markdown files",
        },
        {
            status: "completed",
            title: "Enhanced Toolbar",
            description: "Advanced formatting tools and shortcuts",
        },
        {
            status: "in-progress",
            title: "Multilanguage",
            description: "Application interface supports more than 10 languages",
        },
        {
            status: "planned",
            title: "Collaboration",
            description: "Real-time collaborative editing",
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
                        About Markdown editor
                    </h1>
                    <p className={`text-xl leading-relaxed max-w-3xl mx-auto text-gray-1`}>
                        A modern, feature-rich markdown editor built with cutting-edge web technologies. Designed for writers, developers, and content creators
                        who demand excellence in their tools.
                    </p>
                </header>

                {/* Mission Statement */}
                <section className="mb-16">
                    <div className={`p-8 rounded-2xl border special-1 mb-12`}>
                        <div className="flex items-center mb-6">
                            <Target className="w-8 h-8 text-blue-500 mr-4" />
                            <h2 className={`text-3xl font-bold text-gray-7`}>Our Mission</h2>
                        </div>
                        <div className={`prose prose-lg max-w-none text-gray-3`}>
                            <p className="mb-4">
                                We believe that great writing tools should be <b>beautiful</b>, <b>fast</b>, and <b>accessible</b>. Markdown editor was born
                                from the frustration with existing markdown editors that compromise on either functionality or user experience.
                            </p>
                            <p className="mb-4">
                                Our goal is to create the most intuitive and powerful markdown editing experience possible, while maintaining the simplicity and
                                elegance that makes markdown so appealing in the first place.
                            </p>
                            <p>
                                Whether you're writing documentation, blog posts, or taking notes, Markdown editor adapts to your workflow and helps you focus
                                on what matters most: <em>your content</em>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl border bg-color-3 bor-col-1 hover:shadow-lg transition-all duration-300 hover:scale-105`}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 mr-4">
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className={`text-lg font-semibold text-gray-7`}>{feature.title}</h3>
                                </div>
                                <p className={"text-gray-1"}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Statistics */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Built for Performance</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className={`p-6 rounded-xl border text-center bg-color-3 bor-col-1 hover:shadow-lg transition-all duration-300`}>
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 rounded-lg bg-linear-to-r from-blue-500 to-purple-500">
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className={`text-sm font-medium text-gray-1`}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technology Stack */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Built with Modern Technologies</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, index) => (
                            <div key={index} className={`p-6 rounded-xl border bg-color-3 bor-col-1 hover:shadow-lg transition-all duration-300`}>
                                <div className="flex items-center mb-4">
                                    <div className="text-3xl mr-4">{tech.icon}</div>
                                    <h3 className={`text-lg font-semibold text-gray-7`}>{tech.name}</h3>
                                </div>
                                <p className={`text-sm text-gray-1`}>{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Development Roadmap */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Development Roadmap</h2>
                    <div className="space-y-6">
                        {roadmap.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-start space-x-6 p-6 rounded-xl border bg-color-3 bor-col-1 hover:shadow-lg transition-all duration-300`}
                            >
                                <div className="shrink-0">
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                                            item.status === "completed" ? "bg-green-500" : item.status === "in-progress" ? "bg-blue-500" : "bg-gray-500"
                                        }`}
                                    >
                                        {item.status === "completed" ? "✓" : item.status === "in-progress" ? "⚡" : "⏳"}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center mb-2">
                                        <h3 className={`text-xl font-semibold mr-3 text-gray-7`}>{item.title}</h3>
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                item.status === "completed"
                                                    ? "bg-green-100 text-green-800"
                                                    : item.status === "in-progress"
                                                    ? "bg-blue-100 text-blue-800"
                                                    : "bg-gray-100 text-gray-800"
                                            }`}
                                        >
                                            {item.status === "completed" ? "Completed" : item.status === "in-progress" ? "In Progress" : "Planned"}
                                        </span>
                                    </div>
                                    <p className={"text-gray-1"}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Philosophy */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Our Design Philosophy</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className={`p-8 rounded-xl border bg-color-3 bor-col-1`}>
                            <div className="flex items-center mb-6">
                                <Lightbulb className="w-8 h-8 text-yellow-500 mr-4" />
                                <h3 className={`text-2xl font-semibold text-gray-7`}>Simplicity First</h3>
                            </div>
                            <p className={`text-lg mb-4 text-gray-1`}>
                                We believe that the best tools are invisible. Markdown editor gets out of your way and lets you focus on writing, not fighting
                                with the interface.
                            </p>
                            <ul className={`space-y-2 text-gray-9`}>
                                <li>• Clean, distraction-free interface</li>
                                <li>• Intuitive keyboard shortcuts</li>
                                <li>• Minimal learning curve</li>
                                <li>• Focus on content, not formatting</li>
                            </ul>
                        </div>

                        <div className={`p-8 rounded-xl border bg-color-3 bor-col-1`}>
                            <div className="flex items-center mb-6">
                                <Rocket className="w-8 h-8 text-blue-500 mr-4" />
                                <h3 className={`text-2xl font-semibold text-gray-7`}>Performance Matters</h3>
                            </div>
                            <p className={`text-lg mb-4 text-gray-1`}>
                                Every millisecond counts when you're in the flow of writing. We've optimized every aspect of the editor for maximum
                                responsiveness.
                            </p>
                            <ul className={`space-y-2 text-gray-9`}>
                                <li>• Real-time preview rendering</li>
                                <li>• Optimized for large documents</li>
                                <li>• Smooth animations and transitions</li>
                                <li>• Efficient memory usage</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Team & Credits */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Built with ❤️</h2>
                    <div className={`p-8 rounded-xl border text-center bg-color-3 bor-col-1`}>
                        <p className={`text-lg mb-6 max-w-2xl mx-auto text-gray-1`}>
                            We thought about every detail when creating this editor. Thanks to a thoughtful design and cutting-edge technology, your writing
                            will become much easier and faster. Experience how it will bring convenience to your workflow!
                        </p>
                        <div className="flex justify-center space-x-6 mb-4">
                            <div className={`flex items-center px-4 py-2 rounded-lg bg-color-7`}>
                                <Coffee className="w-5 h-5 mr-2 text-amber-500" />
                                <span className={`text-sm text-gray-3`}>Fueled by coffee</span>
                            </div>
                            <div className={`flex items-center px-4 py-2 rounded-lg bg-color-7`}>
                                <Code className="w-5 h-5 mr-2 text-blue-500" />
                                <span className={`text-sm text-gray-3`}>Open source</span>
                            </div>
                            <div className={`flex items-center px-4 py-2 rounded-lg bg-color-7`}>
                                <Users className="w-5 h-5 mr-2 text-green-500" />
                                <span className={`text-sm text-gray-3`}>Community driven</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className={`px-6 py-3 rounded-lg text-gray-3 bg-color-2 border bor-col-1 shadow-sm`}>
                                <Star className="w-5 h-5 inline mr-2 text-purple-500" />
                                <span className="font-semibold">Always Free</span>
                            </div>
                            <div className={`px-6 py-3 rounded-lg text-gray-3 bg-color-2 border bor-col-1 shadow-sm`}>
                                <Shield className="w-5 h-5 inline mr-2 text-green-500" />
                                <span className="font-semibold">Privacy Focused</span>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default About;
