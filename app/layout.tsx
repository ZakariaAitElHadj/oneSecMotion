
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'


const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'OneSecMotion - Professional Photographer Mustapha Doauz',
  description: 'OneSecMotion - Professional photography by Mustapha Doauz specializing in portrait, landscape, and editorial photography.',
  icons: {
    icon: [
      {
        url: '/image/onesecmotionlogo.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/image/onesecmotionlogo.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/image/onesecmotionlogo.jpg',
        type: 'image/jpg+xml',
      },
    ],
    apple: '/image/onesecmotionlogo.jpg',
  },
}



export default function RootLayout({
  children,
}: Readonly<{

  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )


}
