import { Link } from "react-router";
import "./ProductCard.css";
import React from "react";

const SuggetionProductCard: React.FC<{ idx: number }> = ({ idx }) => {
  return (
    <Link to={`/products/${idx + 1}`}>
      <div className="relative img-container overflow-hidden">
        <img
          src="/product_1.png"
          alt="Main Image"
          className="w-[250px] h-[250px] object-cover main-img transition-opacity duration-500"
        />

        <img
          src="/product_2.jpg"
          alt="Secondary Image"
          className="w-[250px] h-[250px] object-cover second-img transition-opacity duration-500"
        />
      </div>

      <div className="mt-2">
        <h2 className="text-sm sm:text-base sm:font-medium">Winter Jacket</h2>
        <div className="flex items-center gap-3 text-sm sm:font-medium">
          <p className="text-primary">Tk: 1500 BDT</p>
          {/* <p className="line-through text-gray-500">
            Tk: 1800 BDT
          </p> */}

          {/* <div className="bg-primary text-white text-xs px-2">Sale</div> */}
        </div>
      </div>
    </Link>
  );
};

export default SuggetionProductCard;
