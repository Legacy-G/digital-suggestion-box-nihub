const FilterBar = ({ searchTerm, setSearchTerm, setCategory, setStatus }) => {
  return (
    <div className="bg-white rounded-lg p-4 mb-6 shadow-sm flex flex-wrap items-center gap-4">
      <input
        type="text"
        placeholder="Search suggestions..."
        className="border rounded-md px-3 py-2 w-full sm:w-1/3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-md px-3 py-2 w-full sm:w-1/4"
      >
        <option value="">All Categories</option>
        <option value="Performance">Performance</option>
        <option value="Feature Request">Feature Request</option>
        <option value="Bug Fix">Bug Fix</option>
        <option value="Accessibility">Accessibility</option>
        <option value="UI Improvement">UI Improvement</option>
      </select>
      <select
        onChange={(e) => setStatus(e.target.value)}
        className="border rounded-md px-3 py-2 w-full sm:w-1/4"
      >
        <option value="">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};

export default FilterBar;
