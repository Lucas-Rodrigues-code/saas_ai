import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/modal-provider";
import { ToasterProvider } from "@/components/toaster-provider";
import { CrispProvider } from "@/components/crisp-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genius",
  description: "A melhor ferramenta de IA",
  openGraph: {
    title: "Chatbot, Geração de imagem, Geração de música, Geração de código, Geração de video",
    description:
      "Conheça o melhor que a IA pode oferecer.",
    url: "https://saas-ai-three-iota.vercel.app/",
    siteName: "https://saas-ai-three-iota.vercel.app/",
    images: [
      {
        url: "https://i.ibb.co/ZzLhHhj/ia.jpg",
        width: 1200,
        height: 600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
