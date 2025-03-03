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
