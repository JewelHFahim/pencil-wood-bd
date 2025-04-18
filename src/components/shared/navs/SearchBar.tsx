import React, { SetStateAction, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

interface SearchBarProps {
  isOpenSearch: boolean;
  setIsOpenSearch: React.Dispatch<SetStateAction<boolean>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  isOpenSearch,
  setIsOpenSearch,
}) => {
  const [search, setSearrch] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpenSearch) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    // Cleanup function to ensure scrolling is re-enabled when the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenSearch]);

  const handleSearch = () => {
    const rawQuery = search?.trim().replace(/\s+/g, "-");
    console.log(rawQuery);

    if (search?.length > 0) {
      navigate(`/products/${rawQuery}`);
      setIsOpenSearch(!isOpenSearch);
    }if(search?.length <= 0){
      window.alert("write product name for search")
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[999]">
      <div className="w-full h-[120px] sm:h-[190px] bg-white">
        <div className="w-full h-full flex items-center justify-center gap-1 px-2 sm:px-0">
          <div className="w-[95%] sm:w-[50%] border border-gray-400 relative h-[42px] rounded-sm">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearrch(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search"
              className="h-full w-full px-4 placeholder:text-primary text-primary focus:outline-primary"
            />

            <button
              type="button"
              onClick={handleSearch}
              className="absolute top-1/2 -translate-y-1/2 right-4 text-primary text-xl h-full w-max px-2 cursor-pointer"
            >
              <BsSearch />
            </button>
          </div>

          <button
            onClick={() => setIsOpenSearch(!isOpenSearch)}
            className="text-3xl cursor-pointer hover:text-red-700"
          >
            <IoCloseOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
