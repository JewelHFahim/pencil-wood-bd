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
  count: number
}

export interface CategoryResponse {
  id: number;
  slug: string;
  title: string;
}

export interface CategoryApiResponse{
  results: CategoryResponse[]
}