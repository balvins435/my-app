import './globals.css';
// import Link from 'next/link';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <nav style={{ backgroundColor: '#333', padding: '1rem' }}>
          <Link href="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
          <Link href="/about" style={{ color: 'white' }}>About</Link>
          <Link href="/services" style={{color:'White',marginLeft: '1rem'}}>Services</Link>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
