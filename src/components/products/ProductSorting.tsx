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
    }
  ];

  return (
    <div className="relative w-full md:w-max justify-end">
      <select onChange={e=> setSort(e.target.value)} className="w-48 px-1.5 py-2 md:py-1.5 origin-top-right border border-gray-300 focus:outline-primary">
        <option value="" hidden>
          Featured
        </option>
        {features.map((item) => (
          <option key={item.id} value={item.slug}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default ProductSorting;
