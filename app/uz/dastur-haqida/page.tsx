import React from "react";
import { Globe } from "lucide-react";
import { Shield } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Download } from "lucide-react";
import { FileText } from "lucide-react";
import { Settings } from "lucide-react";
import { Palette } from "lucide-react";
import { Rocket } from "lucide-react";
import { Target } from "lucide-react";
import { Github } from "lucide-react";
import { Award } from "lucide-react";
import { Users } from "lucide-react";
import { Star } from "lucide-react";
import { Code } from "lucide-react";
import { Zap } from "lucide-react";

interface AboutProps {
    isFullscreen: boolean;
}

const About: React.FC<AboutProps> = ({ isFullscreen }) => {
    const features = [
        {
            icon: Shield,
            title: "Maxfiylik",
            description: "Barcha ma’lumotlar faqat qurilmangizda saqlanadi, serverga yuborilmaydi",
        },
        {
            icon: Zap,
            title: "Yuqori tezlik",
            description: "Real vaqt rejimida ko‘rish va oson tahrirlash uchun optimallashtirilgan",
        },
        {
            icon: Palette,
            title: "Chiroyli dizayn",
            description: "Zamonaviy va toza interfeys, kunduzgi va tungi rejimlar bilan",
        },
        {
            icon: Smartphone,
            title: "Moslashuvchan",
            description: "Kompyuter, planshet va telefonlarda mukammal ishlaydi",
        },
        {
            icon: Download,
            title: "Import va eksport",
            description: "Markdown fayllarni osongina yuklash va saqlash imkoniyati",
        },
        {
            icon: Settings,
            title: "Moslashuvchan bo‘lish",
            description: "Dastur ko‘rinishini o‘zingizga qulay qilib o‘zgartirish mumkin",
        },
    ];

    const technologies = [
        {
            name: "Next.js",
            description: "Server va clientda ishlaydigan zamonaviy React framework",
            icon: "▲",
        },
        {
            name: "TypeScript",
            description: "Xatolarsiz va ishonchli kod yozish uchun",
            icon: "📘",
        },
        {
            name: "Tailwind CSS",
            description: "Zamonaviy va qulay dizayn qilish uchun CSS framework",
            icon: "🎨",
        },
        {
            name: "Marked.js",
            description: "Markdown matnni tez qayta ishlovchi kutubxona",
            icon: "📝",
        },
        {
            name: "Lucide React",
            description: "Chiroyli va sozlanadigan ikonkalar to‘plami",
            icon: "🎯",
        },
        {
            name: "Node.js / Bun",
            description: "JavaScript runtime va tezkor package manager",
            icon: "⚡",
        },
    ];

    const stats = [
        { number: "100%", label: "Ochiq kodli", icon: Github },
        { number: "0ms", label: "Server kechikishi", icon: Zap },
        { number: "∞", label: "Fayl hajmi", icon: FileText },
        { number: "24/7", label: "Internetsiz ishlaydi", icon: Globe },
    ];

    const roadmap = [
        {
            status: "completed",
            title: "Asosiy muharrir",
            description: "Real vaqt rejimida ko‘rish bilan markdown tahrirlash",
        },
        {
            status: "completed",
            title: "Mavzular tizimi",
            description: "Kunduzgi va tungi dizayn qo‘llab-quvvatlash",
        },
        {
            status: "completed",
            title: "Fayllar bilan ishlash",
            description: "Markdown fayllarni import va eksport qilish",
        },
        {
            status: "completed",
            title: "Kengaytirilgan formatlash vositalari",
            description: "Qo‘shimcha formatlash uchun tezkor tugmalar",
        },
        {
            status: "in-progress",
            title: "Ko‘p tilli",
            description: "Ilova interfeysi 10 dan ortiq tillarni qo‘llab-quvvatlaydi",
        },
        {
            status: "planned",
            title: "Jamoaviy ishlash",
            description: "Bir vaqtda bir nechta foydalanuvchi tahriri",
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
                        Markdown muharriri haqida
                    </h1>
                    <p className={`text-xl leading-relaxed max-w-3xl mx-auto text-gray-1`}>
                        Zamonaviy, xususiyatlarga boy markdown muharriri, eng zamonaviy veb-texnologiyalar bilan yaratilgan. Dasturchilar, kontent yaratuvchilar
                        va siz uchun mo'ljallangan.
                    </p>
                </header>

                {/* Mission Statement */}
                <section className="mb-16">
                    <div className={`p-8 rounded-2xl border special-1 mb-12`}>
                        <div className="flex items-center mb-6">
                            <Target className="w-8 h-8 text-blue-500 mr-4" />
                            <h2 className={`text-3xl font-bold text-gray-7`}>Bizning vazifamiz</h2>
                        </div>
                        <div className={`prose prose-lg max-w-none text-gray-3 text-justify`}>
                            <p className="mb-4">
                                Matn muharrirlari chiroyli, tezkor va foydalanishga qulay bo‘lishi kerak. Bu markdown muharriri mavjud markdown muharrirlarining
                                yo funksionallikni, yo foydalanuvchi tajribasini qurbon qilayotganidan norozilik sababli paydo bo'lgan.
                            </p>
                            <p className="mb-4">
                                Bizning maqsadimiz – markdownni dastlab jozibador qilgan soddalik va nafislikni saqlab qolgan holda, eng intuitiv va kuchli
                                markdown tahrirlash vositasini yaratishdir.
                            </p>
                            <p>
                                Hoh dokumentatsiya, hoh blog yozuvlari yoki oddiy qaydlar yozayotgan bo'lishingizdan qat’iy nazar, Markdown muharriri sizning
                                ish oqimingizga moslashadi va eng muhimi: kontentingizga e'tibor qaratishingizga yordam beradi.
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
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Qulaylik uchun qilingan</h2>
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
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Zamonaviy texnologiyalar bilan qilingan</h2>
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
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Dasturni qurish xaritasi</h2>
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
                                            {item.status === "completed" ? "Tugallangan" : item.status === "in-progress" ? "Jarayonda" : "Rejada"}
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
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Dizayn falsafasi</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className={`p-8 rounded-xl border bg-color-3 bor-col-1`}>
                            <div className="flex items-center mb-6">
                                <Lightbulb className="w-8 h-8 text-yellow-500 mr-4" />
                                <h3 className={`text-2xl font-semibold text-gray-7`}>Soddalik birinchi o'rinda</h3>
                            </div>
                            <p className={`text-lg mb-4 text-gray-1`}>
                                Futbolda <b>yaxshi hakam o'yinda ko'rinmaydi</b> degan gap bor. Ushbu markdown muharriri sizga interfeys bilan kurashishga emas,
                                balki yozishga e'tibor qaratishga imkon beradi.
                            </p>
                            <ul className={`space-y-2 text-gray-9`}>
                                <li>• Toza va chalg'itmaydigan interfeys</li>
                                <li>• Minimal o'rganish vaqti</li>
                                <li>• Kontentga qaratilgan fokus</li>
                            </ul>
                        </div>

                        <div className={`p-8 rounded-xl border bg-color-3 bor-col-1`}>
                            <div className="flex items-center mb-6">
                                <Rocket className="w-8 h-8 text-blue-500 mr-4" />
                                <h3 className={`text-2xl font-semibold text-gray-7`}>Ish ustuvorligi</h3>
                            </div>
                            <p className={`text-lg mb-4 text-gray-1`}>
                                Yozish jarayonida bo'lganingizda har bir millisekund muhim. Biz muharrirning har bir jihatini maksimal darajada tezkorlik bilan
                                optimallashtirdik.
                            </p>
                            <ul className={`space-y-2 text-gray-9 mt-auto`}>
                                <li>• Real vaqt rejimida ko‘rish</li>
                                <li>• Katta hujjatlar uchun optimallashtirilgan</li>
                                <li>• Xotiradan samarali foydalanish</li>
                                <li>• Intuitiv yorliqlar</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Team & Credits */}
                <section className="mb-16">
                    <div className={`p-8 rounded-xl border text-center bg-color-3 bor-col-1`}>
                        <p className={`text-lg mb-6 max-w-2xl mx-auto text-gray-1`}>
                            Biz ushbu muharrirni yaratayotganda, barcha tafsilotlar haqida oʻylab chiqdik. Chuqur oʻylangan dizayn va eng zamonaviy
                            texnologiyalar tufayli, yozish ishlaringiz ancha osonlashadi va tezlashadi. Ish jarayoningizda qanday qulaylik yaratishini sinab
                            koʻring!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-4">
                            <div className={`flex items-center px-4 py-2 rounded-lg bg-color-7`}>
                                <Award className="w-5 h-5 mr-2 text-blue-500" />
                                <span className={`text-sm text-gray-3`}>Foydalanishga tayyor</span>
                            </div>
                            <div className={`flex items-center px-4 py-2 rounded-lg bg-color-7`}>
                                <Shield className="w-5 h-5 mr-2 text-blue-500" />
                                <span className={`text-sm text-gray-3`}>Ximoyalangan</span>
                            </div>
                            <div className={`flex items-center px-4 py-2 rounded-lg bg-color-7`}>
                                <Users className="w-5 h-5 mr-2 text-blue-500" />
                                <span className={`text-sm text-gray-3`}>Foydalanuvchilar boshqaruvida</span>
                            </div>
                        </div>
                        <div className="flex justify-center space-x-6">
                            <div className={`px-6 py-2 rounded-lg text-gray-3 bg-color-2 border bor-col-1 shadow-sm`}>
                                <Code className="w-5 h-5 inline mr-2 text-amber-500" />
                                <span className="font-semibold">Ochiq kodli</span>
                            </div>
                            <div className={`px-6 py-2 rounded-lg text-gray-3 bg-color-2 border bor-col-1 shadow-sm`}>
                                <Star className="w-5 h-5 inline mr-2 text-green-500" />
                                <span className="font-semibold">Har doim bepul</span>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default About;
