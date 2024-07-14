import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContentType, Tile } from '../../../api/models';

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

  //#region ContentType Getters
  get ContentType_Header(): ContentType {
    return ContentType.$0;
  }
  get ContentType_Section(): ContentType {
    return ContentType.$1;
  }
  //#endregion
}
