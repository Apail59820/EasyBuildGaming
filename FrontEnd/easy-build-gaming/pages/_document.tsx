import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}