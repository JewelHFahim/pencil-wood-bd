export interface AuthApiResponse {
  access: string;
  refresh: string;
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

export interface UserApiResponse {
  status: string;
  data: User;
  profile: Profile;
  // user_address: UserAddress[];
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

export interface Order {
  id: number;
  order_items: [];
  address: [];
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
