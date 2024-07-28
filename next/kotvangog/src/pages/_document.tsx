import { Html, Head, Main, NextScript } from "next/document";
import '@/i18n';

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Lora:wght@400;500;600&family=Marmelad&family=Nunito:wght@400;500;600;700&family=Prata&family=Zilla+Slab:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
