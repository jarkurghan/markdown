import { ThemeProvider } from "@/contexts/theme-context";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-gray-900 text-white">
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
