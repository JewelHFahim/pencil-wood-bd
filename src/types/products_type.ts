export interface ProductResponse {
  id: number;
  category: number;
  name: string;
  slug: string;
  details: string;
  current_price: string;
  discount_price: string | null;
  short_description: string;
  product_image: {
    id: number;
    image: string;
  }[];
}

export interface ProductsApiResponse {
  status: boolean;
  count: [];
  next: string;
  previous: string;
  data: ProductResponse[];
}

export interface DetailsProductApiResponse {
  product: ProductResponse;
  best_selling_products: ProductResponse[];
  related_products: ProductResponse[];
  status: boolean;
}

export interface SingleCartApiResponse {
  cart: {
    customer: number;
    discount_price: string;
    id: number;
    price: string;
    product: number;
    quantity: number;
    total_price: string;
  };
  message: string;
}

export interface CartResponse {
  id: number;
  customer: number;
  discount_price: string;
  price: string;
  product: number;
  quantity: number;
  total_price: string;
}

export interface CartListApiResponse {
  status: boolean;
  data: CartResponse[];
}

export interface CartApiResponse {
  status: boolean;
  message: string;
  data: CartResponse[];
}


export interface CategoryResponse {
  id: number;
  slug: string;
  title: string;
  image: string;
}

export interface CategoryApiResponse {
  status: boolean;
  count: number;
  data: CategoryResponse[];
}
