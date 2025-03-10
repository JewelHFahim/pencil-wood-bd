export interface LoginApiResponse {
  status: boolean;
  message: string;
  token: {
    access: string;
    refresh: string;
  };
}

export interface LoginApiErrorResponse {
  status: number;
  data: {
    error: string;
    message: string;
    status: boolean;
  };
}

export interface AuthApiRegResponse {
  message: string;
}

export interface RegistrationProps {
  name: string;
  phone: string;
  email: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  user_type: string;
}

export interface Profile {
  name: string;
  phone: string;
  email: string;
}

export interface UserAddress {
  id: number;
  street_01: string;
  street_02: string;
  upazila: string;
  post_office: string;
  post_code: string;
  district: string;
  country: string;
}

export interface UserApiResponse {
  status: string;
  data: User;
  profile: Profile;
  user_address: UserAddress[];
  // user_order: UserOrder[];
}

// Orders Types
export interface CreateOrder {
  full_name: string;
  phone_number: string;
  street: string;
  upazila: string;
  district: string;
}

export interface OrderItems {
  id: number;
  product: number;
  customer: number;
  quantity: number;
  price: string;
  total_price: string;
}

export interface address {
  id: number;
  street_01: string;
  street_02: null;
  upazila: string;
  post_office: string;
  post_code: string;
  district: string;
  country: string;
}

export interface Order {
  id: number;
  order_items: OrderItems[];
  address: address[];
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

export interface OrderApiResponse {
  status: boolean;
  message: string;
  order: Order;
}

// Orders Parameters
export interface IOrderPayload {
  name: string;
  phone_number: string;
  existing_address?: number;
  street?: string;
  upazila?: string;
  district?: string;
}
