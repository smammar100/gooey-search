import { useState } from "react";
import { format } from "date-fns";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function App() {
  const [query, setQuery] = useState("React.js framework");

  const searchResults = [
    {
      title: "React – A JavaScript library for building user interfaces",
      url: "https://react.dev",
      snippet: "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.",
      timestamp: new Date("2024-02-15")
    },
    {
      title: "Getting Started with React - A Comprehensive Guide",
      url: "https://react.dev/learn",
      snippet: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
      timestamp: new Date("2024-02-10")
    },
    {
      title: "React (software) - Wikipedia",
      url: "https://en.wikipedia.org/wiki/React_(software)",
      snippet: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components.",
      timestamp: new Date("2024-01-20")
    }
  ];

  const peopleAlsoAsk = [
    "What is React.js used for?",
    "Is React.js frontend or backend?",
    "Is React.js free to use?",
    "How long does it take to learn React.js?"
  ];

  const relatedSearches = [
    "React.js vs Angular",
    "React.js tutorial",
    "React.js jobs",
    "React.js examples",
    "React.js documentation",
    "React.js vs Vue.js",
    "React.js projects",
    "React.js certification"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Search Bar */}
      <div className="border-b shadow-sm sticky top-0 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 outline-none text-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Search Results */}
            <div className="space-y-8">
              {searchResults.map((result, index) => (
                <div key={index} className="space-y-1">
                  <a href={result.url} className="group">
                    <h2 className="text-xl text-search-title group-hover:underline">{result.title}</h2>
                    <p className="text-search-url text-sm">{result.url}</p>
                    <p className="text-search-text mt-1">{result.snippet}</p>
                    <p className="text-search-text text-sm">{format(result.timestamp, 'MMM d, yyyy')}</p>
                  </a>
                </div>
              ))}
            </div>

            {/* People Also Ask */}
            <div className="mt-8 border rounded-lg">
              <h3 className="text-lg font-medium p-4 border-b">People also ask</h3>
              <div className="divide-y">
                {peopleAlsoAsk.map((question, index) => (
                  <button key={index} className="w-full text-left p-4 hover:bg-gray-50">
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Related Searches */}
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Related searches</h3>
              <div className="grid grid-cols-2 gap-4">
                {relatedSearches.map((term, index) => (
                  <button key={index} className="text-left text-search-title hover:underline">
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-2 ${page === 1 ? 'text-white bg-blue-500' : 'text-blue-500 hover:bg-gray-100'} rounded`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>

          {/* Knowledge Panel */}
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-4">
              <h2 className="text-xl font-medium mb-4">React (JavaScript library)</h2>
              <img
                src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg"
                alt="React"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-search-text mb-4">
                React is a free and open-source front-end JavaScript library for building user interfaces based on components.
              </p>
              <div className="space-y-2">
                <div className="grid grid-cols-3">
                  <span className="font-medium">Initial release</span>
                  <span className="col-span-2">May 29, 2013</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-medium">Developer</span>
                  <span className="col-span-2">Meta and community</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-medium">Written in</span>
                  <span className="col-span-2">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;