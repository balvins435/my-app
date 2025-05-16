'use client';

import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {query ? (
        <p className="text-lg">Showing results for: <span className="font-semibold text-blue-600">{query}</span></p>
      ) : (
        <p className="text-lg text-gray-500">No search query provided.</p>
      )}

      {/* You can replace below with actual search result logic */}
      <div className="mt-6 text-gray-500">Search result placeholder (e.g., articles, pages, products...)</div>
    </div>
  );
}
