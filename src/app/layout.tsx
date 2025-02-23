import type {Metadata} from "next";
import "./globals.css";
import {inter} from "../assets/fonts/fonts";
import {clsx} from "clsx";
import {Header} from "./components/A0_Header/Header";
import {Footer} from "./components/A1_Footer/Footer";
import {Preloader} from "./components/A2_Preloader/Preloader";

export const metadata: Metadata = {
    title: "Beachy",
    description: "We are Beachy a APP specialist on Booking Beach activities",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={clsx(inter.className)}>

        {/*<Preloader/>*/}

        <Header/>

        <main>
            {children}
        </main>

        <Footer/>

        </body>
        </html>
    );
}
