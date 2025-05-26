import { useState, useRef } from 'react';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);

  const handleSearchFocus = () => {
    setIsExpanded(true);
  };

  const handleSearchBlur = () => {
    if (!inputRef.current?.value) {
      setIsExpanded(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className={`relative flex items-center ${isExpanded ? 'w-full max-w-2xl' : 'w-12'} transition-all duration-300 ease-in-out`}>
        <input
          ref={inputRef}
          type="text"
          placeholder={isExpanded ? "Search..." : ""}
          className="w-full h-12 pl-12 pr-4 rounded-full border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white"
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
        <svg 
          className="absolute left-3 w-6 h-6 text-gray-400"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default App;