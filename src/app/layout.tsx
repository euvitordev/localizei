import { PopupWelcome } from "@/components/PopupWelcome"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Localizei",
  description:
    "Localizei, o seu guia para localizar destinos, sem complicação!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <Toaster richColors position="top-right" />
        <PopupWelcome />
        {children}
      </body>
    </html>
  )
}
