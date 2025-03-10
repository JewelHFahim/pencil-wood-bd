export interface OrderItems {
  customer: number;
  id: number;
  price: string;
  product: number;
  quantity: number;
  total_price: string;
}

export interface SingleOrderItem {
  address: {
    id: number;
    street_01: string;
    street_02: string;
    upazila: string;
  };
  customer: number;
  delivery_by: string;
  id: number;
  name: string;
  order_items: OrderItems[];
  payment_method: string;
  payment_partial: boolean;
  payment_status: string;
  payment_type: string;
  phone_number: string;
  status: string;
  total_cost: string;
  tracking_id: string;

  created_at: string;
}

export interface OrderListApiResponse {
  count: number;
  next: string;
  previous: string;
  results: {
    data: SingleOrderItem[];
    message: string;
    status: boolean;
  };
}

// ===================>> Order Details <<==================

export interface OrderDetails {
  id: number;
  order_items: [
    {
      id: number;
      product: number;
      customer: number;
      quantity: number;
      price: string;
      total_price: string;
    }
  ];
  address: {
    id: number;
    street_01: string;
    street_02: string;
    upazila: string;
    post_office: string;
    post_code: string;
    district: string;
    country: string;
  };
  name: string;
  phone_number: string;
  total_cost: string;
  payment_type: string;
  payment_status: string;
  payment_partial: boolean;
  status: string;
  tracking_id: string;
  delivery_by: string;
  created_at: string;
  updated_at: string;
  customer: number;
  payment_method: string;
}
