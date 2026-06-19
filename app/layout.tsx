import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://printing-services-riyadh.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "خدمات الطباعة في الرياض",
  applicationName: "خدمات الطباعة في الرياض",
  description:
    "خدمات الطباعة في الرياض من شركة لارا للطباعة. نقدم طباعة بروشورات، كروت شخصية، فلايرات، بنرات، وجميع خدمات الطباعة التجارية بجودة عالية.",
  keywords: [
    "خدمات الطباعة في الرياض",
    "مطابع الرياض",
    "طباعة بروشورات الرياض",
    "شركة طباعة الرياض",
    "طباعة كروت شخصية الرياض",
    "طباعة تجارية الرياض",
    "مطابع لارا",
  ],
  authors: [{ name: "شركة لارا للطباعة في الرياض" }],
  creator: "شركة لارا للطباعة",
  publisher: "خدمات الطباعة في الرياض",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: siteUrl,
    siteName: "خدمات الطباعة في الرياض",
    title: "خدمات الطباعة في الرياض",
    description: "حلول طباعة تجارية احترافية للشركات والأفراد في الرياض، بجودة عالية وتنفيذ سريع.",
    images: [{ url: "/printing-hero.png", width: 1733, height: 909, alt: "خدمات الطباعة التجارية في الرياض من شركة لارا" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "خدمات الطباعة في الرياض",
    description: "طباعة بروشورات وكروت وفلايرات وبنرات في الرياض بجودة احترافية.",
    images: ["/printing-hero.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
