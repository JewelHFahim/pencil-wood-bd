import { Dispatch, FC, SetStateAction } from "react";

interface ProductSortingProps {
  setSort: Dispatch<SetStateAction<string>>;
}
const ProductSorting: FC<ProductSortingProps> = ({ setSort }) => {
  const features = [
    {
      id: 1,
      name: "Availability",
      slug: "-stock",
    },
    {
      id: 2,
      name: "Best Selling",
      slug: "-sales_count",
    },
    {
      id: 3,
      name: "Alphabetically, A-Z",
      slug: "name",
    },
    {
      id: 4,
      name: "Alphabetically, Z-A",
      slug: "-name",
    },
    {
      id: 5,
      name: "Price, low to high",
      slug: "current_price",
    },
    {
      id: 6,
      name: "Price, high to low",
      slug: "-current_price",
    },
    {
      id: 7,
      name: "Date, new to old",
      slug: "-created_at",
    },
    {
      id: 8,
      name: "Date, old to new",
      slug: "created_at",
    },
  ];

  return (
    <div className="relative w-1/2 md:w-max justify-end">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="w- px-2 h-9 origin-top-right border border-gray-300 focus:outline-primary"
      >
        <option className="">☰ Featured</option>
        {features.map((item) => (
          <option key={item.id} value={item.slug}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductSorting;
