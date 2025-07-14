import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const statusColor = {
  Pending: 'bg-gray-200 text-gray-800',
  'In Progress': 'bg-purple-200 text-purple-800',
  Completed: 'bg-green-200 text-green-800',
  Rejected: 'bg-red-200 text-red-800',
};

const SuggestionTable = ({ suggestions }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
      <table className="w-full table-auto text-sm">
        <thead className="text-left bg-gray-50 border-b">
          <tr className="text-gray-500">
            <th className="p-4">Suggestion</th>
            <th className="p-4">Category</th>
            <th className="p-4">Status</th>
            <th className="p-4">Submitted</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {suggestions.map((s) => (
            <tr key={s.id} className="border-b hover:bg-gray-50">
              <td className="p-4 font-medium">{s.title}</td>
              <td className="p-4">{s.category || '-'}</td>
              <td className="p-4">
                <span className={`px-2 py-1 rounded text-xs font-medium ${statusColor[s.status] || ''}`}>
                  {s.status}
                </span>
              </td>
              <td className="p-4">{new Date(s.submitted_at).toLocaleDateString()}</td>
              <td className="p-4 text-center">
                <Link
        to={`/suggestion/${s.id}`}
        className="text-blue-600 hover:underline text-sm inline-flex items-center gap-1"
      >
        View <ArrowRight size={14} />
      </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuggestionTable;
