import { Dispatch, FC, SetStateAction, useState } from "react";
import Box from "@mui/joy/Box";
import Slider from "@mui/joy/Slider";
import Input from "@mui/joy/Input";
import { GlobalStyles } from "@mui/system";

interface PriceRangeSliderProps {
  setMinPrice: Dispatch<SetStateAction<number>>;
  setMaxPrice: Dispatch<SetStateAction<number>>;
}

const PriceRangeSlider: FC<PriceRangeSliderProps> = ({setMinPrice, setMaxPrice}) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 5000]);

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setPriceRange(newValue as [number, number]);
      setMinPrice(priceRange[0]);
      setMaxPrice(priceRange[1]);
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const newValue = Number(value);
    if (!isNaN(newValue)) {
      const updatedRange: [number, number] = [...priceRange];
      updatedRange[index] = Math.min(Math.max(newValue, 100), 5000); // Ensure within range
      setPriceRange(updatedRange);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Global Styles to Remove Number Input Arrows */}
      <GlobalStyles
        styles={{
          "input[type=number]": {
            MozAppearance: "textfield",
            WebkitAppearance: "none",
            margin: 0,
          },
          "input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button":
            {
              WebkitAppearance: "none",
              margin: 0,
            },
        }}
      />

      {/* Price Input Fields */}
      <Box display="flex" justifyContent="space-left" gap={1} mb={0}>
        <Input
          type="number"
          value={priceRange[0]}
          onChange={(e) => handleInputChange(0, e.target.value)}
          sx={{
            width: 70,
            borderRadius: 0,
            fontSize: 14,
            fontWeight: "500",
            color: "#fd7e14",
            borderColor: "#fd7e14",
            "&:focus": {
              outline: "2px solid red",
            },
            "&:focus-visible": {
              outline: "2px solid red",
            },
          }}
        />
        <Input
          type="number"
          value={priceRange[1]}
          onChange={(e) => handleInputChange(1, e.target.value)}
          sx={{
            width: 70,
            borderRadius: 0,
            fontSize: 14,
            margin: 0,
            fontWeight: "500",
            color: "#fd7e14",
          }}
        />
      </Box>

      {/* Price Range Slider */}
      <Slider
        min={100}
        max={5000}
        value={priceRange}
        onChange={handleSliderChange}
        // valueLabelDisplay="auto"
        // sx={{ color: "#06b9c0" }}
        sx={{
          maxWidth: "94%",
          marginLeft: "10px",
          color: "#4f46e5", // Slider active color (thumb and track)
          [`& .MuiSlider-track`]: { backgroundColor: "rgb(117, 117, 117)" },
          [`& .MuiSlider-thumb`]: { backgroundColor: "#fd7e14" },
          [`& .MuiSlider-rail`]: { backgroundColor: "#fd7e14" },
        }}
      />
    </Box>
  );
};

export default PriceRangeSlider;
