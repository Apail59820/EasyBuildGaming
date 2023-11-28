import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

export default function App({Component, pageProps} : AppProps) {

    return (
        <>
            <Head>
                <meta charSet="UTF-8"></meta>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scalre=1.0"/>
                <title>MHProject</title>
            </Head>
            <header id="header">
                {/*Header*/}
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