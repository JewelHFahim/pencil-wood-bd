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
  message: string;
  order: Order;
}


// Orders Parameters
export interface IAddressBase {
  full_name: string;
  phone_number: string;
}

export interface IAddressWithNewDetails extends IAddressBase {
  existing_address?: never; // Ensures new addresses don't have existing_address
  street: string,
  upazila: string;
  district: string;
}

export interface IAddressWithExisting extends IAddressBase {
  existing_address: number; // Change to number (since it's an ID)
  street?: never;
  upazila?: never;
  district?: never;
}

// A union type that enforces one of the two scenarios
export type IAddress = IAddressWithNewDetails | IAddressWithExisting;

export interface IOrderInfo {
  full_name: string;
  phone_number: string;
  addressData:
    | number // existing_address (as an ID)
    | Omit<IAddressWithNewDetails, "full_name" | "phone_number">;
}
