'use client';
import Header from '@/components/common/header';
import Sidebar from '@/components/common/sidebar';
import ModalProvider from '@/components/modals/modal-provider';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import useToast from '@/hooks/useToast';
import { themeAtom } from '@/store/atom';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { ThemeProvider } from 'next-themes';
import { Geist, Geist_Mono } from 'next/font/google';
import { useEffect, useMemo } from 'react';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { toast } = useToast();

  const [theme] = useAtom(themeAtom);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', JSON.stringify(theme));
    }
  }, [theme]);

  const queryClient = useMemo(() => {
    return new QueryClient({
      queryCache: new QueryCache({
        onError: ({ message }) => toast('error', message),
      }),
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    });
  }, []);

  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          <ThemeProvider
            attribute="class"
            defaultTheme={theme}
            enableSystem
            disableTransitionOnChange
            storageKey="theme"
          >
            <TooltipProvider>
              <div className="w-full h-screen flex overflow-hidden relative">
                <Sidebar />
                <main className="w-full h-full flex flex-col relative">
                  <Header />
                  <div className="w-full h-full 2xl:mx-auto max-w-screen-2xl p-4">
                    {children}
                  </div>
                </main>
              </div>
              <ModalProvider />
              <Toaster />
            </TooltipProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
