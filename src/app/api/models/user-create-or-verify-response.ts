/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface UserCreateOrVerifyResponse {
  isCreated?: boolean;
  isPrimeFolioVerified?: boolean;
  user?: User;
}
