import { Component } from '@angular/core';
import { Layout } from '../../../models/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { TileComponent } from '../../tile/tile.component';

@Component({
  selector: 'app-portfolio-update-container',
  standalone: true,
  imports: [MatGridListModule, TileComponent],
  templateUrl: './portfolio-update-container.component.html',
  styleUrl: './portfolio-update-container.component.scss',
})
export class PortfolioUpdateContainerComponent {
  layout: Layout = {
    dimension: {
      rowSpan: 0,
      colSpan: 4,
    },
    tiles: [
      {
        dimension: {
          rowSpan: 1,
          colSpan: 4,
        },
        content: {
          title: 'Edwin Abraham Thomas',
          type: 'header'
        }
      },
      {
        dimension: {
          rowSpan: 2,
          colSpan: 2,
        },
        content: {
          title: 'Title',
          discription:
            'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
            type: 'section'
        },
      },
    ],
  };
}
