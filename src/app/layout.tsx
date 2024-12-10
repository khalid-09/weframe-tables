import type { Metadata } from 'next';
import './globals.css';
import SmoothScrolling from '@/components/smooth-scrolling';
import Navbar from '@/components/header/navbar';
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: 'WeFrame | Tables',
  description:
    'Buy best tables and furniture for your home and office at the best price.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className}  antialiased`}>
        <SmoothScrolling>
          <Navbar />
          <main className="pt-[118px] md:pt-[163px]">{children}</main>
        </SmoothScrolling>
      </body>
    </html>
  );
}
