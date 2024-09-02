import React, { useState, useEffect } from 'react';

// useDebounce custom hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// SearchPage component
function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Qidiruv funksiyasi yoki API chaqiruvi
      console.log('Qidiruv natijalari:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Qidiruv sahifasi</h1>
      <input
        type="text"
        placeholder="Biror narsa qidiring..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {debouncedSearchTerm && (
        <p className="mt-4 text-lg">Siz qidirayotgan narsa: {debouncedSearchTerm}</p>
      )}
    </div>
  );
}

// Exporting the main App component
export default function App() {
  return <SearchPage />;
}
