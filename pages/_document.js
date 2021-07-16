import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import GoogleFonts from 'next-google-fonts'
import { ColorModeScript } from "@chakra-ui/react"

export default class MyDocument extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" />
                <Head>
                    <script
                      async
                      src="https://www.googletagmanager.com/gtag/js?id=G-Q482QX788Z"
                    />

                    <script
                      dangerouslySetInnerHTML={{
                        __html: `
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', '[Tracking ID]', { page_path: window.location.pathname });
                        `,
                      }}
                    />
                </Head >
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
