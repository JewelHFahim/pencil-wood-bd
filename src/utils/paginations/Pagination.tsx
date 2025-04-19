import { Dispatch, FC, SetStateAction } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface PaginationProps{
  page:number, 
  setPage: Dispatch<SetStateAction<number>>, 
  count: number;
  
}

const Pagination:FC<PaginationProps> = ({page, setPage, count}) => {

  const handlePagination = (value:string) => {
    if (value === "dec" && page > 1) {
      setPage(page - 1);
    }
    if (value === "inc" && page < Math.ceil(count/12)) {
      setPage(page + 1);
    }
  };

  return (
    <div className="mt-10 flex justify-center items-center gap-5 text-xl">
      <button
        onClick={() => handlePagination("dec")}
        className="border border-primary px-5 py-2 text-primary hover:bg-primary disabled:border-gray-400 disabled:text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:text-white transition-all duration-300 ease-in-out hover:border-white cursor-pointer"
        disabled={page === 1}
      >
        <BsArrowLeft />
      </button>

      <div className="text-sm font-medium">
   
        Page - {page} of {Math.ceil(count/12)}
      </div>

      <button
        onClick={() => handlePagination("inc")}
        className="border border-primary px-5 py-2 text-primary hover:bg-primary disabled:border-gray-400 disabled:text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:text-white transition-all duration-300 ease-in-out hover:border-white cursor-pointer"
        disabled={page === Math.ceil(count/12)}
      >
        <BsArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
