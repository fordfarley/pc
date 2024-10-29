import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Enlace para Roboto */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Enlace para Tangerine */}
        <link
          href="https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Enlace para Birthstone */}
        <link
          href="https://fonts.googleapis.com/css2?family=Birthstone&display=swap"
          rel="stylesheet"
        />
        </Head>
      <body >       
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
