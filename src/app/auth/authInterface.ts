export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  role?: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IAuthResponse {
  token: string;
}
