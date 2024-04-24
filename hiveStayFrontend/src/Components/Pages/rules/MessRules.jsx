// MessRulesPage.js

import React from 'react';
import Layout from '../../Layout/Layout';
function MessRulesPage() {
  return (
    <div>
        <Layout title="Mess Rule and Regulation"/>
          <div className="container py-4 mx-80 max-w-5xl">
      <h1 className="text-3xl font-bold mb-4">Mess Rules and Regulations</h1>

      <div className="bg-gray-100 p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">1. Meal Timings</h2>
        <p className="text-gray-700">Meal timings are strictly adhered to. Residents are required to be present in the mess hall during the designated meal times. Latecomers may not be served.</p>
      </div>

      <div className="bg-gray-100 p-6 mt-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">2. Cleanliness</h2>
        <p className="text-gray-700">Residents are expected to maintain cleanliness in the mess hall. Food spillage and littering are strictly prohibited. Tables and chairs should be left clean after meals.</p>
      </div>

      <div className="bg-gray-100 p-6 mt-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">3. Food Wastage</h2>
        <p className="text-gray-700">Residents are encouraged to take only as much food as they can consume to minimize wastage. Leaving food uneaten or wasting food intentionally is discouraged.</p>
      </div>

      <div className="bg-gray-100 p-6 mt-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">4. Special Dietary Needs</h2>
        <p className="text-gray-700">Residents with special dietary needs or allergies should inform the mess authorities in advance to make suitable arrangements.</p>
      </div>

      <div className="bg-gray-100 p-6 mt-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">5. Feedback</h2>
        <p className="text-gray-700">Residents are encouraged to provide feedback on the quality and variety of food served in the mess. Suggestions for improvement are welcome.</p>
      </div>

      {/* Add more rules and regulations as needed */}

    </div>
    </div>
  
  );
}

export default MessRulesPage;
