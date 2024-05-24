import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ContentType, Tile } from '../../models/layout';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss',
})
export class TileComponent {
  @Input() tile!: Tile;

  get ContentType_Header(): ContentType {
    return ContentType.header;
  }

  get ContentType_Section(): ContentType {
    return ContentType.section;
  }
}
