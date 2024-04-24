// HostelRulesPage.js

import React from 'react';
import Layout from '../../Layout/Layout';
function HostelRulesPage() {
  return (<div>
    <Layout title="Hostel Rule and Regulation"/>
    <div className="container py-4 mx-84 max-w-4xl">

      <div className="bg-gray-100 p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">1. Quiet Hours</h2>
        <p className="text-gray-700">Quiet hours are from 10:00 PM to 7:00 AM. Residents are expected to keep noise levels to a minimum during these hours to ensure a peaceful environment for all.</p>
      </div>

      <div className="bg-gray-100 p-6 mt-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">2. Visitors</h2>
        <p className="text-gray-700">Residents may have visitors during specified hours only. All visitors must be registered at the front desk and are subject to the hostel's policies and regulations.</p>
      </div>

      <div className="bg-gray-100 p-6 mt-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">3. Cleanliness</h2>
        <p className="text-gray-700">Residents are responsible for keeping their living spaces clean and tidy at all times. Common areas should also be kept clean for the convenience and comfort of all residents.</p>
      </div>

      <div className="bg-gray-100 p-6 mt-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">4. Safety and Security</h2>
        <p className="text-gray-700">Residents are required to adhere to all safety and security guidelines provided by the hostel management. Any suspicious activity should be reported immediately to the authorities.</p>
      </div>

      <div className="bg-gray-100 p-6 mt-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">5. Curfew</h2>
        <p className="text-gray-700">Residents must adhere to the hostel's curfew timings. Failure to return to the hostel by the designated time may result in penalties or restrictions.</p>
      </div>

      <div className="bg-gray-100 p-6 mt-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">6. Smoking and Alcohol</h2>
        <p className="text-gray-700">Smoking and consumption of alcohol are strictly prohibited within the hostel premises. Violation of this rule may lead to disciplinary action.</p>
      </div>

      {/* Add more rules and regulations as needed */}

    </div>
    </div>
  );
}

export default HostelRulesPage;
