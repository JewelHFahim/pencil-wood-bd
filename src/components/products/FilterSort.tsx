const FilterSort = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <p className="text-sm italic"> 299 products</p>

      <div className="flex items-center gap-2">
        <p className="text-xs uppercase text-gray-400">Sort By:</p>
        <select className="text-sm text-primary">
          <option value="">Date new to old</option>
          <option value="">Date new to old</option>
          <option value="">Date new to old</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSort;
