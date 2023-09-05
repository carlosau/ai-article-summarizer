import ReduxProvider from '@/redux/provider'
import './globals.css'
import { Albert_Sans } from 'next/font/google'

const alb = Albert_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={alb.className}><ReduxProvider>{children}</ReduxProvider></body>
    </html>
  )
}
