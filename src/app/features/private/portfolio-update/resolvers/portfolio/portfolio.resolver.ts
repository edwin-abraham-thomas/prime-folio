import { ResolveFn } from '@angular/router';
import { ContentType, Layout } from '../../models/layout';

export const portfolioResolver: ResolveFn<Layout> = (route, state) => {
  return sampleLayout;
};

const sampleLayout: Layout = {
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
        discription: 'This is a sample about me description',
        type: ContentType.section,
      },
    },
    {
      dimension: {
        rowSpan: 4,
        colSpan: 1,
      },
      content: {
        title: 'Contacts',
        discription: 'Phone: 1234567890\n Email: samplesamplesample@mail.com',
        type: ContentType.section,
      },
    },
    {
      dimension: {
        rowSpan: 2,
        colSpan: 3,
      },
      content: {
        title: 'About',
        discription: 'This is a sample about me description',
        type: ContentType.section,
      },
    },
  ],
};
