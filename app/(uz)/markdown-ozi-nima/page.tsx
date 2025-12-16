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
            title: "Sarlavhalar",
            icon: Hash,
            markdown: "# Sarlavha 1\n## Sarlavha 2\n### Sarlavha 3\n#### Sarlavha 4\n##### Sarlavha 5\n###### Sarlavha 6",
            description: "# belgilari yordamida sarlavhalar yarating",
        },
        {
            title: "Matn Formatlash",
            icon: Bold,
            markdown: "**Qalin matn**\n*Kursiv matn*\n***Qalin va kursiv***\n~~O'chirilgan matn~~\n`Qator ichidagi kod`",
            description: "Matnni turli uslublar bilan formatlash",
        },
        {
            title: "Havolalar va Manbalar",
            icon: Link,
            markdown:
                '[Qator ichidagi havola](https://example.com)\n[Sarlavhali havola](https://example.com "Sarlavha")\n[Manba havola][1]\n\n[1]: https://example.com "Manba sarlavhasi"',
            description: "Qator ichidagi yoki manba uslubida bosish mumkin bo'lgan havolalar yaratish",
        },
        {
            title: "Ro'yxatlar va Vazifalar",
            icon: List,
            markdown:
                "- Tartiblanmagan element 1\n- Tartiblanmagan element 2\n  - Ichki element\n\n1. Tartiblangan element 1\n2. Tartiblangan element 2\n\n- [x] Tugallangan vazifa\n- [ ] Tugallanmagan vazifa",
            description: "Tartiblangan, tartiblanmagan va ichki joylashgan vazifalar ro'yxatlarini yaratish",
        },
        {
            title: "Rasmlar va Media",
            icon: Image,
            markdown: '![Alt matn](image.jpg)\n![Alt matn](image.jpg "Rasm sarlavhasi")\n\n[![Rasm havola](thumb.jpg)](full-image.jpg)',
            description: "Alt matn va qo'shimcha sarlavhalar bilan rasmlarni joylash",
        },
        {
            title: "Kod Bloklari",
            icon: Code,
            markdown:
                '`qator ichidagi kod`\n\n```javascript\nfunction greet(name) {\n  console.log(`Salom, ${name}!`);\n}\n\ngreet("Dunyo");\n```\n\n```python\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n```',
            description: "Kodni qator ichida yoki sintaksisi ajratilgan bloklarda ko'rsatish",
        },
        {
            title: "Iqtiboslar va Manbalar",
            icon: Quote,
            markdown:
                "> Bu oddiy blok-iqtibos\n> \n> Bir nechta xatboshi qo'llab-quvvatlanadi\n> \n> > Ichki blok-iqtiboslar ham ishlaydi\n\n> **Eslatma:** Iqtiboslar ichida *formatlashni* ishlatishingiz mumkin",
            description: "Urg'u va manbalar uchun blok-iqtiboslar yaratish",
        },
        {
            title: "Jadvallar va Ma'lumotlar",
            icon: Table,
            markdown:
                "| Xususiyat | Markdown | HTML |\n|-----------|----------|------|\n| Oddiy     | ✅      | ❌   |\n| O'qishli  | ✅      | ❌   |\n| Kuchli    | ✅      | ✅   |\n\n| Chap | Markaz | O'ng |\n|:-----|:------:|-----:|\n| C1   |   M1   |   O1 |\n| C2   |   M2   |   O2 |",
            description: "Tekislash opsiyalari bilan tizimli jadvallar yaratish",
        },
    ];
    const useCases = [
        {
            icon: BookOpen,
            title: "Hujjatlashtirish",
            description: "README fayllari, API hujjatlari va texnik hujjatlashtirish uchun mukammal",
            examples: ["GitHub README fayllari", "API hujjatlari", "Loyihalar vikilari", "Foydalanuvchi qo'llanmalari"],
        },
        {
            icon: Users,
            title: "Hamkorlik",
            description: "Jamoaviy aloqa va bilimlarni almashish uchun ideal",
            examples: ["Jamoaviy eslatmalar", "Uchrashuv bayonnomalari", "Loyihaviy takliflar", "Kod tekshiruvlari"],
        },
        {
            icon: Globe,
            title: "Veb Kontent",
            description: "Bloglar, veb-saytlar va kontentni boshqarish uchun ajoyib",
            examples: ["Blog postlari", "Statik sayt generatorlari", "CMS kontenti", "Elektron pochta shablonlari"],
        },
        {
            icon: Lightbulb,
            title: "Shaxsiy Foydalanish",
            description: "Shaxsiy eslatmalar va tashkil etish uchun juda yaxshi",
            examples: ["Shaxsiy eslatmalar", "Qilinadigan ishlar ro'yxatlari", "Kundalik yozuvlar", "O'quv materiallari"],
        },
    ];
    const advantages = [
        {
            icon: Zap,
            title: "Juda Tez",
            description: "An'anaviy matn protsessorlariga qaraganda tezroq formatlangan kontent yozish",
        },
        {
            icon: Target,
            title: "Kontentga E'tibor",
            description: "Minimal sintaksis sizni yozayotgan narsangizga e'tiborni qaratishga yordam beradi",
        },
        {
            icon: Globe,
            title: "Umumiy Qo'llab-quvvatlash",
            description: "Minglab ilovalar va platformalar tomonidan qo'llab-quvvatlanadi",
        },
        {
            icon: Clock,
            title: "Kelajakda Ham Amaliy",
            description: "Oddiy matn formati uzoq umr va foydalanish imkoniyatini ta'minlaydi",
        },
        {
            icon: Code,
            title: "Versiya Boshqaruvi",
            description: "Git va boshqa versiyani boshqarish tizimlari bilan mukammal ishlaydi",
        },
        {
            icon: Star,
            title: "O'rganish Oson",
            description: "Bir necha daqiqada o'zlashtirish mumkin bo'lgan oddiy sintaksis",
        },
    ];
    const history = [
        {
            year: "2004",
            event: "John Gruber Markdownni yaratadi",
            description: "O'qish oson, yozish oson bo'lgan oddiy matn formatidan foydalanib yozish usuli sifatida ishlab chiqilgan",
        },
        {
            year: "2008",
            event: "GitHub Markdownni qabul qiladi",
            description: "GitHub README fayllari va hujjatlashtirish uchun Markdown'dan foydalanishni boshlaydi",
        },
        {
            year: "2012",
            event: "CommonMark spetsifikatsiyasi",
            description: "Markdown sintaksisini standartlashtirishga qaratilgan harakat boshlanadi",
        },
        {
            year: "2014",
            event: "GitHub Flavored Markdown",
            description: "GitHub Markdownning o'zining kengaytirilgan versiyasini chiqaradi",
        },
        {
            year: "Hozir",
            event: "Ommaviy qabul qilish",
            description: "Butun dunyo bo'ylab millionlab dasturchilar, yozuvchilar va kontent yaratuvchilari tomonidan qo'llaniladi",
        },
    ];

    return (
        <div className={`h-full overflow-y-auto ${isFullscreen ? "pt-0" : "pt-16"} transition-all duration-300`}>
            <article className={`max-w-4xl mx-auto p-8 text-gray-8`}>
                {/* Asosiy Qism (Hero Section) */}
                <header className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-linear-to-r from-blue-500 to-purple-500 mb-8 shadow-2xl">
                        <FileText className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-6xl font-bold mb-6 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                        Markdown nima?
                    </h1>
                    <p className={`text-xl leading-relaxed max-w-3xl mx-auto text-gray-1`}>
                        Matnni yozish va formatlash usulini inqilob qilgan yengil markerlash tili. Nima uchun millionlab dasturchilar, yozuvchilar va kontent
                        yaratuvchilari kundalik ishlarida Markdownni tanlashini bilib oling.
                    </p>
                </header>

                {/* Kirish */}
                <section className="mb-16">
                    <div className={`p-8 rounded-2xl border special-1 mb-12`}>
                        <h2 className={`text-3xl font-bold mb-6 text-gray-7`}>Markdown Tarixi</h2>
                        <div className={`prose prose-lg max-w-none text-gray-3`}>
                            <p className="mb-4">
                                Markdown 2004-yilda <b>John Gruber</b> tomonidan Aaron Swartz bilan hamkorlikda yaratilgan. Maqsad oddiy, ammo inqilobiy edi:
                                o'qish oson, yozish oson bo'lgan oddiy matn formatidan foydalanib yozish usulini yaratish, u tizimli jihatdan to'g'ridan to'g'ri
                                HTML'ga aylantirilishi mumkin.
                            </p>
                            <p className="mb-4">
                                "Markdown" nomi "markup" so'zi bilan bog'liq bo'lib, u matnni xom shaklida ham o'qiladigan tarzda formatlashni belgilash
                                imkonini berishiga ishora qiladi. HTML yoki boshqa markup tillaridan farqli o'laroq, Markdown inson tomonidan o'qilishi
                                mumkinligiga ustuvorlik beradi.
                            </p>
                            <p>
                                Bugungi kunda Markdown butun veb bo'ylab hujjatlashtirish, README fayllari, forum muhokamalari va kontent yaratish uchun
                                de-fakto standartiga aylandi. GitHub'dan Reddit'gacha, texnik hujjatlardan shaxsiy bloglargacha, Markdown hamma joyda matn
                                formatlashni ta'minlaydi.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Xronologiya */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Yillar Bo'yicha</h2>
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

                {/* Nima uchun Markdownni tanlash kerak */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Nima uchun Markdown tanlanadi?</h2>
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

                {/* Qo'llash Holatlari */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Markdown Qayerda Yorqin Ko'rinadi</h2>
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

                {/* Sintaksis Misollari */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Sintaksisni O'zlashtirish</h2>
                    <p className={`text-center text-lg mb-12 text-gray-1`}>
                        Darhol foydalanishingiz mumkin bo'lgan amaliy misollar bilan muhim Markdown sintaksisini o'rganing.
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

                {/* Eng Yaxshi Amaliyotlar */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Eng Yaxshi Amaliyotlar va Maslahatlar</h2>
                    <div className={`p-8 rounded-xl border bg-color-3 bor-col-1`}>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className={`text-xl font-semibold mb-4 text-green-500`}>✅ Buni qiling</h3>
                                <ul className={`space-y-3 text-gray-3`}>
                                    <li>• Bir xil oraliq va chekinishdan foydalaning</li>
                                    <li>• Sarlavhalar va xatboshilar atrofida bo'sh qatorlar qo'shing</li>
                                    <li>• Rasmlar uchun tavsiflovchi alt matnidan foydalaning</li>
                                    <li>• Iloji bo'lsa, qatorlarni 80 belgidan kam tuting</li>
                                    <li>• Toza matn uchun manba uslubidagi havolalardan foydalaning</li>
                                    <li>• Nashr qilishdan oldin kontentingizni ko'rib chiqing</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className={`text-xl font-semibold mb-4 text-red-500`}>❌ Bundan saqlaning</h3>
                                <ul className={`space-y-3 text-gray-3`}>
                                    <li>• HTML'ni keraksiz aralashtirmang</li>
                                    <li>• Nomuvofiq sarlavha darajalaridan saqlaning</li>
                                    <li>• Rasmlar uchun alt matnini unutmaslikka harakat qiling</li>
                                    <li>• Haddan tashqari murakkab jadval tuzilmalaridan saqlaning</li>
                                    <li>• Juda ko'p ichki ro'yxatlardan foydalanmang</li>
                                    <li>• Turli ro'yxat uslublarini aralashtirmang</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mashhur Vositalar */}
                <section className="mb-16">
                    <h2 className={`text-3xl font-bold mb-8 text-center text-gray-7`}>Mashhur Markdown Vositalari</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: "GitHub", description: "Kod omborlari va hujjatlashtirish", category: "Platforma" },
                            { name: "Typora", description: "WYSIWYG markdown muharriri", category: "Muharrir" },
                            { name: "Obsidian", description: "Bilimlarni boshqarish va eslatma olish", category: "Eslatmalar" },
                            { name: "Jekyll", description: "Statik sayt generatori", category: "Generator" },
                            { name: "Notion", description: "Barchasi bitta ish maydoni", category: "Ish maydoni" },
                            { name: "Discord", description: "Chat va aloqa", category: "Aloqa" },
                            { name: "Reddit", description: "Ijtimoiy yangiliklar va muhokama", category: "Ijtimoiy" },
                            { name: "GitBook", description: "Hujjatlashtirish platformasi", category: "Hujjatlashtirish" },
                            { name: "Hugo", description: "Tez statik sayt generatori", category: "Generator" },
                        ].map((tool, index) => (
                            <div key={index} className={`p-6 rounded-xl border bg-color-3 bor-col-1 hover:shadow-lg transition-all duration-300`}>
                                <div className={`text-xs font-semibold mb-2 px-2 py-1 rounded-full inline-block bg-color-9 text-blue-11`}>{tool.category}</div>
                                <h3 className={`text-lg font-semibold mb-2 text-gray-7`}>{tool.name}</h3>
                                <p className={`text-sm text-gray-1`}>{tool.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Harakatga Chorlash */}
                <section className={`p-8 rounded-2xl border special-1 text-center`}>
                    <h2 className={`text-3xl font-bold mb-6 text-gray-7`}>Markdown Sayohatini Boshlashga Tayyormisiz?</h2>
                    <p className={`text-lg mb-8 max-w-2xl mx-auto text-gray-1`}>
                        Markdownning kuchi va soddaligini bo'yicha bilimlaringizni amalda qo'llash vaqti keldi. Muharririmizga qayting va o'zingizning Markdown
                        hujjatingizni yarating!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className={`px-6 py-3 rounded-lg text-gray-3 bg-color-2 border bor-col-1 shadow-sm`}>
                            <span className="font-mono text-sm font-semibold">Ctrl + B</span>
                            <span className="ml-2">Qalin</span>
                        </div>
                        <div className={`px-6 py-3 rounded-lg text-gray-3 bg-color-2 border bor-col-1 shadow-sm`}>
                            <span className="font-mono text-sm font-semibold">Ctrl + I</span>
                            <span className="ml-2">Kursiv</span>
                        </div>
                        <div className={`px-6 py-3 rounded-lg text-gray-3 bg-color-2 border bor-col-1 shadow-sm`}>
                            <span className="font-mono text-sm font-semibold">Ctrl + K</span>
                            <span className="ml-2">Havola</span>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default WhatIsMarkdownPage;
