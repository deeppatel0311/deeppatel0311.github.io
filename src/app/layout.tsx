import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Deep Patel - Cloud Backend Developer',
  description: 'Cloud-focused backend developer with 6+ years of experience building scalable, serverless applications on AWS.',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml;base64,' + btoa(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="20" fill="#0891b2"/>
            <text x="50" y="65" font-family="Arial, sans-serif" font-size="36" font-weight="bold" text-anchor="middle" fill="white">DP</text>
          </svg>
        `),
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}