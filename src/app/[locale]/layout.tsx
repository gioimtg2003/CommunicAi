import { ILocaleParams } from '@/interfaces';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';

import '../globals.css';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  applicationName: 'CommunicAI',
  title: 'CommunicAI',
  description:
    'Virtual assistant helps you learn English communication effectively in real-time.',
  authors: [
    {
      name: 'CommunicAI',
      url: 'https://communicai.nguyenconggioi.me',
    },
  ],
  keywords: [
    'CommunicAI',
    'AI Virtual Assistant',
    'English Learning',
    'Communication with AI',
  ],

  viewport: {
    initialScale: 1,
    width: 'device-width',
    maximumScale: 1,
  },
};

export const runtime = 'edge';

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<ILocaleParams>) {
  const messages = await getMessages({ locale });
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
