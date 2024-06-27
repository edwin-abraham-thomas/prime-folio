import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../../../api/models';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UserDetailsForm } from '../../models/user-details-form';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User | null = null;
  @Output() userUpdate: EventEmitter<User> = new EventEmitter<User>();

  userDetailsForm: FormGroup<UserDetailsForm>;

  constructor() {
    this.userDetailsForm = new FormGroup<UserDetailsForm>({
      _id: new FormControl('', { nonNullable: true }),
      firstName: new FormControl('', { nonNullable: true }),
      lastName: new FormControl(''),
      email: new FormControl('', { nonNullable: true }),
      phone: new FormControl(''),
    });
  }

  ngOnInit(): void {
    if (!this.user?._id || !this.user?.firstName || !this.user?.email) {
      return;
    }
    this.userDetailsForm.setValue({
      _id: this.user?._id,
      firstName: this.user?.firstName,
      lastName: this.user?.lastName,
      email: this.user?.email,
      phone: this.user?.phone,
    });
  }

  Update() {
    this.userUpdate.emit(this.userDetailsForm.value as User);
  }
}
