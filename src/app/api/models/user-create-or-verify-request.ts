/* tslint:disable */
/* eslint-disable */
export interface UserCreateOrVerifyRequest {
  email: string;
  firstName: string;
  lastName?: string | null;
  phone?: string | null;
  userId: string;
}
