import { useState } from "react";
import Box from "@mui/joy/Box";
import Slider from "@mui/joy/Slider";
import Input from "@mui/joy/Input";
import { GlobalStyles } from "@mui/system";

export default function PriceRangeSlider() {
  const [priceRange, setPriceRange] = useState<[number, number]>([1000, 5000]);

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setPriceRange(newValue as [number, number]);
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const newValue = Number(value);
    if (!isNaN(newValue)) {
      const updatedRange: [number, number] = [...priceRange];
      updatedRange[index] = Math.min(Math.max(newValue, 1000), 5000); // Ensure within range
      setPriceRange(updatedRange);
    }
  };

  return (
    <Box sx={{ width: "100%", padding: 1 }}>
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
          sx={{ width: 70, borderRadius: 0, fontSize: 14 }}
        />
        <Input
          type="number"
          value={priceRange[1]}
          onChange={(e) => handleInputChange(1, e.target.value)}
          sx={{ width: 70, borderRadius: 0, fontSize: 14, margin: 0 }}
        />
      </Box>

      {/* Price Range Slider */}
      <Slider
        min={1000}
        max={5000}
        value={priceRange}
        onChange={handleSliderChange}
        // valueLabelDisplay="auto"
        // sx={{ color: "#06b9c0" }}
        sx={{
          color: "#4f46e5", // Slider active color (thumb and track)
          [`& .MuiSlider-track`]: { backgroundColor: "rgb(117, 117, 117)" },
          [`& .MuiSlider-thumb`]: { backgroundColor: "#4f46e5" },
          [`& .MuiSlider-rail`]: { backgroundColor: "#rgb(117, 117, 117)" },
        }}
      />
    </Box>
  );
}
