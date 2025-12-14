import { ThemeProvider } from "@/contexts/theme-context";
import MainLayout from "./layout-client";
import "./globals.css";

export const metadata = {
    title: "Markdown editor",
    description: "Beautiful, feature-rich online markdown editor with live preview",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-gray-900 text-white">
                <ThemeProvider>
                    <MainLayout>{children}</MainLayout>
                </ThemeProvider>
            </body>
        </html>
    );
}
