import "@/styles/globals.scss";

import type { AppProps } from "next/app";
import { Be_Vietnam_Pro } from "next/font/google";

import { Layout } from "@/components/Layout";

const font = Be_Vietnam_Pro({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    variable: "--font-family"
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${font.variable} font-sans`}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </main>
    );
}
