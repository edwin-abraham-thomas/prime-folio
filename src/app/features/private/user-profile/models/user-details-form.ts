import { FormControl } from '@angular/forms';

export interface UserDetailsForm {
  _id: FormControl<string>;
  firstName: FormControl<string>;
  lastName: FormControl<string | null | undefined>;
  email: FormControl<string>;
  phone: FormControl<string | null | undefined>;
}
