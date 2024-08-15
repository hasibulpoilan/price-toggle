import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center transition-colors duration-300 ease-in-out ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
      {/* Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="mb-10 flex items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200 ease-in-out"
      >
        <FontAwesomeIcon icon={isDarkMode ? faToggleOff : faToggleOn} className="mr-2" />
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Pricing Section */}
      <div className="container max-w-4xl p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-6">API Pricing</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-8">
          Our API pricing is based on the model used and the number of tokens processed. Here’s a breakdown of the costs:
        </p>
        <table className="w-full table-auto mb-10 border-collapse">
          <thead>
            <tr className="bg-blue-500 dark:bg-blue-700 text-left text-white">
              <th className="p-4 font-semibold text-sm uppercase tracking-wide">API</th>
              <th className="p-4 font-semibold text-sm uppercase tracking-wide">Model</th>
              <th className="p-4 font-semibold text-sm uppercase tracking-wide">Price per 1k Tokens</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-4 text-gray-900 dark:text-gray-100">OpenAI</td>
              <td className="p-4 text-gray-600 dark:text-gray-400">GPT-3.5</td>
              <td className="p-4 text-gray-900 dark:text-gray-100">$0.002</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <td className="p-4 text-gray-900 dark:text-gray-100">OpenAI</td>
              <td className="p-4 text-gray-600 dark:text-gray-400">GPT-4</td>
              <td className="p-4 text-gray-900 dark:text-gray-100">$0.03</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-4 text-gray-900 dark:text-gray-100">Together AI</td>
              <td className="p-4 text-gray-600 dark:text-gray-400">Llama-2-70b</td>
              <td className="p-4 text-gray-900 dark:text-gray-100">$0.0008</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="p-4 text-gray-900 dark:text-gray-100">Together AI</td>
              <td className="p-4 text-gray-600 dark:text-gray-400">Llama-2-13b</td>
              <td className="p-4 text-gray-900 dark:text-gray-100">$0.0006</td>
            </tr>
          </tbody>
        </table>
        <div className="text-gray-700 dark:text-gray-400">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Token Estimation</h2>
            <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Billing</h2>
            <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
