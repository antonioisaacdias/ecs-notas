import type { Metadata } from 'next';

import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import Favicon from '/public/favicon.ico';

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ECS - Notas',
  description: 'Explore as notas do Projeto de Extensão ECS.',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          themes={['light', 'dark']}
          disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
