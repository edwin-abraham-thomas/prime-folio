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
import { filter } from 'rxjs';

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

  constructor(private router: Router){}

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
}
