'use client';

import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setShowSearch(false); // Close search bar
      setQuery('');
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <img src="/logo.jpg" alt="Company Logo" className="h-12 w-12" />
          <span className="text-xl font-bold text-gray-800">UltraQuad</span>
        </div>

        <div className="flex items-center space-x-6">
          <nav className="flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</Link>
          </nav>

          {/* Search */}
          <div className="relative">
            {showSearch ? (
              <form onSubmit={handleSearch} className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowSearch(false)}
                  className="text-gray-600 hover:text-red-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="text-gray-600 hover:text-blue-600"
              >
                <Search className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
