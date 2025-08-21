import React, { useState } from 'react'

function KPI({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow text-center">
      <p className="text-gray-500">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}

function App() {
  const [confidence, setConfidence] = useState(92)

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Bionic Agent Portal</h1>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <KPI title="Transactions" value="12,430" />
        <KPI title="Avg Cost / Txn" value="$7.80" />
        <KPI title="Savings (MTD)" value="$128,700" />
        <KPI title="AI Confidence" value={confidence + '%'} />
      </div>
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-lg font-bold mb-2">Quote Comparison (Demo)</h2>
        <p>LOB: Small Commercial BOP</p>
        <table className="w-full text-left border mt-2">
          <thead>
            <tr className="border-b">
              <th className="p-2">Carrier</th>
              <th className="p-2">Limit</th>
              <th className="p-2">Deductible</th>
              <th className="p-2">Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">Carrier A</td>
              <td className="p-2">$1M</td>
              <td className="p-2">$1,000</td>
              <td className="p-2">$12,500</td>
            </tr>
            <tr>
              <td className="p-2">Carrier B</td>
              <td className="p-2">$1M</td>
              <td className="p-2">$2,500</td>
              <td className="p-2">$11,800</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
