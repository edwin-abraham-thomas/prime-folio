import { Component, OnInit } from '@angular/core';
import { Layout } from '../../../models/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { TileComponent } from '../../../../../../shared/components/tile/tile.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-portfolio-update-container',
  standalone: true,
  imports: [MatGridListModule, TileComponent, CommonModule],
  templateUrl: './portfolio-update-container.component.html',
  styleUrl: './portfolio-update-container.component.scss',
})
export class PortfolioUpdateContainerComponent implements OnInit {

  layout$: Observable<Layout> | null = null;

  constructor(private readonly _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.layout$ = this._route.data.pipe(
      tap(data => console.log('route.data', data)),
      switchMap(data => of(data['layout'] as Layout))
    );
  }
}
