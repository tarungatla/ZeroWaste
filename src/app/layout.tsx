"use client"

import { Inter } from 'next/font/google'
import "./globals.css"
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
    <body className={inter.className}>
      <div className="min-h-screen bg-gray-50 flex flex-col">
         {/* header */}
        <div className="flex flex-1">
          {/* sidebar */}
          <main className="flex-1 p-4 lg:p-8 ml-0 lg:ml-64 transition-all duration-300">
            {children}
          </main>
        </div>
      </div>
      <Toaster />
    </body>
    </html >
  )
}