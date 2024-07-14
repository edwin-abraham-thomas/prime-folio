import { ResolveFn } from '@angular/router';
import { ContentType, Layout } from '../../models/layout';
import { inject } from '@angular/core';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { ContentService } from '../../../../../api/services';
import { ApiContentUserIdGet$Json$Params } from '../../../../../api/fn/content/api-content-user-id-get-json';
import { firstValueFrom } from 'rxjs';
import { Content } from '../../../../../api/models';

export const contentResolver: ResolveFn<Content> = async (route, state) => {
  const authService: AuthService = inject(AuthService);
  const contentService: ContentService = inject(ContentService);
  const userId = await authService.userId;

  if (!userId) {
    return {} as Content;
  }

  const params: ApiContentUserIdGet$Json$Params = {
    userId: userId,
  };
  const response = await firstValueFrom(contentService.apiContentUserIdGet$Json(params));

  return response;
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
