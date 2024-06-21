/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Content } from '../../models/content';

export interface ApiContentUserIdGet$Plain$Params {
  userId: string;
}

export function apiContentUserIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiContentUserIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Content>> {
  const rb = new RequestBuilder(rootUrl, apiContentUserIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('userId', params.userId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Content>;
    })
  );
}

apiContentUserIdGet$Plain.PATH = '/api/Content/{userId}';
