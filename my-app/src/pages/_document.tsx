import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Tailwind CSS CDN */}
        <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
        {/* Font Awesome CDN */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>
      <body className="bg-gray-900 text-white font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}