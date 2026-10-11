import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Harbour.Space Apprenticeship Program | Practical Challenge",
  description: "Discover the Harbour.Space Apprenticeship Program featuring scholarship information, work-study commitments, student testimonials, frequently asked questions, and application guidance.",
  icons: {
    icon: "/harbour-space-favicon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [ { media: '(prefers-color-scheme: light)', color: 'white' }, { media: '(prefers-color-scheme: dark)', color: 'black' }, ],
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
