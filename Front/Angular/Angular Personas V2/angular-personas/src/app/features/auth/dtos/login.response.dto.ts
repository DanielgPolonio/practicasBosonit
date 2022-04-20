import { Authority } from "./authority.response.dto";

export interface LoginResponseDto {
  authorities: Authority[];
  token: string;
}
