import { ILocaleParams } from '@/interfaces';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Viewport } from 'next/dist/lib/metadata/types/extra-types';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CommunicAI',
  description:
    'Virtual assistant helps you learn English communication effectively in real-time.',
  authors: [
    {
      name: 'CommunicAI',
      url: 'https://communicai.com',
    },
  ],
};

export const runtime = 'edge';

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1,
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<ILocaleParams>) {
  const messages = await getMessages({ locale });
  console.log(messages);
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
