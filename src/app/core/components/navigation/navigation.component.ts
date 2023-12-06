import { CommonModule } from '@angular/common';
import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavItem } from '../../models/nav-item';
import {
  MatButtonToggleChange,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { AuthService, LogoutOptions } from '@auth0/auth0-angular';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonToggleModule,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnInit {

  @ContentChild('appContent')
  appContent!: TemplateRef<unknown>;

  selectedNavItem: NavItem | undefined;

  constructor(private router: Router, private authService: AuthService){}

  navItems: Array<NavItem> = [
    { displayName: 'Profile', navLink: 'profile' },
    { displayName: 'Portfolio', navLink: 'portfolio-update' },
  ];
  
  ngOnInit(): void {
    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd)
    )
    .subscribe((event) => {
      const rootUrlSegment = (event as NavigationEnd).url.split('/')[1];
      this.selectedNavItem = this.navItems.find(item => item.navLink == rootUrlSegment)
      console.log(rootUrlSegment)
    })
  }

  isSelectedNavItem(navLink: string) {
    return navLink === this.selectedNavItem?.navLink
  }

  onNavSelectionChange(change: MatButtonToggleChange) {
    this.router.navigate([`/${change.value}`]);
  }

  onLogin() {
    this.authService.loginWithRedirect()
  }

  onLogout() {
    const opts: LogoutOptions = {
      
    }
    this.authService.logout({
      logoutParams: {
        returnTo: environment.auth.logoutRedirectUrl
      }
    })
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.authService.isAuthenticated$;
  }
}
