export interface ProductResponse {
  id: number;
  category: number;
  name: string;
  slug: string;
  details: string;
  current_price: string;
  discount_price: string | null;
}

export interface ProductsApiResponse {
  results: ProductResponse[];
  count: number;
}

export interface SingleCartApiResponse {
  customer: number;
  discount_price: string;
  id: number;
  price: string;
  product: number;
  quantity: number;
  total_price: string;
}

export interface CategoryResponse {
  id: number;
  slug: string;
  title: string;
}

export interface CategoryApiResponse {
  results: CategoryResponse[];
}
