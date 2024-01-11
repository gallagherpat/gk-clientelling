import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <script type="text/javascript" src="/libs/AppEnablementConnector.js" defer/>
      <script type="text/javascript" src="/libs/api/Common.js" defer/>
      <script type="text/javascript" src="/libs/api/Pos.js" defer/>
      <script type="text/javascript" src="/libs/api/Masterdata.js" defer/>
      <script type="text/javascript" src="/libs/api/ExternalMasterdata.js" defer/>

      <script type="text/javascript" src="/js/app.js" defer/>
        {children}
        </body>
    </html>
  )
}
