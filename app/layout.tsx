import type {Metadata} from "next";
import "../styles/globals.scss";
import {Navigation} from "@/components/navigation";
import {Lexend} from "@next/font/google"
import {Footer} from "@/components/footer";
import Styles from "./layout.module.scss";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";

const lexend = Lexend({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Alex's web journal",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={lexend.className}>
        <div className={Styles.navAndMain}>
            <Navigation/>
            <main>
                {children}
            </main>
        </div>
        <Footer/>
        </body>
        </html>
    );
}