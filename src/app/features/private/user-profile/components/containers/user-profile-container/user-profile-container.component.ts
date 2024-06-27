import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../../../../shared/services/auth/auth.service';
import { UserService } from '../../../../../../api/services';
import { Observable, lastValueFrom } from 'rxjs';
import { User } from '../../../../../../api/models';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from '../../user-details/user-details.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-profile-container',
  standalone: true,
  templateUrl: './user-profile-container.component.html',
  styleUrl: './user-profile-container.component.scss',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    UserDetailsComponent,
  ],
})
export class UserProfileContainerComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  user$: Observable<User> | null = null;

  async ngOnInit(): Promise<void> {
    const authenticatedUserId = await this.authService.userId;
    if (authenticatedUserId) {
      this.user$ = this.userService.apiUserUserIdGet$Json({
        userId: authenticatedUserId,
      });
    }
  }

  async UpdateUserDetails(userUpdate: User) {
    if (!userUpdate._id || !userUpdate.firstName || !userUpdate.email) {
      return;
    }
    const updateApi$ = this.userService.apiUserPut$Json({
      body: {
        userId: userUpdate._id,
        firstName: userUpdate.firstName,
        lastName: userUpdate.lastName ?? '',
        email: userUpdate.email,
        phone: userUpdate.phone ?? ''
      },
    });

    const updatResponse = await lastValueFrom(updateApi$);
  }
}
