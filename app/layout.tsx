import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { inter } from "./fonts"
import TopNav from "./_topnav";
import { Separator } from "@/components/ui/separator";


export const metadata: Metadata = {
  title: "glassyPDM",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          >
            <TopNav />
            <Separator className="my-2"/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
