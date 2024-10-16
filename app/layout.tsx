import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pharmacy Inventory',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isLoggedIn = typeof window !== 'undefined' && !!localStorage.getItem('token');
  const containerClass = isLoggedIn ? 'lg:px-4 sm:ml-64 lg:pt-0 pt-12' : '';

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-800`}>
        {isLoggedIn && <Sidebar />}
        <main className="flex min-h-screen flex-col px-5 text-slate-600">
          <div className={containerClass}>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

