import { Component } from '@angular/core';
import { ContentType, Layout } from '../../../models/layout';
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
          type: ContentType.header,
        },
      },
      {
        dimension: {
          rowSpan: 2,
          colSpan: 3,
        },
        content: {
          title: 'About',
          discription:
            'This is a sample about me description',
          type: ContentType.section,
        },
      },
      {
        dimension: {
          rowSpan: 2,
          colSpan: 1,
        },
        content: {
          title: 'Contacts',
          discription: 'Phone: 1234567890\n Email: samplesamplesample@mail.com',
          type: ContentType.section,
        },
      },
    ],
  };
}
