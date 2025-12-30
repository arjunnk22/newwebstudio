import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NewWebStudio',
  description: 'Generated with V0 by Vercel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
