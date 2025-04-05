import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style jsx global>{`
          button, .button, [type='button'], [type='submit'], [data-slot="button"], a[role="button"] {
            font-size: 1rem !important;
            font-family: 'Nexa Bold', sans-serif !important;
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}