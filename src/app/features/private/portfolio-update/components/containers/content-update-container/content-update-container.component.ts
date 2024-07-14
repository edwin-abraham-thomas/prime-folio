import { Component, OnInit } from '@angular/core';
import { Layout } from '../../../models/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { TileComponent } from '../../../../../../shared/components/tile/tile.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, of, switchMap, tap } from 'rxjs';
import { Content } from '../../../../../../api/models';

@Component({
  selector: 'app-portfolio-update-container',
  standalone: true,
  imports: [MatGridListModule, TileComponent, CommonModule],
  templateUrl: './content-update-container.component.html',
  styleUrl: './content-update-container.component.scss',
})
export class ContentUpdateContainerComponent implements OnInit {

  content$: Observable<Content> | null = null;

  constructor(private readonly _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.content$ = this._route.data.pipe(
      tap(data => console.log('route.data', data)),
      switchMap(data => of(data['content'] as Content))
    );
  }
}
