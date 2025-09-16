import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Av. Mehmet Yılmaz - Hukuk ve Danışmanlık Hizmetleri",
  description: "Profesyonel hukuk danışmanlığı, aile hukuku, iş hukuku, ceza hukuku alanlarında uzman avukatlık hizmetleri.",
  keywords: "avukat, hukuk, danışmanlık, aile hukuku, iş hukuku, ceza hukuku, İstanbul",
  authors: [{ name: "Av. Mehmet Yılmaz" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
