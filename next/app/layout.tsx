import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ConsentManager } from './consent-manager';
import { ThemeToggle } from './theme-toggle';
import { ThemeProvider } from 'next-themes';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'c15t + Next.js Playground',
	description: 'Learn how to use c15t with Next.js App Directory',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
      <body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
        >
          <ConsentManager>
            <ThemeToggle />
            {children}
          </ConsentManager>
        </ThemeProvider>
			</body>
		</html>
	);
}
