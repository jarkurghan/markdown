import React from "react";
import { FileText, Code, Zap, Heart, Github, Star, Users, Download, Globe, Smartphone } from "lucide-react";
import { Monitor, Palette, Shield, Clock, Lightbulb, Target, Rocket, Award, Coffee, BookOpen, Settings } from "lucide-react";

interface AboutProps {
    isDark: boolean;
    isFullscreen: boolean;
}

const About: React.FC<AboutProps> = ({ isDark, isFullscreen }) => {
    const features = [
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
            icon: Shield,
            title: "Privacy First",
            description: "All your content stays local - no data sent to external servers",
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
            name: "React 18",
            description: "Modern React with hooks and concurrent features",
            icon: "⚛️",
        },
        {
            name: "TypeScript",
            description: "Type-safe development for better code quality",
            icon: "📘",
        },
        {
            name: "Vite",
            description: "Lightning-fast build tool and development server",
            icon: "⚡",
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
            status: "in-progress",
            title: "Enhanced Toolbar",
            description: "Advanced formatting tools and shortcuts",
        },
        {
            status: "planned",
            title: "Plugin System",
            description: "Extensible architecture for custom features",
        },
        {
            status: "planned",
            title: "Collaboration",
            description: "Real-time collaborative editing",
        },
    ];

    return (
        <div className={`h-full overflow-y-auto ${isFullscreen ? "pt-0" : "pt-16"} transition-all duration-300`}>
            <article className={`max-w-4xl mx-auto p-8 ${isDark ? "text-gray-100" : "text-gray-900"}`}>
                {/* Hero Section */}
                <header className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-linear-to-r from-blue-500 to-purple-500 mb-8 shadow-2xl">
                        <FileText className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-6xl font-bold mb-6 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                        About MarkEdit Pro
                    </h1>
                    <p className={`text-xl leading-relaxed max-w-3xl mx-auto text-gray-600 dark:text-gray-300`}>
                        A modern, feature-rich markdown editor built with cutting-edge web technologies. Designed for writers, developers, and content creators
                        who demand excellence in their tools.
                    </p>
                </header>

                {/* Mission Statement */}
                <section className="mb-16">
                    <div
                        className={`p-8 rounded-2xl border ${
                            isDark
                                ? "bg-linear-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30"
                                : "bg-linear-to-r from-blue-50 to-purple-50 border-blue-200"
                        } mb-12`}
                    >
                        <div className="flex items-center mb-6">
                            <Target className="w-8 h-8 text-blue-500 mr-4" />
                            <h2 className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Our Mission</h2>
                        </div>
                        <div className={`prose prose-lg max-w-none ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                            <p className="mb-4">
                                We believe that great writing tools should be <strong>beautiful</strong>, <strong>fast</strong>, and <strong>accessible</strong>
                                . MarkEdit Pro was born from the frustration with existing markdown editors that compromise on either functionality or user
                                experience.
                            </p>
                            <p className="mb-4">
                                Our goal is to create the most intuitive and powerful markdown editing experience possible, while maintaining the simplicity and
                                elegance that makes markdown so appealing in the first place.
                            </p>
                            <p>
                                Whether you're writing documentation, blog posts, or taking notes, MarkEdit Pro adapts to your workflow and helps you focus on
                                what matters most: <em>your content</em>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center ${isDark ? "text-white" : "text-gray-900"}`}>Why Choose MarkEdit Pro?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl border ${
                                    isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"
                                } hover:shadow-lg transition-all duration-300 hover:scale-105`}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 mr-4">
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{feature.title}</h3>
                                </div>
                                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Statistics */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center ${isDark ? "text-white" : "text-gray-900"}`}>Built for Performance</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl border text-center ${
                                    isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"
                                } hover:shadow-lg transition-all duration-300`}
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 rounded-lg bg-linear-to-r from-blue-500 to-purple-500">
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technology Stack */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center ${isDark ? "text-white" : "text-gray-900"}`}>Built with Modern Technologies</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl border ${
                                    isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"
                                } hover:shadow-lg transition-all duration-300`}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="text-3xl mr-4">{tech.icon}</div>
                                    <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{tech.name}</h3>
                                </div>
                                <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Development Roadmap */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center ${isDark ? "text-white" : "text-gray-900"}`}>Development Roadmap</h2>
                    <div className="space-y-6">
                        {roadmap.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-start space-x-6 p-6 rounded-xl border ${
                                    isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"
                                } hover:shadow-lg transition-all duration-300`}
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
                                        <h3 className={`text-xl font-semibold mr-3 ${isDark ? "text-white" : "text-gray-900"}`}>{item.title}</h3>
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
                                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Philosophy */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center ${isDark ? "text-white" : "text-gray-900"}`}>Our Design Philosophy</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className={`p-8 rounded-xl border ${isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"}`}>
                            <div className="flex items-center mb-6">
                                <Lightbulb className="w-8 h-8 text-yellow-500 mr-4" />
                                <h3 className={`text-2xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Simplicity First</h3>
                            </div>
                            <p className={`text-lg mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                                We believe that the best tools are invisible. MarkEdit Pro gets out of your way and lets you focus on writing, not fighting with
                                the interface.
                            </p>
                            <ul className={`space-y-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                <li>• Clean, distraction-free interface</li>
                                <li>• Intuitive keyboard shortcuts</li>
                                <li>• Minimal learning curve</li>
                                <li>• Focus on content, not formatting</li>
                            </ul>
                        </div>

                        <div className={`p-8 rounded-xl border ${isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"}`}>
                            <div className="flex items-center mb-6">
                                <Rocket className="w-8 h-8 text-blue-500 mr-4" />
                                <h3 className={`text-2xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Performance Matters</h3>
                            </div>
                            <p className={`text-lg mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                                Every millisecond counts when you're in the flow of writing. We've optimized every aspect of the editor for maximum
                                responsiveness.
                            </p>
                            <ul className={`space-y-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
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
                    <h2 className={`text-3xl font-bold mb-8 text-center ${isDark ? "text-white" : "text-gray-900"}`}>Built with ❤️</h2>
                    <div className={`p-8 rounded-xl border text-center ${isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"}`}>
                        <div className="flex justify-center mb-6">
                            <div className="p-4 rounded-full bg-linear-to-r from-pink-500 to-red-500">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <h3 className={`text-2xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Crafted with Passion</h3>
                        <p className={`text-lg mb-6 max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                            MarkEdit Pro is developed by passionate developers who believe in creating tools that make a difference in people's daily workflows.
                            Every feature is carefully considered and implemented with attention to detail.
                        </p>
                        <div className="flex justify-center space-x-6">
                            <div className={`flex items-center px-4 py-2 rounded-lg ${isDark ? "bg-gray-700" : "bg-gray-100"}`}>
                                <Coffee className="w-5 h-5 mr-2 text-amber-500" />
                                <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>Fueled by coffee</span>
                            </div>
                            <div className={`flex items-center px-4 py-2 rounded-lg ${isDark ? "bg-gray-700" : "bg-gray-100"}`}>
                                <Code className="w-5 h-5 mr-2 text-blue-500" />
                                <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>Open source</span>
                            </div>
                            <div className={`flex items-center px-4 py-2 rounded-lg ${isDark ? "bg-gray-700" : "bg-gray-100"}`}>
                                <Users className="w-5 h-5 mr-2 text-green-500" />
                                <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>Community driven</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section
                    className={`p-8 rounded-2xl border ${
                        isDark
                            ? "bg-linear-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30"
                            : "bg-linear-to-r from-blue-50 to-purple-50 border-blue-200"
                    } text-center`}
                >
                    <h2 className={`text-3xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>Ready to Transform Your Writing?</h2>
                    <p className={`text-lg mb-8 max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        Join thousands of writers, developers, and content creators who have made MarkEdit Pro their go-to markdown editor. Experience the
                        difference that thoughtful design and cutting-edge technology can make in your daily workflow.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div
                            className={`px-6 py-3 rounded-lg ${isDark ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"} border ${
                                isDark ? "border-gray-700" : "border-gray-200"
                            } shadow-sm`}
                        >
                            <Award className="w-5 h-5 inline mr-2 text-yellow-500" />
                            <span className="font-semibold">Production Ready</span>
                        </div>
                        <div
                            className={`px-6 py-3 rounded-lg ${isDark ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"} border ${
                                isDark ? "border-gray-700" : "border-gray-200"
                            } shadow-sm`}
                        >
                            <Shield className="w-5 h-5 inline mr-2 text-green-500" />
                            <span className="font-semibold">Privacy Focused</span>
                        </div>
                        <div
                            className={`px-6 py-3 rounded-lg ${isDark ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"} border ${
                                isDark ? "border-gray-700" : "border-gray-200"
                            } shadow-sm`}
                        >
                            <Star className="w-5 h-5 inline mr-2 text-purple-500" />
                            <span className="font-semibold">Always Free</span>
                        </div>
                    </div>
                    <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>💡 Start writing your next masterpiece today!</div>
                </section>
            </article>
        </div>
    );
};

export default About;
