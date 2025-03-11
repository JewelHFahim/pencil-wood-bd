// Sliders
export interface Slider {
  id: number;
  image: string;
  title: string;
  url: string;
  button_name: string;
  is_active: boolean;
}

export interface SliderApiResponse {
  status: boolean;
  count: number;
  data: Slider[];
}

// Soacials Links

export interface Social {
  id: number;
  name: string;
  icon: string;
  url: string;
  is_active: boolean;
}

export interface SocialApiResponse {
  status: boolean;
  count: number;
  data: Slider[];
}
