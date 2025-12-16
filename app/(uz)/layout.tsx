import MainLayout from "./layout-client";

export const metadata = {
    title: "Markdown muharriri",
    description: "Chiroyli va funksiyalarga boy, realtime ko‘rib chiqishga mo‘ljallangan onlayn Markdown muharriri",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <MainLayout>{children}</MainLayout>;
}
