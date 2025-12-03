import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dimewise",
  description: "One stop Finance Platform",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://dimewise.vercel.app"),
  openGraph: {
    title: "Dimewise",
    description: "One stop Finance Platform",
    url: "https://dimewise.vercel.app",
    siteName: "Dimewise",
    images: [
      {
        url: "/banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Dimewise Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimewise",
    description: "One stop Finance Platform",
    images: ["/banner.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>
                &ldquo;Your Money, Down to the Dimewise.&rdquo; <br />
                © 2025 Dimewise | Made by Manish Bhaktisagar
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
