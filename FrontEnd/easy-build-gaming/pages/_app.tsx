import '../styles/globals.css'

import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import TopBar from "@/Components/TopBar/TopBar";

export default function App({Component, pageProps} : AppProps) {

    return (
        <>
            <Head>
                <meta charSet="UTF-8"></meta>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scalre=1.0"/>
                <title>EasyBuild</title>
                <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
            </Head>
            <header id="header">
                <TopBar />
            </header>
            <main id="main">
                <aside id="aside">
                    <nav id="nav">

                    </nav>
                </aside>

                <div id="content">
                    <Component {...pageProps} />
                </div>
            </main>
        </>
    );
}