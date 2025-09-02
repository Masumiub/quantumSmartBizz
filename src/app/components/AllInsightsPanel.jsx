// components/AIInsightsPanel.jsx
// 'use client';

// const InsightCard = ({ insight }) => {
//   const getColor = (type) => {
//     switch (type) {
//       case 'positive': return 'border-l-green-500 bg-green-50';
//       case 'negative': return 'border-l-red-500 bg-red-50';
//       case 'warning': return 'border-l-yellow-500 bg-yellow-50';
//       case 'opportunity': return 'border-l-blue-500 bg-blue-50';
//       default: return 'border-l-gray-500 bg-gray-50';
//     }
//   };

//   const getIcon = (type) => {
//     switch (type) {
//       case 'positive': return '✅';
//       case 'negative': return '⚠️';
//       case 'warning': return '🔔';
//       case 'opportunity': return '💡';
//       default: return '📊';
//     }
//   };

//   return (
//     <div className={`border-l-4 p-4 mb-3 rounded-r-lg ${getColor(insight.type)}`}>
//       <div className="flex items-start">
//         <span className="text-xl mr-3">{getIcon(insight.type)}</span>
//         <div className="flex-1">
//           <h3 className="font-semibold text-gray-800">{insight.title}</h3>
//           <p className="text-gray-600 text-sm mb-2">{insight.message}</p>
//           <div className="bg-white p-2 rounded border">
//             <p className="text-xs text-gray-700"><strong>Recommendation:</strong> {insight.suggestion}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function AIInsightsPanel({ insights, loading }) {
//   if (loading) {
//     return (
//       <div className="bg-white p-4 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">AI Insights</h2>
//         <div className="animate-pulse">
//           <div className="h-4 bg-gray-200 rounded mb-2"></div>
//           <div className="h-4 bg-gray-200 rounded mb-2"></div>
//           <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//         </div>
//       </div>
//     );
//   }

//   if (!insights || insights.length === 0) {
//     return (
//       <div className="bg-white p-4 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">AI Insights</h2>
//         <p className="text-gray-500">No insights generated yet. Upload more data to get intelligent recommendations.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md">
//       <div className="flex items-center mb-4">
//         <h2 className="text-xl font-semibold">AI-Powered Insights</h2>
//         <span className="ml-2 bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
//           🤖 AI Analysis
//         </span>
//       </div>
      
//       <div className="space-y-3">
//         {insights.map((insight, index) => (
//           <InsightCard key={index} insight={insight} />
//         ))}
//       </div>
      
//       <div className="mt-4 pt-3 border-t">
//         <p className="text-xs text-gray-500">
//           Insights generated automatically based on data patterns and business intelligence algorithms.
//         </p>
//       </div>
//     </div>
//   );
// }


// components/AIInsightsPanel.jsx
'use client';

const InsightCard = ({ insight }) => {
  const getColor = (type) => {
    switch (type) {
      case 'positive': return 'border-l-green-500 bg-green-50 text-green-800';
      case 'negative': return 'border-l-red-500 bg-red-50 text-red-800';
      case 'warning': return 'border-l-yellow-500 bg-yellow-50 text-yellow-800';
      case 'opportunity': return 'border-l-blue-500 bg-blue-50 text-blue-800';
      default: return 'border-l-purple-500 bg-purple-50 text-purple-800';
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'positive': return '✅';
      case 'negative': return '⚠️';
      case 'warning': return '🔔';
      case 'opportunity': return '💡';
      default: return '📊';
    }
  };

  return (
    <div className={`border-l-4 p-4 mb-3 rounded-r-lg ${getColor(insight.type)}`}>
      <div className="flex items-start">
        <span className="text-xl mr-3">{getIcon(insight.type)}</span>
        <div className="flex-1">
          <h3 className="font-semibold mb-1">{insight.title}</h3>
          <p className="text-sm mb-2 opacity-90">{insight.message}</p>
          <div className="bg-white bg-opacity-50 p-2 rounded border border-current border-opacity-20">
            <p className="text-xs"><strong>Recommendation:</strong> {insight.suggestion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AIInsightsPanel({ insights, loading }) {
  if (loading) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">AI Insights</h2>
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    );
  }

  if (!insights || insights.length === 0) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">AI Insights</h2>
        <p className="text-gray-500">No insights generated yet. Add more data to get intelligent recommendations.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">AI-Powered Insights</h2>
        <span className="ml-2 bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
          🤖 AI Analysis
        </span>
      </div>
      
      <div className="space-y-3">
        {insights.map((insight, index) => (
          <InsightCard key={index} insight={insight} />
        ))}
      </div>
    </div>
  );
}